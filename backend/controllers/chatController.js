

// Controller for getting chat (creating if it does not exist)

import prisma from "../lib/prisma.js";

export const getChat = async (req, res) => {
    try {
        const { userId } = await req.auth();
        const { listingId, chatId } = req.body;

        const listing = await prisma.listing.findUnique({
            where: {id: listingId}
        })

        if(!listing) {
            return res.status(404).json({ message: "Listing Not Found" })
        }

        //find existing chat

        let existingChat = null;
        if(chatId){
            existingChat = await prisma.chat.findFirst({
                where: {id: chatId, OR: [{ chatUserId: userId }, { ownerUserId: userId }]},
                include: {listing: true, ownerUser: true, chatUser: true, messages: true}
            })
        }else{
            existingChat = await prisma.chat.findFirst({
                where: {listingId, chatUserId: userId, ownerUserId: listing.ownerId},
                include: {listing: true, ownerUser: true, chatUser: true, messages: true}
            })
        }

        if(existingChat){
            res.json({ chat: existingChat });
            if(existingChat.isLastMessageRead === false){
                const lastMessage = existingChat.messages[existingChat.messages.length - 1]
                const isLastMessageSendByMe = lastMessage.sender_id === userId;

                if(!isLastMessageSendByMe){
                    await prisma.chat.update({
                        where: { id: existingChat.id },
                        data: { isLastMessageRead: true },
                    })
                }
            }
            return null
        }

        const newChat = await prisma.chat.create({
            data: {
                listingId,
                chatUserId: userId,
                ownerUserId: listing.ownerId,
            }
        })

        const chatWithData = await prisma.chat.findUnique({
            where: {id: newChat.id},
            include: {listing: true, ownerUser: true, chatUser: true}
        })
        return res.json({ chat: chatWithData });

    }catch (error) {
        console.log(error);
        res.status(500).json({ message: error.code || error.message });
    }
}

// Controller for getting all chats for user

export const getAllUserChats = async (req, res) => {
    try {
        const { userId } = await req.auth()
        const chats = await prisma.chat.findMany({
            where: {OR: [{ chatUserId: userId }, { ownerUserId: userId }]},
            include: {listing: true, ownerUser: true, chatUser: true},
            orderBy: {updatedAt: "desc"}
        })

        if(!chats || chats.length === 0){
            return res.json({ chats: [] });
        }

        return res.json({chats});

    }catch (error) {
        console.log(error);
        res.status(500).json({ message: error.code || error.message });
    }
}

// Controller for adding message to chat

export const sendChatMessages = async (req, res) => {
    try {
        const { userId } = await req.auth();
        const { chatId, message } = req.body;
        const chat = await prisma.chat.findFirst({
            where: {
                AND: [{ id: chatId }, {OR: [{chatUserId: userId }, {ownerUserId: userId }]}]
            }, 
            include: {listing: true, ownerUser: true, chatUser: true}
        })

        if (!chat) {
            return res.status(404).json({ message: "Chat not found" });
        }

        const newMessage = {
            message,
            senderId: userId,
            chatId,
            createdAt: new Date()
        }

        await prisma.message.create({
            data: newMessage
        })

        res.json({ message: "Message Sent", newMessage });

        await prisma.chat.update({
            where: {id: chatId},
            data: {lastMessage: newMessage.message, isLastMessageRead: false, lastMessageSenderId: userId}
        })

    }catch (error) {
        console.log(error);
        res.status(500).json({ message: error.code || error.message });
    }
}

export const cancelRentalRequest = async (req, res) => {
    try {
        const { userId } = await req.auth();
        const { rentalRequestId } = req.body;

        const rentalRequest = await prisma.rentalRequest.findUnique({
            where: { id: rentalRequestId }
        })

        if (!rentalRequest) return res.status(404).json({ message: "Rental request not found" })
        if (rentalRequest.renterId !== userId) return res.status(403).json({ message: "Unauthorized" })
        if (rentalRequest.status !== 'pending') return res.status(400).json({ message: "Can only cancel pending requests" })

        // Update rental request status
        await prisma.rentalRequest.update({
            where: { id: rentalRequestId },
            data: { status: 'denied' }
        })

        const requestMessage = await prisma.message.findFirst({
            where: {
                chatId: rentalRequest.chatId,
                type: 'rental_request',
                message: { contains: rentalRequestId }
            }
        })

        if (requestMessage) {
            const parsed = JSON.parse(requestMessage.message)
            await prisma.message.update({
                where: { id: requestMessage.id },
                data: { message: JSON.stringify({ ...parsed, status: 'cancelled' }) }
            })
        }

        return res.json({ message: "Rental request cancelled" })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.code || error.message })
    }
}

// Rental Requests

