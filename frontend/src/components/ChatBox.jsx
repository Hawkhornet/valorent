import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dummyChats } from '../assets/assets'
import { Loader2Icon, SendIcon, XIcon } from 'lucide-react'
import { clearChat } from '../app/features/chatSlice'
import {format, set} from 'date-fns'
import { useAuth, useUser } from '@clerk/react'
import api from '../configs/axios'
import toast from 'react-hot-toast'

const ChatBox = () => {

    const {listing, isOpen, chatId} = useSelector((state) => state.chat)
    const dispatch = useDispatch();
    const { getToken } = useAuth()
    const {user} = useUser()

    const [chat, setChat] = React.useState(null)
    const [messages, setMessages] = React.useState([])
    const [newMessages, setNewMessages] = React.useState("")
    const [isLoading, setIsLoading] = React.useState(true)
    const [isSending, setIsSending] = React.useState(false)

    const fetchChat = async () => {
        try {
            const token = await getToken()
            const {data} = await api.post('/api/chat', {listingId: listing.id, chatId}, {headers: { Authorization: `Bearer ${token}` }})
            setChat(data?.chat)
            setMessages(data?.chat?.messages || [])
            setIsLoading(false)
        } catch (error) {
            toast.error(error?.response?.data?.message || error?.message);
            console.log(error);
        }
    }

    useEffect(() => {
        if(listing){
            fetchChat();
            const interval = setInterval(() =>{
                fetchChat();
            }, 3000)
            return ()=> clearInterval(interval)
        }
    }, [listing])

    useEffect(() => {
        if(!isOpen){
            setChat(null);
            setMessages([]);
            setIsLoading(true);
            setNewMessages("");
            setIsSending(false);
        }
    }, [isOpen])

    const messagesEndRef = React.useRef(null)
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages.length])

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if(!newMessages.trim() || isSending) return;

        try {
            setIsSending(true);
            const token = await getToken();
            const {data} = await api.post('/api/chat/send-message', {chatId: chat.id, message: newMessages}, {headers: { Authorization: `Bearer ${token}` }})
            setMessages([...messages, data.newMessage])
            setNewMessages("")
            setIsSending(false)
        } catch (error) {
            toast.error(error?.response?.data?.message || error?.message);
            console.log(error);
            setIsSending(false)
        }
    }

    const handleRentalResponse = async (rentalRequestId, response) => {
    try {
        toast.loading("Processing...")
        const token = await getToken()
        await api.post('/api/chat/rental-request/respond',
            { rentalRequestId, response },
            { headers: { Authorization: `Bearer ${token}` }}
        )
        toast.dismissAll()
        toast.success(`Rental request ${response}`)
        fetchChat()
    } catch (error) {
        toast.dismissAll()
        toast.error(error?.response?.data?.message || error.message)
    }
}

const handleCancelRequest = async (rentalRequestId) => {
    try {
        toast.loading("Cancelling request...")
        const token = await getToken()
        await api.post('/api/chat/rental-request/cancel',
            { rentalRequestId },
            { headers: { Authorization: `Bearer ${token}` }}
        )
        toast.dismissAll()
        toast.success("Rental request cancelled")
        fetchChat()
    } catch (error) {
        toast.dismissAll()
        toast.error(error?.response?.data?.message || error.message)
    }
}

