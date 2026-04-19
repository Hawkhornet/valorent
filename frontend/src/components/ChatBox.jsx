import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dummyChats } from '../assets/assets'
import { XIcon } from 'lucide-react'
import { clearChat } from '../app/features/chatSlice'

const ChatBox = () => {

    const {listing, isOpen, chatId} = useSelector((state) => state.chat)
    const dispatch = useDispatch();

    const user = {id: 'user_2'}

    const [chat, setChat] = React.useState(null)
    const [messages, setMessages] = React.useState([])
    const [newMessages, setNewMessages] = React.useState("")
    const [isLoading, setIsLoading] = React.useState(true)
    const [isSending, setIsSending] = React.useState(false)

    const fetchChat = async () => {
        setChat(dummyChats[0]);
        setMessages(dummyChats[0].messages);
        setIsLoading(false);
    }

    useEffect(() => {
        if(listing){
            fetchChat();
        }
    }, [listing])

    if (!isOpen || !listing) return null;
  return (
    <div className='fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-100 flex items-center justify-center sm:p-4'>
      <div className='bg-white sm:rounded-lg shadow-2xl w-full max-w-2xl h-screen sm:h-[600px] flex flex-col'>
        {/* Header */}
        <div className='bg-gradient-to-r from-indigo-600 to-indigo-400 text-white p-4 sm:rounded-t-lg flex items-center justify-between'>
            <div className='flex-1 min-w-0'>
                <h3> {listing?.title } </h3>
                <p className='text-sm text-indigo-100 truncate'>{user.id === listing?.ownerId ? `Chatting with buyer (${chat?.chatUser?.name || 'Loading...'})` : `Chatting with owner (${chat?.ownerUser?.name || 'Loading...'})`}</p>
            </div>
            <button onClick={() => dispatch(clearChat())} className='ml-4 p-1 hover:bg-white/20 hover:bg-opacity-20 rounded-lg transition-colors'>
                <XIcon className='w-5 h-5' />
            </button>
        </div>
      </div>
    </div>
  )
}

export default ChatBox
