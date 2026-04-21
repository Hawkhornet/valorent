

// Controller for adding listing to the database

import imagekit from "../lib/imageKit.js";
import fs from "fs"
import prisma from "../lib/prisma.js";

export const addListing = async (req, res) =>{
    console.log("addListing hit")
    console.log("files:", req.files)
    console.log("body:", req.body)
    try {
        const {userId} = await req.auth();

        const vehicleDetails = JSON.parse(req.body.vehicleDetails)
        
        // Trim string fields
        vehicleDetails.title          = vehicleDetails.title.trim()
        vehicleDetails.model          = vehicleDetails.model.trim()
        vehicleDetails.city           = vehicleDetails.city.trim()
        vehicleDetails.exterior_color = vehicleDetails.exterior_color.trim()
        vehicleDetails.interior_color = vehicleDetails.interior_color?.trim() || null
        vehicleDetails.trim           = vehicleDetails.trim?.trim() || null
        vehicleDetails.description    = vehicleDetails.description.trim()

        // Parse numeric fields
        vehicleDetails.year               = parseInt(vehicleDetails.year)
        vehicleDetails.horsepower         = parseInt(vehicleDetails.horsepower)
        vehicleDetails.seating_capacity   = parseInt(vehicleDetails.seating_capacity)
        vehicleDetails.mileage_km         = parseInt(vehicleDetails.mileage_km)
        vehicleDetails.price_per_day      = parseFloat(vehicleDetails.price_per_day)
        vehicleDetails.min_rental_days    = parseInt(vehicleDetails.min_rental_days) || 1
        vehicleDetails.max_rental_days    = parseInt(vehicleDetails.max_rental_days) || 30
        vehicleDetails.cylinders          = vehicleDetails.cylinders ? parseInt(vehicleDetails.cylinders) : null
        vehicleDetails.engine_capacity_cc = vehicleDetails.engine_capacity_cc ? parseInt(vehicleDetails.engine_capacity_cc) : null
        vehicleDetails.doors              = vehicleDetails.doors ? parseInt(vehicleDetails.doors) : null
        vehicleDetails.deposit            = vehicleDetails.deposit ? parseFloat(vehicleDetails.deposit) : null

        const uploadImages = req.files.map(async (file) => {
            console.log("uploading file:", file.path)
            const response = await imagekit.files.upload({
                file: fs.createReadStream(file.path),
                fileName: `${Date.now()}.png`,
                folder: "valorent",
                transformation: {pre: "w-1280, ar-true"}
                });
            console.log("upload response:", response)
            return response.url
        })

        // wait for all images to completely upload
        const images = await Promise.all(uploadImages);

        const listing = await prisma.listing.create({
            data: {
                ownerId: userId,
                images,
                ...vehicleDetails
            }
        })
        return res.status(201).json({ message: "Vehicle Listed Successfully", listing });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.code || error.message });
    }
}

// Controller for getting all public listings

export const getAllPublicListing = async (req, res) =>{
    try{
        const listings = await prisma.listing.findMany({
            where: {status: "active"},
            include: {owner: true },
            orderBy: {createdAt: "desc" },
        })

        if(!listings || listings.length === 0){
            return res.json({listings: [] });
        }
        return res.json({listings});

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.code || error.message });
    }
}

// Controller for getting all user listing

export const getAllUserListing = async (req, res) => {
    try {
        const { userId } = await req.auth();

        const listings = await prisma.listing.findMany({
            where: { ownerId: userId, status: { not: "deleted" } },
            orderBy: { createdAt: "desc" },
        })

        const orders = await prisma.order.findMany({
            where: {
                ownerId: userId,
                isPaid: true,
                status: { in: ['active', 'completed'] }
            }
        })

        const totalEarnings = orders.reduce((sum, order) => {
            const days = Math.ceil((new Date(order.rental_end) - new Date(order.rental_start)) / (1000 * 60 * 60 * 24))
            return sum + (order.price_per_day * days)
        }, 0)

        return res.json({ listings, totalEarnings })

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.code || error.message });
    }
}

// Controller for update listings in database

