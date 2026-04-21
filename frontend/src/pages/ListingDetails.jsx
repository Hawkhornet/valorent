import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ArrowLeftIcon, CheckCircle2, ChevronLeftIcon, ChevronRightIcon, DollarSign, Loader2Icon, MapPin, MessageSquareMoreIcon, ShoppingBagIcon } from "lucide-react";
import { vehicleIcons } from "../assets/assets";
import { setChat } from "../app/features/chatSlice";
import { useClerk, useUser, useAuth } from "@clerk/react";
import toast from "react-hot-toast";
import api from "../configs/axios";

const ListingDetails = () => {

  const { getToken } = useAuth()
  const {user, isLoaded} = useUser()
  const dispatch = useDispatch()
  const { openSignIn } = useClerk()


  const navigate = useNavigate()
  const currency = import.meta.env.VITE_CURRENCY || 'රු';
  
  const [listing, setListing] = useState(null);

  const [rentalStart, setRentalStart] = useState('')
  const [rentalEnd, setRentalEnd] = useState('')

  const {listingId} = useParams()
  const {listings} = useSelector((state)=>state.listing)

  const [current, setCurrent] = useState(0)
  const images = listing ? listing.images || [] : []

  const prevSlide = () => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  const nextSlide = () => setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1))

  const rentVehicle = async () => {
    if (!user) return openSignIn()
    if (!rentalStart || !rentalEnd) return toast.error("Please select rental dates")

    try {
        toast.loading("Sending rental request...")
        const token = await getToken()
        const { data } = await api.post('/api/chat/rental-request', {
            listingId: listing.id,
            rentalStart,
            rentalEnd,
        }, { headers: { Authorization: `Bearer ${token}` }})

        toast.dismissAll()
        toast.success("Rental request sent!")

        // Open the chat so they can see the request
        dispatch(setChat({ listing: data.chat.listing, chatId: data.chat.id }))

    } catch (error) {
        toast.dismissAll()
        toast.error(error?.response?.data?.message || error.message)
    }
}

  const [lightboxOpen, setLightboxOpen] = useState(false)

  const loadChatbox = () => {
    if(!isLoaded || !user) return toast("Please login to chat with seller")
    if(user.id === listing.ownerId) return toast("You can't chat with your own listing")
    dispatch(setChat({listing: listing}))
  }

  useEffect(()=>{
    const listing = listings.find((listing)=>listing.id === listingId);
    if(listing){
      setListing(listing)
    }
  },[listingId, listings])

  // Returns value or '---' if empty/null/undefined
  const val = (v) => (v !== null && v !== undefined && v !== '') ? v : '---';

  const overviewFields = listing ? [
    { label: "Interior Color",       value: listing.interior_color },
    { label: "Horsepower",           value: listing.horsepower },
    { label: "Fuel Type",            value: listing.fuel_type },
    { label: "No. of Cylinders",     value: listing.cylinders },
    { label: "Engine Capacity (cc)", value: listing.engine_capacity_cc },
    { label: "Trim",                 value: listing.trim },
    { label: "Exterior Color",       value: listing.exterior_color },
    { label: "Body Type",            value: listing.body_type },
    { label: "Seating Capacity",     value: listing.seating_capacity },
    { label: "Transmission Type",    value: listing.transmission_type },
    { label: "Located in",           value: listing.city },
    { label: "District",             value: listing.district },
  ] : [];

  return listing ? (
    <div className="mx-auto min-h-screen px-6 md:px-16 lg:px-24 xl:px-32">
      <button onClick={()=> navigate(-1)} className="flex items-center gap-2 text-slate-600 py-5">
        <ArrowLeftIcon className="size-4"/> Go to Previous Page
      </button>
    
    <div className="flex items-start max-md:flex-col gap-10">
      <div className="flex-1 max-md:w-full">

        {/* Top Section */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-5">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl">{vehicleIcons[listing.body_type.toLowerCase()]}</div>
              <div>
                <h2>{listing.title}<Link></Link></h2>
                <p className="text-gray-500 text-sm">
                  {listing.exterior_color} -
                  <span className='capitalize'> {listing.body_type}</span>
                </p>
                <div className="flex gap-2 mt-2">
                  {listing.verified && (
                    <span className="flex items-center text-xs bg-indigo-50 text-indigo-600 px-2 py-1 rounded-md">
                      <CheckCircle2 className="w-3 h-3 mr-1" />
                      Verified
                    </span>
                  )}
                  {listing.monetized && (
                    <span className="flex items-center text-xs bg-green-50 text-green-600 px-2 py-1 rounded-md">
                      <DollarSign className="w-3 h-3 mr-1" />
                      Monetized
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="text-right">
              <h3 className="text-2xl font-bold text-gray-gray-800">
                {currency}{listing.price_per_day.toLocaleString()}
              </h3>
              <p className="text-md text-gray-500">/day</p>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        {images?.length > 0 && (
          <div className="bg-white rounded-xl border border-gray-200 mb-5 overflow-hidden">
            <div className="p-4">
              <h4 className="font-semibold text-gray-800">Image Gallery</h4>
            </div>
            <div className="relative w-full aspect-[3/2] overflow-hidden bg-gray-950 cursor-pointer" onClick={() => setLightboxOpen(true)}>
              <div className="flex h-full transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }}>
                {images.map((image, index) => (
                  <img key={index} src={image} alt="Listing Proof" className="w-full h-full shrink-0 object-cover object-center" />
                ))}
              </div>

              <button onClick={(e) => { e.stopPropagation(); prevSlide(); }} className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow">
                <ChevronLeftIcon className="w-5 h-5 text-gray-700"/>
              </button>
              <button onClick={(e) => { e.stopPropagation(); nextSlide(); }} className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow">
                <ChevronRightIcon className="w-5 h-5 text-gray-700"/>
              </button>

              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <button onClick={(e) => { e.stopPropagation(); setCurrent(index); }} key={index} className={`w-2.5 h-2.5 rounded-full ${index === current ? 'bg-red-600' : 'bg-gray-300'}`}/>
                ))}
              </div>

              <span className="absolute top-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded-md">Click to expand</span>
            </div>

            {lightboxOpen && (
              <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center" onClick={() => setLightboxOpen(false)}>
                <img src={images[current]} className="max-h-screen max-w-full object-contain p-4" />
                <button className="absolute top-4 right-4 text-white text-2xl font-bold">✕</button>
              </div>
            )}
          </div>
        )}

        {/* Description */}
        <div className="bg-white rounded-xl border border-gray-200 mb-5">
          <div className="p-4 border-b border-gray-100">
            <h4 className="font-semibold text-gray-800">Description</h4>
          </div>
          <div className="p-4 text-sm text-gray-600">
            {val(listing.description)}
          </div>
        </div>

        {/* Car Overview */}
        <div className="bg-white rounded-xl border border-gray-200 mb-5">
          <div className="p-4 border-b border-gray-100">
            <h4 className="font-semibold text-gray-800">Car Overview</h4>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-6 p-4 text-sm">
            {overviewFields.map(({ label, value }) => (
              <div key={label}>
                <p className="text-gray-500">{label}</p>
                <p className={`font-medium capitalize ${val(value) === '---' ? 'text-gray-800' : ''}`}>
                  {val(value)}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
         
      {/* Seller info & purchase buttons */}
<div className="bg-white min-w-full md:min-w-[370px] rounded-xl border border-gray-200 p-5 max-md:mb-10">
    <h4 className="font-semibold text-gray-800 mb-4">Seller Information</h4>
    <div className="flex items-center gap-3 mb-2">
        <img src={listing.owner?.image} alt="seller image" className="size-10 rounded-full"/>
        <div>
            <p className="font-medium text-gray-800">{listing.owner?.name}</p>
            <p className="text-sm text-gray-500">{listing.owner?.email}</p>
        </div>
    </div>
    <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
        <p>Member Since <span className="font-medium">{new Date(listing.owner?.createdAt).toLocaleDateString()}</span></p>
    </div>

    {/* Date Picker */}
    <div className="border border-gray-200 rounded-lg overflow-hidden mb-3">
        <div className="grid grid-cols-2 divide-x divide-gray-200">
            <div className="p-3">
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Start Date</label>
                <input
                    type="date"
                    value={rentalStart}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => setRentalStart(e.target.value)}
                    className="w-full text-sm text-gray-700 focus:outline-none"
                />
            </div>
            <div className="p-3">
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">End Date</label>
                <input
                    type="date"
                    value={rentalEnd}
                    min={rentalStart || new Date().toISOString().split('T')[0]}
                    onChange={(e) => setRentalEnd(e.target.value)}
                    className="w-full text-sm text-gray-700 focus:outline-none"
                />
            </div>
        </div>

        {/* Price summary */}
        {rentalStart && rentalEnd && (
            <div className="bg-gray-50 border-t border-gray-200 px-3 py-2 flex justify-between items-center">
                <p className="text-xs text-gray-500">
                    {Math.ceil((new Date(rentalEnd) - new Date(rentalStart)) / (1000 * 60 * 60 * 24))} days × රු{listing.price_per_day.toLocaleString()}
                </p>
                <p className="text-sm font-semibold text-gray-800">
                    රු{(Math.ceil((new Date(rentalEnd) - new Date(rentalStart)) / (1000 * 60 * 60 * 24)) * listing.price_per_day).toLocaleString()}
                </p>
            </div>
        )}
    </div>

    <button onClick={loadChatbox} className="w-full bg-yellow-600 text-white py-2 rounded-lg hover:bg-yellow-700 transition text-sm font-medium flex items-center justify-center gap-2">
        <MessageSquareMoreIcon className="size-4"/> Chat with Seller
    </button>
    <button onClick={rentVehicle} className="w-full mt-2 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition text-sm font-medium flex items-center justify-center gap-2">
        <ShoppingBagIcon className="size-4"/> Rent Vehicle
    </button>
</div>
</div>

<div className="bg-white border-t border-gray-200 p-4 text-center mt-28">
    <p className="text-sm text-gray-500">
        Copyright © 2025 <span className="text-gray-600">valorent</span>. All rights reserved.
    </p>
</div>
</div>
) : (
<div className="h-screen flex justify-center items-center">
    <Loader2Icon className="size-7 animate-spin text-indigo-600" />
</div>
)
}

export default ListingDetails
