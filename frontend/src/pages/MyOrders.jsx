import React, { useEffect, useState } from 'react'
import {
  Info, Loader2Icon, ChevronDownIcon, ChevronUpIcon,
  CalendarIcon, FuelIcon, GaugeIcon, UsersIcon,
  MapPinIcon, ZapIcon, PaletteIcon, CarIcon, CogIcon
} from 'lucide-react';
import { vehicleIcons } from '../assets/assets';
import { useDispatch } from 'react-redux'
import { setChat } from '../app/features/chatSlice'
import { useAuth, useUser } from '@clerk/react';
import api from '../configs/axios';
import toast from 'react-hot-toast';

const MyOrders = () => {
  const { user, isLoaded } = useUser()
  const { getToken } = useAuth()
  const dispatch = useDispatch()
  const currency = import.meta.env.VITE_CURRENCY || "රු"
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState(null);

  const statusConfig = {
    active:      { label: 'Active',      className: 'bg-emerald-50 text-emerald-600 border border-emerald-200' },
    ending_soon: { label: 'Ending Soon', className: 'bg-amber-50 text-amber-600 border border-amber-200' },
    completed:   { label: 'Completed',   className: 'bg-gray-100 text-gray-500 border border-gray-200' },
    rented:      { label: 'Rented',      className: 'bg-blue-50 text-blue-600 border border-blue-200' },
  }

  const fetchOrders = async () => {
    try {
      setLoading(true)
      const token = await getToken();
      const { data } = await api.get('/api/listing/user-orders', { headers: { Authorization: `Bearer ${token}` } })
      setOrders(data.orders)
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message)
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (user && isLoaded) fetchOrders()
  }, [isLoaded, user])

  if (loading) {
    return (
      <div className='h-[80vh] flex items-center justify-center'>
        <Loader2Icon className='size-7 animate-spin text-orange-500' />
      </div>
    )
  }

  if (!orders.length) {
    return (
      <div className='px-4 md:px-16 lg:px-24 xl:px-32 py-14'>
        <div className='max-w-lg mx-auto bg-white rounded-2xl border border-gray-200 p-12 text-center'>
          <div className='w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mx-auto mb-4'>
            <CarIcon className='size-8 text-orange-400' />
          </div>
          <h3 className='text-lg font-semibold text-gray-800'>No Orders Yet</h3>
          <p className='text-sm text-gray-400 mt-2'>You haven't rented any vehicle yet.</p>
        </div>
      </div>
    )
  }

  return (
    <div className='px-4 md:px-16 lg:px-24 xl:px-32 py-8 min-h-screen bg-gray-50'>
      <div className='max-w-4xl mx-auto'>

        {/* Header */}
        <div className='mb-8'>
          <h2 className='text-2xl font-bold text-gray-900'>My Orders</h2>
          <p className='text-sm text-gray-400 mt-1'>{orders.length} rental{orders.length !== 1 ? 's' : ''} found</p>
        </div>

        <div className='space-y-4'>
          {orders.map((order) => {
            const id = order.id;
            const listing = order.listing;
            const status = statusConfig[order.status] || statusConfig.completed;
            const isExpanded = expandedId === id;

            const days = Math.round(
              (new Date(order.rental_end) - new Date(order.rental_start)) / (1000 * 60 * 60 * 24)
            )
            const total = days * order.price_per_day

            const val = (v) => (v !== null && v !== undefined && v !== '') ? v : '---';

            const detailFields = [
              { icon: <CarIcon className='size-3.5' />,     label: 'Body Type',      value: listing.body_type },
              { icon: <CogIcon className='size-3.5' />,     label: 'Transmission',   value: listing.transmission_type },
              { icon: <FuelIcon className='size-3.5' />,    label: 'Fuel Type',      value: listing.fuel_type },
              { icon: <UsersIcon className='size-3.5' />,   label: 'Seats',          value: listing.seating_capacity },
              { icon: <GaugeIcon className='size-3.5' />,   label: 'Engine (cc)',    value: listing.engine_capacity_cc },
              { icon: <ZapIcon className='size-3.5' />,     label: 'Horsepower',     value: listing.horsepower },
              { icon: <PaletteIcon className='size-3.5' />, label: 'Interior Color', value: listing.interior_color },
              { icon: <MapPinIcon className='size-3.5' />,  label: 'Location',       value: listing.city ? `${listing.city}${listing.district ? `, ${listing.district}` : ''}` : null },
            ]

            return (
              <div key={id} className='bg-white rounded-2xl border border-gray-200 overflow-hidden transition-shadow hover:shadow-md'>

                {/* Main card row */}
                <div className='p-5'>
                  <div className='flex items-start gap-4'>

                    {/* Vehicle icon */}
                    <div className='p-3 rounded-xl bg-orange-50 shrink-0 max-sm:hidden'>
                      {vehicleIcons[listing.body_type]}
                    </div>

                    {/* Info */}
                    <div className='flex-1 min-w-0'>
                      <div className='flex items-start justify-between gap-4 flex-wrap'>

                        {/* Left: title + meta */}
                        <div>
                          <h3 className='text-base font-semibold text-gray-900 leading-tight'>{listing.title}</h3>
                          <p className='text-sm text-gray-500 mt-0.5'>
                            {listing.make} <span className='capitalize'>{listing.model}</span>
                            <span className='mx-1.5 text-gray-300'>·</span>
                            <span className='capitalize'>{listing.exterior_color}</span>
                          </p>

                          <div className='flex flex-wrap gap-2 mt-2.5'>
                            {status && (
                              <span className={`inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full font-medium ${status.className}`}>
                                <Info className='w-3 h-3' /> {status.label}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Right: pricing */}
                        <div className='text-right shrink-0'>
                          <p className='text-xl font-bold text-gray-900'>
                            {currency}{total.toLocaleString()}
                          </p>
                          <p className='text-xs text-gray-400 mt-0.5'>
                            {currency}{order.price_per_day.toLocaleString()} / day
                          </p>
                          <div className='flex items-center gap-1 justify-end mt-1.5 text-xs text-gray-400'>
                            <CalendarIcon className='size-3' />
                            {new Date(order.rental_start).toLocaleDateString()} – {new Date(order.rental_end).toLocaleDateString()}
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>

                  {/* Expanded details */}
                  {isExpanded && (
                    <div className='mt-5 pt-5 border-t border-gray-100'>

                      {/* Detail grid */}
                      <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4'>
                        {detailFields.map(({ icon, label, value }) => (
                          <div key={label} className='bg-gray-50 rounded-xl p-3'>
                            <div className='flex items-center gap-1.5 text-gray-400 mb-1'>
                              {icon}
                              <p className='text-[10px] uppercase tracking-wide font-medium'>{label}</p>
                            </div>
                            <p className='text-sm font-semibold text-gray-800 capitalize'>{val(value)}</p>
                          </div>
                        ))}
                      </div>

                      {/* Description */}
                      {listing.description && (
                        <div className='bg-gray-50 rounded-xl p-4 mb-4'>
                          <p className='text-[10px] uppercase tracking-wide font-medium text-gray-400 mb-1.5'>Description</p>
                          <p className='text-sm text-gray-600 leading-relaxed'>{listing.description}</p>
                        </div>
                      )}

                      {/* Owner info */}
                      {listing.owner && (
                        <div className='flex items-center gap-3 bg-gray-50 rounded-xl p-3'>
                          <img
                            src={listing.owner.image}
                            alt={listing.owner.name}
                            className='size-9 rounded-full object-cover border border-gray-200'
                          />
                          <div>
                            <p className='text-sm font-semibold text-gray-800'>{listing.owner.name}</p>
                            <p className='text-xs text-gray-400'>{listing.owner.email}</p>
                          </div>
                          <span className='ml-auto text-xs text-gray-400'>
                            Member since {new Date(listing.owner.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Action row */}
                  <div className='flex items-center justify-between mt-4 pt-4 border-t border-gray-100'>
                    <button
                      onClick={() => setExpandedId(isExpanded ? null : id)}
                      className='flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800 transition-colors'>
                      {isExpanded ? (
                        <><ChevronUpIcon className='size-4' /> Hide Details</>
                      ) : (
                        <><ChevronDownIcon className='size-4' /> View Details</>
                      )}
                    </button>

                    <button
                      onClick={() => dispatch(setChat({ listing }))}
                      className='text-sm px-4 py-1.5 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium'>
                      Contact Owner
                    </button>
                  </div>
                </div>

              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default MyOrders
