import express from "express"
import { protect } from "../middlewares/authMiddleware.js"
import { cancelRentalRequest, getAllUserChats, getChat, respondToRentalRequest, sendChatMessages, sendRentalRequest } from "../controllers/chatController.js"

const chatRouter = express.Router()

chatRouter.post('/', protect, getChat)
chatRouter.get('/user', protect, getAllUserChats)
chatRouter.post('/send-message', protect, sendChatMessages)
chatRouter.post('/rental-request', protect, sendRentalRequest)
chatRouter.post('/rental-request/respond', protect, respondToRentalRequest)
chatRouter.post('/rental-request/cancel', protect, cancelRentalRequest)

export default chatRouter