import express from "express"
import { protect } from "../middlewares/authMiddleware.js"
import { getAllUserChats, getChat, sendChatMessages } from "../controllers/chatController.js"

const chatRouter = express.Router()

chatRouter.post('/', protect, getChat)
chatRouter.get('/user', protect, getAllUserChats)
chatRouter.post('/send-message', protect, sendChatMessages)

export default chatRouter