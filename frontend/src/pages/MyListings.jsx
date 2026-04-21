import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CheckCircle, DollarSign, Edit, Eye, EyeIcon, EyeOffIcon, LockIcon, Plus, StarIcon, TrashIcon, TrendingUp, XCircle } from 'lucide-react';
import StatCard from '../components/StatCard';
import { dummyOrders, vehicleIcons } from '../assets/assets';
import Footer from '../components/Footer';
import { useAuth } from '@clerk/react';
import api from '../configs/axios';
import { getAllPublicListing, getAllUserListing } from '../app/features/listingSlice';
import toast from 'react-hot-toast'


const MyListings = () => {
  const currency = import.meta.env.VITE_CURRENCY || 'රු';
  const navigate = useNavigate()
  const { getToken } = useAuth()
  const dispatch = useDispatch()

  const { userListings, totalEarnings } = useSelector((state) => state.listing)
  const activeListings = userListings.filter((listing)=>listing.status === 'active').length;
  const rentedListings = userListings.filter((listing)=>listing.status === 'rented').length;

  const getStatusIcon = (status) => {
    switch (status) {
      case "active":
        return <CheckCircle className='size-3.5'/>;
      case "rented":
        return <DollarSign className='size-3.5'/>;
      case "inactive":
        return <XCircle className='size-3.5'/>;
      default:
        return <Clock className='size-3.5'/>;
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return 'text-green-800';
      case "rented":
        return 'text-red-800';
      case "inactive":
        return 'text-gray-800';
      default:
        return 'text-gray-800';
    }
  }

  const toggleStatus = async (listingId) => {
    try{
      toast.loading('Updating listing status...')
      const token = await getToken();
      const { data } = await api.put(`/api/listing/${listingId}/status`, {}, { headers: { Authorization: `Bearer ${token}` }})
      dispatch(getAllUserListing({getToken}))
      dispatch(getAllPublicListing())
      toast.dismissAll();
      toast.success(data.message);

    }catch(error){
      toast.dismissAll();
      toast.error(error?.response?.data?.message || error.message);
    }
  }
  const deleteListing = async (listingId) => {
    try{
      const confirm = window.confirm('Are you sure you want to delete this listing?')
      if(!confirm) return;

      toast.loading('Deleting listing...')
      const token = await getToken();
      const { data } = await api.delete(`/api/listing/${listingId}`, { headers: { Authorization: `Bearer ${token}` }})
      dispatch(getAllUserListing({getToken}))
      dispatch(getAllPublicListing())
      toast.dismissAll();
      toast.success(data.message);
      
    }catch(error){
      toast.dismissAll();
      toast.error(error?.response?.data?.message || error.message);
    }
  }





  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 pt-8'>
      {/*Header*/}
      <div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-8'>
        <div>
          <h1 className='text-3xl font-bold text-gray-800'>My Listings</h1>
          <p className='text-gray-600 mt-1'>Manage your vehicle rental listings</p>
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
        <StatCard title='Rented' value={rentedListings} icon={<TrendingUp className='size-6 text-red-600' />}color='red' />
        <StatCard 
    title='Rental Earnings' 
    value={`${currency}${totalEarnings.toFixed(2)}`} 
    icon={<DollarSign className='size-6 text-blue-600' />} 
    color='blue' 
/>
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
                      <div key={listing.id} className='bg-white rounded-lg border border-gray-200 hover:shadow-lg shadow-gray-200/70 transition-shadow'>
              <div className='p-6 flex flex-col min-h-[200px]'>

                {/* Top — icon + title + status */}
                <div className='flex items-start gap-3 mb-4'>
                  <div className='p-2 bg-gray-100 rounded-xl'>
                    {vehicleIcons[listing.vehicle]}
                  </div>
                  <div className='flex-1'>
                    <div className='flex justify-between items-start'>
                      <h3 className='text-lg font-semibold text-gray-800'>{listing.title}</h3>
                      <span className={`flex items-center gap-1 text-xs ${getStatusColor(listing.status)}`}>
                        {getStatusIcon(listing.status)} {listing.status}
                      </span>
                    </div>
                    <p className='text-gray-500 text-md'>
                      {listing.exterior_color} - <span className='capitalize'>{listing.body_type}</span>
                    </p>
                  </div>
                </div>

                {/* Bottom — price + buttons */}
                <div className='flex items-center justify-between pt-3 border-t border-gray-200 mt-auto'>
                  <span className='text-xl font-bold text-gray-800'>
                    {currency}{listing.price_per_day.toLocaleString()}
                    <span className='text-sm font-normal text-gray-500'> /day</span>
                  </span>
                  <div className='flex items-center gap-2'>
                    {listing.status !== 'sold' && (
                      <button onClick={()=>deleteListing(listing.id)} className='p-2 border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-red-500'>
                        <TrashIcon className='size-4'/>
                      </button>
                    )}
                    <button onClick={()=>navigate(`/edit-listing/${listing.id}`)} className='p-2 border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-indigo-600'>
                      <Edit className='size-4'/>
                    </button>
                    <button onClick={()=>toggleStatus(listing.id)} className='p-2 border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-purple-600'>
                      {listing.status === 'active' ? <EyeOffIcon className='size-4'/> : <EyeIcon className='size-4'/>}
                    </button>
                  </div>
                </div>

              </div>
            </div>
            

          ))}
        </div>
      )}
      <Footer />
    </div>
  )
}

export default MyListings