export const updateListing = async (req, res) => {
    try {
        const { userId } = await req.auth();
        const vehicleDetails = JSON.parse(req.body.vehicleDetails)

        if (req.files.length + vehicleDetails.images.length > 5){
            return res.status(400).json({ message: "You can only upload up to 5 images" });
        }

        vehicleDetails.title          = vehicleDetails.title.trim()
        vehicleDetails.model          = vehicleDetails.model.trim()
        vehicleDetails.city           = vehicleDetails.city.trim()
        vehicleDetails.exterior_color = vehicleDetails.exterior_color.trim()
        vehicleDetails.interior_color = vehicleDetails.interior_color?.trim() || null
        vehicleDetails.trim           = vehicleDetails.trim?.trim() || null
        vehicleDetails.description    = vehicleDetails.description.trim()

        // Parse numeric fields
        vehicleDetails.year               = parseInt(vehicleDetails.year)
        vehicleDetails.horsepower         = parseInt(vehicleDetails.horsepower)
        vehicleDetails.seating_capacity   = parseInt(vehicleDetails.seating_capacity)
        vehicleDetails.mileage_km         = parseInt(vehicleDetails.mileage_km)
        vehicleDetails.price_per_day      = parseFloat(vehicleDetails.price_per_day)
        vehicleDetails.min_rental_days    = parseInt(vehicleDetails.min_rental_days) || 1
        vehicleDetails.max_rental_days    = parseInt(vehicleDetails.max_rental_days) || 30
        vehicleDetails.cylinders          = vehicleDetails.cylinders ? parseInt(vehicleDetails.cylinders) : null
        vehicleDetails.engine_capacity_cc = vehicleDetails.engine_capacity_cc ? parseInt(vehicleDetails.engine_capacity_cc) : null
        vehicleDetails.doors              = vehicleDetails.doors ? parseInt(vehicleDetails.doors) : null
        vehicleDetails.deposit            = vehicleDetails.deposit ? parseFloat(vehicleDetails.deposit) : null

        const listing = await prisma.listing.update({
            where: {id: vehicleDetails.id, ownerId: userId },
            data: vehicleDetails
        })

        if(!listing){
            return res.status(404).json({ message: "Listing not found" });
        }

        if(listing.status === "rented"){
            return res.status(400).json({ message: "you can't update rented listings" });
        }

        if(req.files.length > 0){
            const uploadImages = req.files.map(async (file) => {
            const response = await imagekit.files.upload({
                file: fs.createReadStream(file.path),
                fileName: `${Date.now()}.png`,
                folder: "valorent",
                transformation: {pre: "w-1280, h-auto"}
                });
            return response.url
        })

        // wait for all images to completely upload
        const images = await Promise.all(uploadImages);

        const listing = await prisma.listing.update({
            where: { id: vehicleDetails.id, ownerId: userId },
            data: {
                ownerId: userId,
                ...vehicleDetails,
                images: [...vehicleDetails.images, ...images]
            }
        })
        return res.json({ message: "Vehicle Listing Updated Successfully", listing });
        }

        return res.json({ message: "Vehicle Listing Updated Successfully", listing });

    }catch (error) {
        console.log(error);
        res.status(500).json({ message: error.code || error.message });
    }
}

export const toggleStatus = async (req, res) => {
    try {
        const {id} = req.params;
        const { userId } = await req.auth();

        const listing = await prisma.listing.findUnique({
            where: {id, ownerId: userId},
        })

        if(!listing){
            return res.status(404).json({ message: "Listing not found" })
        }

        if(listing.status === "active" || listing.status === "inactive"){
            await prisma.listing.update({
                where: { id, ownerId: userId },
                data: {status: listing.status === "active" ? "inactive" : "active"}
            })
        }else if(listing.status === "inactive"){
            return res.status(400).json({ message: "Your listing is inactive" });
        }

        return res.json({ message: "Listing status updated successfully", listing });

    }catch (error) {
        console.log(error);
        res.status(500).json({ message: error.code || error.message });
    }
}

export const deleteUserListing = async (req, res) => {
    try {
        const { userId } = await req.auth();
        const { listingId } = req.params;

        const listing = await prisma.listing.findFirst({
            where: { id: listingId, ownerId: userId },
        })

        if (!listing) {
            return res.status(404).json({ message: "Listing not found" });
        }

        if (listing.status === "rented") {
            return res.status(400).json({ message: "Rented listing can't be deleted" });
        }

        await prisma.listing.update({
            where: { id: listingId },
            data: { status: "deleted" }
        })

        return res.json({ message: "Listing Deleted Successfully" });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.code || error.message });
    }
}

export const getAllUserOrders = async (req, res) => {
    try {
        const { userId } = await req.auth();

        if (!userId) return res.status(401).json({ message: 'Unauthorized' })

        const orders = await prisma.order.findMany({
            where: { userId, isPaid: true },
            include: {
                listing: {
                    include: {
                        owner: {
                            select: {
                                id: true,
                                name: true,
                                email: true,
                                image: true,
                                createdAt: true,
                            }
                        }
                    }
                },
            },
            orderBy: { createdAt: 'desc' }
        })

        if (!orders || orders.length === 0) {
            return res.json({ orders: [] })
        }

        // Attach chat to each order if it exists
        const ordersWithChat = await Promise.all(
            orders.map(async (order) => {
                const chat = await prisma.chat.findFirst({
                    where: {
                        listingId: order.listingId,
                        chatUserId: userId,
                    },
                    include: {
                        messages: {
                            orderBy: { createdAt: 'desc' },
                            take: 1, // just the latest message
                        }
                    }
                })
                return { ...order, chat: chat || null }
            })
        )

        res.json({ orders: ordersWithChat })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.code || error.message })
    }
}

// Rent Vehicle

export const rentVehicle = async (req, res) => {
    try{
        const { userId } = await req.auth();
        const { listingId } = req.params;

        const listing = await prisma.listing.findFirst({
            where: {id: listingId, status: 'active'}
        })

        if(!listing){
            return res.status(404).json({ message: "Listing not found or not active" });
        }

        if (listing.ownerId === userId){
            return res.status(400).json({ message: "You can't purchase your own listing" });
        }

        const transaction = await prisma.order.create({
            data: {
                listingId,
                ownerId: listing.ownerId,
                userId,
                amount: listing.price_per_day
            }
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.code || error.message })
    }
}
