import React, { useState } from 'react'
import { ArrowLeftIcon, FilterIcon } from 'lucide-react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ListingCards from '../components/ListingCards'
import FilterSidebar from '../components/FilterSidebar'

const Marketplace = () => {

  const [searchParams] = useSearchParams()
  const search = searchParams.get('search')

  const navigate = useNavigate()
  const [showFilterPhone, setShowFilterPhone] = React.useState(false)
  const [filters, setFilters] = React.useState({
    make: null,
    maxPrice: 100000,
    body_type: null,
    transmission_type: null,
    district: null,
  })

  const {listings} = useSelector((state) => state.listing)

  const filteredListings = listings.filter((listing) => {

    if(filters.make && filters.make.length > 0){
      if(!filters.make.includes(listing.make.toLowerCase())) return false;
    }

    if(filters.maxPrice){
      if(listing.price_per_day > filters.maxPrice) return false;
    }

    if(filters.body_type && filters.body_type.length > 0){
      if(!filters.body_type.includes(listing.body_type)) return false;
    }

    if(filters.transmission_type && filters.transmission_type.length > 0){
      if(!filters.transmission_type.includes(listing.transmission_type.toLowerCase())) return false;
    }

    if(filters.district && filters.district.length > 0){
      if(!filters.district.includes(listing.district)) return false;
    }

    if(search){
      const trimed = search.trim()
      if(
        !listing.title.toLowerCase().includes(trimed.toLowerCase()) &&
        !listing.description.toLowerCase().includes(trimed.toLowerCase()) &&
        !listing.make.toLowerCase().includes(trimed.toLowerCase()) &&
        !listing.model.toLowerCase().includes(trimed.toLowerCase()) &&
        !listing.city.toLowerCase().includes(trimed.toLowerCase()) &&
        !listing.exterior_color.toLowerCase().includes(trimed.toLowerCase()) &&
        !listing.district.toLowerCase().includes(trimed.toLowerCase())
      )
      return false
    }
    return true
  })

  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32'>
      <div className='flex items-center justify-between text-slate-500'>
        <button onClick={()=>{navigate('/'); scrollTo(0, 0)}}
          className='flex items-center gap-2 py-5'>
          <ArrowLeftIcon className="size-4" />
          Back to Home
        </button>
        <button onClick={()=>setShowFilterPhone(true)} className='flex sm:hidden items-center gap-2 py-5'>
          <FilterIcon className='size-4'/>
           Filters
          </button>
      </div>

      <div className='relative flex items-start justify-between gap-8 pb-8'>
        <FilterSidebar setFilters={setFilters} filters={filters} setShowFilterPhone={setShowFilterPhone} showFilterPhone={showFilterPhone}/>
        <div className='flex-1 grid xl:grid-cols-2 gap-4'>
          {filteredListings.map((listing, index) => (
            <ListingCards listing={listing} key={index}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Marketplace