const renderMessage = (message) => {
    const isMe = message.senderId === user.id

    if (message.type === 'rental_request') {
        const details = JSON.parse(message.message)
        return (
            <div className='bg-indigo-50 border border-indigo-200 rounded-lg p-4 max-w-sm'>
                <p className='font-semibold text-indigo-800 mb-2'>🚗 Rental Request</p>
                <p className='text-sm text-gray-600'>From: {format(new Date(details.rentalStart), 'MMM d, yyyy')}</p>
                <p className='text-sm text-gray-600'>To: {format(new Date(details.rentalEnd), 'MMM d, yyyy')}</p>
                <p className='text-sm text-gray-600'>
                    {details.days} days × රු{details.pricePerDay.toLocaleString()} = <span className='font-bold'>රු{details.totalPrice.toLocaleString()}</span>
                </p>

                {/* Only show accept/deny to owner if still pending */}
                {!isMe && details.status === 'pending' && (
                    <div className='flex gap-2 mt-3'>
                        <button onClick={() => handleRentalResponse(details.rentalRequestId, 'accepted')}
                            className='flex-1 bg-green-600 text-white py-1.5 rounded text-sm hover:bg-green-700'>
                            Accept
                        </button>
                        <button onClick={() => handleRentalResponse(details.rentalRequestId, 'denied')}
                            className='flex-1 bg-red-600 text-white py-1.5 rounded text-sm hover:bg-red-700'>
                            Deny
                        </button>
                    </div>
                )}

                {/* Only show cancel to renter if still pending */}
                {isMe && details.status === 'pending' && (
                    <button onClick={() => handleCancelRequest(details.rentalRequestId)}
                        className='w-full mt-3 border border-red-300 text-red-600 py-1.5 rounded text-sm hover:bg-red-50'>
                        Cancel Request
                    </button>
                )}

                {/* Show status badges when no longer pending */}
                {details.status === 'cancelled' && (
                    <p className='text-xs text-gray-400 mt-2 text-center'>Request cancelled</p>
                )}
                {details.status === 'accepted' && (
                    <p className='text-xs text-green-600 mt-2 text-center'>✅ Request accepted</p>
                )}
                {details.status === 'denied' && (
                    <p className='text-xs text-red-500 mt-2 text-center'>❌ Request denied</p>
                )}
            </div>
        )
    }

    if (message.type === 'rental_accepted') {
        return (
            <div className='bg-green-50 border border-green-200 rounded-lg p-3 text-green-800 text-sm'>
                ✅ {message.message}
            </div>
        )
    }

    if (message.type === 'rental_denied') {
        return (
            <div className='bg-red-50 border border-red-200 rounded-lg p-3 text-red-800 text-sm'>
                ❌ {message.message}
            </div>
        )
    }

    return (
        <>
            <p className='text-sm break-words whitespace-pre-wrap'>{message.message}</p>
            <p className={`text-[10px] mt-1 ${isMe ? "text-red-200" : "text-gray-400"}`}>
                {format(new Date(message.createdAt), "MMM dd 'at' h:mm a")}
            </p>
        </>
    )
}

    if (!isOpen || !listing) return null;
  return (
    <div className='fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-100 flex items-center justify-center sm:p-4'>
      <div className='bg-white sm:rounded-lg shadow-2xl w-full max-w-2xl h-screen sm:h-[600px] flex flex-col'>
        {/* Header */}
        <div className='bg-gradient-to-r from-orange-600 to-red-700 text-white p-4 sm:rounded-t-lg flex items-center justify-between'>
            <div className='flex-1 min-w-0'>
                <h3> {listing?.title } </h3>
                <p className='text-sm text-red-100 truncate'>{user.id === listing?.ownerId ? `Chatting with buyer (${chat?.chatUser?.name || 'Loading...'})` : `Chatting with owner (${chat?.ownerUser?.name || 'Loading...'})`}</p>
            </div>
            <button onClick={() => dispatch(clearChat())} className='ml-4 p-1 hover:bg-white/20 hover:bg-opacity-20 rounded-lg transition-colors'>
                <XIcon className='w-5 h-5' />
            </button>
        </div>

        {/* Messages Area */}
<div className='flex-1 overflow-y-auto p-4 space-y-4 bg-gray-100'>
    {isLoading ? (
        <div className='flex items-center justify-center h-full'>
            <Loader2Icon className='size-6 animate-spin text-red-600'/>
        </div>
    ) : messages.length === 0 ? (
        <div className='flex items-center justify-center h-full'>
            <div className='text-center'>
                <p className='text-gray-500 mb-2'>No messages yet</p>
                <p className='text-sm text-gray-400'>Start the conversation!</p>
            </div>
        </div>
    ) : (
        messages.map((message) => {
    const isMe = message.senderId === user.id
    const isSpecial = ['rental_request', 'rental_accepted', 'rental_denied'].includes(message.type)

    return (
        <div key={message.id} className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[70%] rounded-lg p-3 pb-1 ${
                isSpecial
                    ? '' // special messages handle their own styling
                    : isMe
                        ? 'bg-orange-500 text-white'
                        : 'bg-white text-gray-800'
            }`}>
                {renderMessage(message)}
            </div>
        </div>
    )
})
    )}
    <div ref={messagesEndRef} />
        </div>
        
        {/* Input Area */}
{chat ? (
    <form onSubmit={handleSendMessage} className='p-4 bg-white border-t border-gray-200 rounded-b-lg'>
        {chat.listing?.status !== "active" && (
            <p className='text-xs text-amber-600 text-center mb-2'>
                This listing is {chat.listing?.status} — you can still message the owner.
            </p>
        )}
        <div className='flex items-end space-x-2'>

            <textarea
            value={newMessages}
            onChange={(e)=>setNewMessages(e.target.value)}
            onKeyDown={(e) => {
                if(e.key === 'Enter' && !e.shiftKey){
                    e.preventDefault();
                    handleSendMessage(e);
                }
            }}
            placeholder='Type your message...' className='flex-1 resize-none border border-gray-300 rounded-lg px-4 py-2 focus:outline-red-500 max-h-32' rows={1}/>

            <button disabled={!newMessages.trim() || isSending} type='submit' className='bg-red-600 hover:bg-red-700 text-white p-2.5 rounded-lg disabled:opacity-50 transition-colors'>
                {isSending ? <Loader2Icon className='w-5 h-5 animate-spin'/> : <SendIcon className='w-5 h-5'/>}
            </button>
        </div>
    </form>
) : (
    <div className='p-4 bg-white border-t border-gray-200 rounded-b-lg'>
        <p className='text-sm text-gray-600 text-center'>{chat ? `Listing is ${chat.listing.status}` : 'Loading chat...'}</p>
    </div>
)}
        </div>
    </div>
  )
}

export default ChatBox
