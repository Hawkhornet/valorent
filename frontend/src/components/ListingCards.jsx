import React from 'react'
import { vehicleIcons } from '../assets/assets';
import { Cog, Fuel, LineChart, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ListingCards = ({ listing }) => {
    const currency = import.meta.env.VITE_CURRENCY || 'රු';
    const navigate = useNavigate();

    return (
        <div className='relative bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition'>
            <div className='p-5 pt-8'>
                <div className='flex items-start gap-3'>
                    {vehicleIcons[listing.body_type.toLowerCase()]}

                    <div className='flex flex-col w-full'>
                        {/* Header text */}
                        <div>
                            <h2 className='text-xl md:text-2xl font-semibold text-slate-900 leading-tight'>{listing.title}</h2>
                            <p>
                                {listing.exterior_color} -
                                <span className='capitalize'> {listing.body_type}</span>
                            </p>
                        </div>

                        {/* Details */}
                        <div className='flex flex-wrap items-center gap-x-6 gap-y-2 mt-3 text-gray-600'>

    <div className='flex items-center text-md'>
        <Cog className='size-4 mr-1 text-gray-400' />
        <span className='font-medium text-slate-700'>
            {listing.transmission_type}
        </span>
    </div>

    {listing.mileage_km && (
        <div className='flex items-center text-md'>
            <LineChart className='size-4 mr-1 text-gray-400' />
            <span className='font-medium text-slate-700'>
                {listing.mileage_km.toLocaleString()} km
            </span>
        </div>
    )}

    {listing.city && (
        <div className='flex items-center text-md'>
            <MapPin className='size-4 mr-1 text-gray-400' />
            <span className='font-medium text-slate-700'>
                {listing.city}
            </span>
        </div>
    )}

    {listing.fuel_type && (
        <div className='flex items-center text-md'>
            <Fuel className='size-4 mr-1 text-gray-400' />
            <span className='font-medium text-slate-700'>
                {listing.fuel_type}
            </span>
        </div>
    )}

</div>
                        {/* Description */}
                        <p className='text-md text-gray-600 mb-4 line-clamp-2 mt-6'>{listing.description}</p>

                        <hr className='my-5 border-gray-200'/>

                        {/* Footer */}
                        <div className='flex items-center justify-between'>
                            <div className='flex items-baseline'>
                                <span className='text-2xl font-medium text-slate-800'>
                                    {currency}
                                    {listing.price_per_day.toLocaleString()} / day
                                </span>
                            </div>
                            <button onClick={() => {navigate(`/listing/${listing.id}`); scrollTo(0, 0)}} className='px-7 py-3 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 transition'>
                                More Details
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListingCards