import React, { useEffect, useState } from 'react'
import { Info, Loader2Icon } from 'lucide-react';
import { dummyOrders, vehicleIcons } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { setChat } from '../app/features/chatSlice'
import Footer from '../components/Footer';

const MyOrders = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const currency = import.meta.env.VITE_CURRENCY || "රු"
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState(null);

  const statusConfig = {
    active: { label: 'Active', className: 'bg-green-50 text-green-600' },
    ending_soon: { label: 'Ending Soon', className: 'bg-red-50 text-red-600' },
    completed: { label: 'Completed', className: 'bg-gray-100 text-gray-600' },
}


  const fetchOrders = async () =>{
    setOrders(dummyOrders)
    setLoading(false)
  }

  useEffect(()=> {
    fetchOrders()
  }, [])

if(loading){
  return(
    <div className='h-[80vh] flex items-center justify-center'>
      <Loader2Icon className='size-7 animate-spin text-red-600'/>
    </div>
  )
}

if(!orders.length) {
  return (
    <div className='px-4 md:px-16 lg:px-24 xl:px-32'>
      <div className='max-w-2xl mx-auto mt-14 bg-white rounded-xl border border-gray-200 p-8 text-center'>
        <h3 className='text-lg font-semibold'> No Orders Yet </h3>
        <p className='text-sm text-gray-500 mt-2'> You haven't rented any vehicle yet. </p>
      </div>
    </div>
  )
}


  return (
    <div className='px-4 md:px-16 lg:px-24 xl:px-32 py-6'>
      <h2 className='text-2xl font-semibold mb-6'> My Orders </h2>

      <div className='space-y-4'>
        {orders.map((order) =>{
          const id = order.id;
          const listing = order.listing;
          const status = statusConfig[order.status]

          const days = Math.round(
            (new Date(order.rental_end) - new Date(order.rental_start)) / (1000 * 60 * 60 * 24)
          )
          const total = days * order.price_per_day

          return (
            <div key={id} className='bg-white rounded-lg border border-gray-200 p-5 flex flex-col max-w-4xl'>
              <div className='flex items-start gap-4 flex-1'>
                <div className='p-2 rounded-lg bg-gray-50 max-sm:hidden'>
                  {vehicleIcons[listing.body_type]}
                </div>

                <div className='flex-1'>
                  <div className='flex items-start justify-between gap-4'>
                    <div>
                      <h3 className='text-lg font-semibold'> {listing.title} </h3>
                      <p className='text-sm text-gray-800 mt-1'> {listing.make} <span className='capitalize'>{listing.model}</span> </p>
                      <p className='text-sm text-gray-500 mt-1'> {listing.exterior_color} - <span className='capitalize'>{listing.body_type}</span> </p>
                      <div className='flex gap-2 mt-2'>
                        {status && (
                          <span className={`flex items-center text-sm px-2 py-1 rounded-md ${status.className}`}>
                            <Info className='w-3 h-3 mr-1'/> {status.label}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className='text-right'>
                      <p className='text-xl font-semibold'>
                        Total Price: {currency}{total.toLocaleString()}
                      </p>
                      <p className='text-sm text-gray-500 mt-1'>
                        {currency}{order.price_per_day.toLocaleString()} / day
                      </p>
                    <p className='text-xs text-gray-400 mt-1'>
                      Rental Period: {new Date(order.rental_start).toLocaleDateString()} – {new Date(order.rental_end).toLocaleDateString()}
                    </p>
                  </div>
                  </div>
                </div>
              </div>

              <div className='flex flex-row gap-2 items-end justify-end pt-6'>
                <button
                  onClick={() => navigate(`/listing/${listing.id}`)}
                  className='text-sm px-4 py-1.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors'>
                  View Details
                </button>
                <button
                  onClick={() => dispatch(setChat({ listing }))}
                  className='text-sm px-4 py-1.5 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors'>
                  Contact Owner
                </button>
              </div>
            </div>
          )
        })}

      </div>
    
    </div>
    
  )
  
}


export default MyOrders
