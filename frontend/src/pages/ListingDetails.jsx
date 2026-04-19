import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect } from 'react-redux'
import { ArrowBigLeftIcon, ArrowUpRightFromSquareIcon, Loader2Icon } from 'lucide-react'
import { vehicleIcons } from '../assets/assets'

const ListingDetails = () => {

  const navigate = useNavigate()
  const currency = import.meta.env.VITE_CURRENCY || 'රු';

  const [listing, setListing] = useState(null)
  
  const {listingId} = useParams()
  const {listings} = useSelector((state)=>state.listings)

  useEffect(() => {
    const listing = listings.find((listing) => listing.id === listingId)
    if(listing){
      setListing(listing)
    }
  }, [listingId, listings])

  return listing ?(
    <div className='mx-auto min-h-screen px-6 md:px-16 lg:px-24 xl:px-32'>
      <button onClick={()=> navigate(-1)} className='flex items-center gap-2 text-slate-600 py-5'>
        <ArrowBigLeftIcon className='size-4'/> Go to Previous Page
      </button>

      <div className='flex items-start max-md:flex-col gap-10'>
        <div className='flex-1 max-md:w-full'>
          {/* Top Section */}
          <div className='bg-white rounded-xl border border-gray-200 p-6 mb-5'>
            <div className='flex items-start gap-3'>
              <div className='p-2 rounded-xl'>{vehicleIcons[listing.vehicle]}</div>
              <div>
                <h2>{listing.title}</h2>
                <Link target='_blank'>
                  <ArrowUpRightFromSquareIcon className='size-4
                  hover:text-red-500'/>
                </Link>
              </div>

            </div>

          </div>

        </div>
        {/* Seller Info & Purchase Button */}
        <div></div>
      </div>
      
    </div>
  ) : (
    <div className='h-screen flex justify-center items-center'>
      <Loader2Icon className='size-7 animate-spin text-red-600'/>
    </div>
  )
}

export default ListingDetails
