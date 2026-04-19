import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CheckCircle, DollarSign, Eye, LockIcon, Plus, StarIcon, TrendingUp, XCircle } from 'lucide-react';
import StatCard from '../components/StatCard';
import { vehicleIcons } from '../assets/assets';
const MyListings = () => {
  const {userListings, balance} = useSelector((state)=>state.listing)
  const currency = import.meta.env.VITE_CURRENCY || 'රු';
  const navigate = useNavigate()

  const totalValue = userListings.reduce((sum, listing)=>sum + (listing.price ||0), 0);
  const activeListings = userListings.filter((listing)=>listing.status === 'active').length;
  const soldListings = userListings.filter((listing)=>listing.status === 'sold').length;

  const getStatusIcon = (status) => {
    switch (status) {
      case "active":
        return <CheckCircle className='size-3.5'/>;
      case "ban":
        return <CheckCircle className='size-3.5'/>;
      case "sold":
        return <DollarSign className='size-3.5'/>;
      case "inactive":
        return <XCircle className='size-3.5'/>;  
      default:
        return <Clock className='size-3.5'/>;
    }
  }



  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 pt-8'>
      {/*Header*/}
      <div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-8'>
        <div>
          <h1 className='text-3xl font-bold text-gray-800'>My Listings</h1>
          <p className='text-gray-600 mt-1'>Manage your vehicle renting account listings</p>
        </div>
        <button onClick={()=>navigate('/create-listing')} className='bg-red-600 
        hover:bg-red-700 text-white px-6 py-2 rounded font-medium 
        flex items-center space-x-2 mt-4 md:mt-0'>
          <Plus className='size-4'/>
          <span>New Listing</span>
        </button>
      </div>
      {/*Stats*/}
      <div className='grid grid-cols-1 md:grid-cols-4 gap-6 mb-8'>
        <StatCard title='Total Listings' value={userListings.length} icon={<Eye className='size-6 text-indigo-600' />} color='indigo' />
        <StatCard title='Active Listings' value={activeListings} icon={<CheckCircle className='size-6 text-green-600' />}color='green' />
        <StatCard title='Rented' value={soldListings} icon={<TrendingUp className='size-6 text-red-600' />}color='red' />
        <StatCard title='Total Value' value={`${currency}${totalValue.toFixed(2)}`} icon={<DollarSign className='size-6 text-blue-600' />}color='blue' />
      </div>
      {/*Listings Table*/}
      {userListings.length === 0 ?
      (
        <div className='bg-white rounded-lg border border-gray-200 p-16 text-center'>
          <div className='w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4'>
            <Plus className='size-6 text-gray-400' />
          </div>
          <h3 className='text-xl font-medium text-gray-800 mb-2'>No listing yet</h3>
          <p>Start by creating your first vehicle listing!</p>
          <button onClick={()=> navigate("/create-listing")} className='bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-medium'>Create First Listing</button>
        </div>
      )
    :
    (
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {userListings.map((listing)=>(
          <div key={listing.id}
          className='bg-white rounded-lg border border-gray-200 hover:shadow-lg shadow-gray-200/70transition-shadow'>
            <div className='p-6'>
              <div className='flex items-start gap-4 justify-between mb-4'>
                {vehicleIcons[listing.vehicle]}
                <div className='flex-1'>
                  <div className='flex justify-between items-start'>
                    <h3 className='text-lg font-semibold text-gray-800'>{listing.title}</h3>
                    <div className='flex item-center gap-2'>
                        <div className='relative group'>
                          
                          <div className='invisible group-hover:visible absolute right-0 top-0 pt-4.5 z-10'>
                            <div className='bg-white text-gray-600 text-xs rounded border border-gray-200 p-2 px-3'>
                              
                              <button className='text-nowrap'>

                              </button>
                            </div>

                          </div>
                          </div> 
                        
                    </div>
                  </div>
                  <p>
                    {listing.exterior_color} -
                    <span className='capitalize'> {listing.body_type}</span>
                    </p>
                    <span>
                      {getStatusIcon(listing.status)}{" "}<span>{listing.status}</span>
                    </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )}

     
    </div>
  )
}

export default MyListings
