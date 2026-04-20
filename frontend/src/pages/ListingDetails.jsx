import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { ArrowLeftIcon, CheckCircle2, DollarSign, Loader2Icon } from "lucide-react";
import { vehicleIcons } from "../assets/assets";
const ListingDetails = () => {

  const navigate = useNavigate()
  const currency = import.meta.env.VITE_CURRENCY || 'රු';
  
  const [listing, setListing] = useState(null);

  const {listingId} = useParams()
  const {listings} = useSelector((state)=>state.listing)

  

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
        </div>
      </div>
      {/* seller info & perchase button */}
      <div></div>
    </div>
    </div>
  ) : (
    <div className="h-screen flex justify-center items-center">
      <Loader2Icon className="size-7 animate-spin text-indigo-600" />
    </div>
  )

}
export default ListingDetails