export const sendRentalRequest = async (req, res) => {
    try {
        const { userId } = await req.auth();
        const { listingId, rentalStart, rentalEnd } = req.body;

        const listing = await prisma.listing.findUnique({
            where: { id: listingId }
        })

        if (!listing) return res.status(404).json({ message: "Listing not found" })
        if (listing.status !== 'active') return res.status(400).json({ message: "Listing is not available" })
        if (listing.ownerId === userId) return res.status(400).json({ message: "You can't rent your own listing" })

        // Create or find existing chat
        let chat = await prisma.chat.findFirst({
            where: { listingId, chatUserId: userId, ownerUserId: listing.ownerId }
        })

        if (!chat) {
            chat = await prisma.chat.create({
                data: { listingId, chatUserId: userId, ownerUserId: listing.ownerId }
            })
        }

        // Check no pending request already exists
        const existingRequest = await prisma.rentalRequest.findFirst({
            where: { chatId: chat.id, status: 'pending' }
        })

        if (existingRequest) {
            return res.status(400).json({ message: "You already have a pending rental request for this listing" })
        }

        // Create rental request
        const rentalRequest = await prisma.rentalRequest.create({
            data: {
                chatId: chat.id,
                listingId,
                renterId: userId,
                ownerId: listing.ownerId,
                rentalStart: new Date(rentalStart),
                rentalEnd: new Date(rentalEnd),
            }
        })

        // Calculate days and total price
        const days = Math.ceil((new Date(rentalEnd) - new Date(rentalStart)) / (1000 * 60 * 60 * 24))
        const totalPrice = days * listing.price_per_day

        // Send rental request message into the chat
        await prisma.message.create({
            data: {
                chatId: chat.id,
                senderId: userId,
                type: 'rental_request',
                message: JSON.stringify({
                    rentalRequestId: rentalRequest.id,
                    rentalStart,
                    rentalEnd,
                    days,
                    totalPrice,
                    pricePerDay: listing.price_per_day,
                    status: 'pending'
                })
            }
        })

        await prisma.chat.update({
            where: { id: chat.id },
            data: {
                lastMessage: "Rental request sent",
                isLastMessageRead: false,
                lastMessageSenderId: userId
            }
        })

        // Return chat with all data so frontend can open it
        const chatWithData = await prisma.chat.findUnique({
            where: { id: chat.id },
            include: { listing: true, ownerUser: true, chatUser: true, messages: true }
        })

        return res.json({ message: "Rental request sent", chat: chatWithData })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.code || error.message })
    }
}

export const respondToRentalRequest = async (req, res) => {
    try {
        const { userId } = await req.auth();
        const { rentalRequestId, response } = req.body // response: 'accepted' | 'denied'

        const rentalRequest = await prisma.rentalRequest.findUnique({
            where: { id: rentalRequestId },
            include: { listing: true }
        })

        if (!rentalRequest) return res.status(404).json({ message: "Rental request not found" })
        if (rentalRequest.ownerId !== userId) return res.status(403).json({ message: "Unauthorized" })
        if (rentalRequest.status !== 'pending') return res.status(400).json({ message: "Request already responded to" })

        // Find the original rental_request message to update its status
        const requestMessage = await prisma.message.findFirst({
            where: {
                chatId: rentalRequest.chatId,
                type: 'rental_request',
                message: { contains: rentalRequestId }
            }
        })

        if (response === 'accepted') {
            await prisma.$transaction([
                prisma.rentalRequest.update({
                    where: { id: rentalRequestId },
                    data: { status: 'accepted' }
                }),
                prisma.listing.update({
                    where: { id: rentalRequest.listingId },
                    data: { status: 'rented' }
                }),
                prisma.order.create({
                    data: {
                        listingId: rentalRequest.listingId,
                        ownerId: rentalRequest.ownerId,
                        userId: rentalRequest.renterId,
                        price_per_day: rentalRequest.listing.price_per_day,
                        rental_start: rentalRequest.rentalStart,
                        rental_end: rentalRequest.rentalEnd,
                        isPaid: true,
                    }
                }),
                prisma.message.create({
                    data: {
                        chatId: rentalRequest.chatId,
                        senderId: userId,
                        type: 'rental_accepted',
                        message: 'Rental request accepted! The listing is now marked as rented.'
                    }
                }),
                prisma.chat.update({
                    where: { id: rentalRequest.chatId },
                    data: {
                        lastMessage: "Rental request accepted",
                        isLastMessageRead: false,
                        lastMessageSenderId: userId
                    }
                }),
                ...(requestMessage ? [prisma.message.update({
                    where: { id: requestMessage.id },
                    data: { message: JSON.stringify({ ...JSON.parse(requestMessage.message), status: 'accepted' }) }
                })] : [])
            ])
        } else {
            await prisma.$transaction([
                prisma.rentalRequest.update({
                    where: { id: rentalRequestId },
                    data: { status: 'denied' }
                }),
                prisma.message.create({
                    data: {
                        chatId: rentalRequest.chatId,
                        senderId: userId,
                        type: 'rental_denied',
                        message: 'Rental request denied.'
                    }
                }),
                prisma.chat.update({
                    where: { id: rentalRequest.chatId },
                    data: {
                        lastMessage: "Rental request denied",
                        isLastMessageRead: false,
                        lastMessageSenderId: userId
                    }
                }),
                ...(requestMessage ? [prisma.message.update({
                    where: { id: requestMessage.id },
                    data: { message: JSON.stringify({ ...JSON.parse(requestMessage.message), status: 'denied' }) }
                })] : [])
            ])
        }

        return res.json({ message: `Rental request ${response}` })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.code || error.message })
    }
}