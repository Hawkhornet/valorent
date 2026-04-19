import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ListingDetails = () => {

  const navigate = useNavigate()
  const currency = import.meta.env.VITE_CURRENCY || 'රු';

  const [listing, setListing] = useState(null)
  
  const {listingId} = useParams()
  const {listings} = useSelector((state)=>state.listings)

  useState(() => {
    const listing = listings.find((listing) => listing.id === listingId)
    if(listing){
      setListing(listing)
    }
  }, [listingId, listings])

  return (
    <div>
      
    </div>
  )
}

export default ListingDetails
