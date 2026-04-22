import express from "express";
import { protect } from "../middlewares/authMiddleware.js";
import upload from "../lib/multer.js";
import { addListing, deleteUserListing, getAllPublicListing, getAllUserListing, getAllUserOrders, rentVehicle, toggleStatus, updateListing } from "../controllers/listingController.js";
import { validateListing } from "../middlewares/validateMiddleware.js";

const listingRouter = express.Router();



listingRouter.post('/', upload.array("images", 5), protect , addListing)
listingRouter.put('/', upload.array("images", 5), protect , updateListing)
listingRouter.get('/public', getAllPublicListing)
listingRouter.get('/user', protect,  getAllUserListing)
listingRouter.put('/:id/status', protect, toggleStatus)
listingRouter.delete('/:listingId', protect, deleteUserListing)
listingRouter.get('/user-orders', protect, getAllUserOrders)
listingRouter.post('/rent-vehicle/:listingId', protect, rentVehicle)
listingRouter.post('/', upload.array("images", 5), protect, validateListing, addListing)

export default listingRouter