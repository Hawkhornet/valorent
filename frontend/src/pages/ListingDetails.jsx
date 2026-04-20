import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ArrowLeftIcon, CheckCircle2, ChevronLeftIcon, ChevronRightIcon, DollarSign, Loader2Icon, MapPin, MessageSquareMoreIcon, ShoppingBagIcon } from "lucide-react";
import { vehicleIcons } from "../assets/assets";
import { setChat } from "../app/features/chatSlice";
const ListingDetails = () => {

  const dispatch = useDispatch()

  const navigate = useNavigate()
  const currency = import.meta.env.VITE_CURRENCY || 'රු';
  
  const [listing, setListing] = useState(null);

  const {listingId} = useParams()
  const {listings} = useSelector((state)=>state.listing)

  const [current, setCurrent] = useState(0)
  const images = listing ? listing.images || [] : []

  const prevSlide = () => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  const nextSlide = () => setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1))

  const purchaseVehicle = async () => {

  }
  const loadChatbox = () => {
    dispatch(setChat({listing: listing}))
  }

  useEffect(()=>{
    const listing = listings.find((listing)=>listing.id === listingId);
    if(listing){
      setListing(listing)
    }
  },[listingId, listings])

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
              <h2>{listing.title}
              <Link>
              </Link>
              </h2>
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
              {currency}
              {listing.price_per_day.toLocaleString()}
            </h3>
            <p className="text-sm text-gray-500">Rupees</p>

          </div>

      </div>

        </div>

         {/* Screenshot section */}
         {images?.length > 0 && (
          <div className="bg-white rounded-xl border border-gray-200 mb-5 overflow-hidden">
            <div className="p-4">
              <h4 className="font-semibold text-gray-800">Image Gallery</h4>
              </div>
              {/*Slider container */}
              <div className="relative w-full overflow-hidden">
                  <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }}>
                    {images.map((image, index) => (
                      <img key={index} src={image} alt="Listing Proof" className="w-full h-full object-contain shrink-0" />
                    ))}
                  </div>

                  {/* Navigation buttons */}
                  <button onClick={prevSlide} className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow">
                    <ChevronLeftIcon className="w-5 h-5 text-gray-700"/>
                  </button>

                  <button onClick={nextSlide} className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow">
                    <ChevronRightIcon className="w-5 h-5 text-gray-700"/>
                  </button>

                  {/*Dot indicators */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                    {images.map((_, index) => (
                     <button onClick={()=> setCurrent(index)} key={index} className={`w-2.5 h-2.5 rounded-full ${index === current ? 'bg-red-600' : 'bg-gray-300'}`}/> 
                    ))}
                  </div>
              </div>
          </div>
         )}

          {/*Description section */}
          <div className="bg-white rounded-xl border border-gray-200 mb-5">
            <div className="p-4 border-b border-gray-100">
              <h4 className="font-semibold text-gray-800">Description</h4>
            </div>
            <div className="p-4 text-sm text-gray-600">
              {listing.description}
            </div>
          </div>

          {/* Car Overview Section */}
          <div className="bg-white rounded-xl border border-gray-200 mb-5">
            <div className="p-4 border-b border-gray-100">
              <h4 className="font-semibold text-gray-800">Car Overview</h4>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-6 p-4 text-sm">
              <div>
                <p className="text-gray-500">interior color</p>
                <p className="font-medium capitalize">{listing.interior_color}</p>
              </div>
              <div>
                <p className="text-gray-500">horsepower</p>
                <p className="font-medium capitalize">{listing.horsepower}</p>
              </div>
              <div>
                <p className="text-gray-500">Doors</p>
                <p className="font-medium capitalize">{listing.doors}</p>
              </div>
              <div>
                <p className="text-gray-500">fuel Type</p>
                <p className="font-medium capitalize">{listing.fuel_type}</p>
              </div>
              <div>
                <p className="text-gray-500">No. of Cylinder</p>
                <p className="font-medium capitalize">{listing.cylinders}</p>
              </div>
              <div>
                <p className="text-gray-500">engine capacity(cc)</p>
                <p className="font-medium capitalize">{listing.engine_capacity_cc}</p>
              </div>
              <div>
                <p className="text-gray-500">Trim</p>
                <p className="font-medium capitalize">{listing.trim}</p>
              </div>
              <div>
                <p className="text-gray-500">Exterior Color</p>
                <p className="font-medium capitalize">{listing.exterior_color}</p>
              </div>
              <div>
                <p className="text-gray-500">Body Type</p>
                <p className="font-medium capitalize">{listing.body_type}</p>
              </div>
              <div>
                <p className="text-gray-500">Seating Capacity</p>
                <p className="font-medium capitalize">{listing.seating_capacity}</p>
              </div>
              <div>
                <p className="text-gray-500">Transmission Type</p>
                <p className="font-medium capitalize">{listing.transmission_type}</p>
              </div>
              <div>
                <p className="text-gray-500">Located in</p>
                <p className="font-medium capitalize">
                  <MapPin className="size-4 mr-1 text-gray-400"/>{listing.city}</p>
              </div>
            </div>
          </div>

      </div>
         
      {/* seller info & perchase button */}
      <div className="bg-white min-w-full md:min-w-[370px] rounded-xl border border-gray-200 p-5 max-md:mb-10">
        <h4 className="font-semibold text-gray-800 mb-4">Seller Information</h4>
        <div className="flex items-center gap3 mb-2">
          <img src={listing.owner?.image} alt="seller image" className="size-10 rounded-full"/>
          <div>
            <p className="font-medium text-gray-800">{listing.owner?.name}</p>
            <p className="text-sm text-gray-500">{listing.owner?.email}</p>
          </div>
        </div>
        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
          <p>Member Since <span className="font-medium">{new Date(listing.owner?.createdAt).toLocaleDateString()}</span></p>
        </div>
        <button onClick={loadChatbox} className="w-full bg-yellow-600 text-white py-2 rounded-lg hover:bg-yellow-700 transition text-sm font-medium flex items-center
        justify-center gap-2">
          <MessageSquareMoreIcon className="size-4"/> Chat
        </button>
        <button onClick={purchaseVehicle} className="w-full mt-2 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition text-sm font-medium flex items-center
        justify-center gap-2">
          <ShoppingBagIcon className="size-4"/> Purchase
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