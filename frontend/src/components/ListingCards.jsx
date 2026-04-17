import React from 'react'

const ListingCards = ({listing}) => {

    const currency = import.meta.env.VITE_CURRENCY || 'රු';
  return (
    <div className='relative bg-white rounded-2x1 shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition'>
      {/* Featured Banner */}
      {listing.featured && (
        <>
        <p className='py-1' />
        <div className='absolute top-0 left-0 bg-red-500 text-white text-center text-xs font-semibold py-1 tracking-wide uppercase'> Featured </div>
        </>
      )}

      <div className='p-5 pt-8'>
        {/* Header */}
        <div className='flex items-center gap-3 mb-3'>
            {}
        </div>
      </div>
    </div>
  )
}

export default ListingCards
