import React, { useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {
  ArrowBigLeftIcon,
  ArrowUpRightFromSquareIcon,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Cog,
  Fuel,
  LineChart,
  MapPin,
  MessageCircle,
  ShoppingBag,
} from 'lucide-react'
import { vehicleIcons } from '../assets/assets'

const cardClass =
  'rounded-xl border border-gray-200 bg-white p-6 shadow-sm'

const formatShortDate = (value) => {
  if (!value) return '—'
  const d = new Date(value)
  if (Number.isNaN(d.getTime())) return '—'
  return d.toLocaleDateString('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
  })
}

const ListingDetails = () => {
  const navigate = useNavigate()
  const currency = import.meta.env.VITE_CURRENCY || 'රු'

  const { listingId } = useParams()
  const { listings } = useSelector((state) => state.listing)

  const listing = useMemo(
    () => listings.find((item) => String(item.id) === String(listingId)),
    [listingId, listings]
  )

  const [galleryIndex, setGalleryIndex] = useState(0)

  const images = listing?.images?.length ? listing.images : []
  const gallerySrc = images[galleryIndex] ?? images[0]
  const owner = listing?.owner

  const handlePrevImage = () => {
    if (!images.length) return
    setGalleryIndex((i) => (i === 0 ? images.length - 1 : i - 1))
  }

  const handleNextImage = () => {
    if (!images.length) return
    setGalleryIndex((i) => (i === images.length - 1 ? 0 : i + 1))
  }

  const vehicleIcon =
    listing &&
    (vehicleIcons[listing.body_type?.toLowerCase?.()] ?? vehicleIcons.sedan)

  return listing ? (
    <div className="mx-auto min-h-screen px-6 pb-16 pt-2 md:px-16 lg:px-24 xl:px-32">
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 py-5 text-sm text-slate-500 transition hover:text-slate-700"
      >
        <ArrowBigLeftIcon className="size-4" aria-hidden />
        Go to Previous Page
      </button>

      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-10">
        {/* Main column */}
        <div className="min-w-0 flex-1 space-y-6">
          {/* Listing summary */}
          <div className={cardClass}>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-gray-900 [&_svg]:size-6">
                {vehicleIcon}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h1 className="flex flex-wrap items-center gap-2 text-xl font-semibold text-slate-900 md:text-2xl">
                      <span>{listing.title}</span>
                      <a
                        href={listing.images?.[0] ?? '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex shrink-0 text-slate-400 transition hover:text-red-600"
                        aria-label="Open in new tab"
                        onClick={
                          listing.images?.[0]
                            ? undefined
                            : (e) => e.preventDefault()
                        }
                      >
                        <ArrowUpRightFromSquareIcon className="size-4" />
                      </a>
                    </h1>
                    {owner && (
                      <p className="mt-1 text-sm text-slate-500">
                        @{owner.email?.split('@')[0] ?? 'seller'} ·{' '}
                        {listing.city}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-slate-700">
                  <div className="flex items-center gap-1.5 text-sm">
                    <Cog className="size-4 shrink-0 text-gray-400" />
                    <span className="font-medium">
                      {listing.transmission_type}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm">
                    <Calendar className="size-4 shrink-0 text-gray-400" />
                    <span className="font-medium">{listing.year}</span>
                  </div>
                  {listing.fuel_type && (
                    <div className="flex items-center gap-1.5 text-sm">
                      <Fuel className="size-4 shrink-0 text-gray-400" />
                      <span className="font-medium">{listing.fuel_type}</span>
                    </div>
                  )}
                  {listing.city && (
                    <div className="flex items-center gap-1.5 text-sm">
                      <MapPin className="size-4 shrink-0 text-gray-400" />
                      <span className="font-medium">{listing.city}</span>
                    </div>
                  )}
                  {listing.mileage_km != null && (
                    <div className="flex items-center gap-1.5 text-sm">
                      <LineChart className="size-4 shrink-0 text-gray-400" />
                      <span className="font-medium">
                        {listing.mileage_km.toLocaleString()} km
                      </span>
                    </div>
                  )}
                </div>

                <div className="mt-6 flex justify-end border-t border-gray-100 pt-4">
                  <span className="text-2xl font-semibold text-slate-900">
                    {currency}
                    {listing.price_per_day.toLocaleString()}{' '}
                    <span className="text-base font-normal text-slate-600">
                      / day
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Vehicle gallery */}
          <div className={cardClass}>
            <h2 className="border-b border-gray-200 pb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">
              Vehicle Gallery
            </h2>
            <div className="relative mt-4 aspect-[16/10] w-full overflow-hidden rounded-lg bg-gray-100">
              {gallerySrc ? (
                <img
                  src={gallerySrc}
                  alt=""
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-slate-400">
                  No images
                </div>
              )}
              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={handlePrevImage}
                    className="absolute left-3 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-800 shadow-md transition hover:bg-white"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="size-6" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNextImage}
                    className="absolute right-3 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-800 shadow-md transition hover:bg-white"
                    aria-label="Next image"
                  >
                    <ChevronRight className="size-6" />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="w-full shrink-0 space-y-6 lg:w-[22rem]">
          <div className={cardClass}>
            <h2 className="mb-4 text-lg font-semibold text-slate-900">
              Seller Information
            </h2>
            {owner ? (
              <div className="flex gap-4">
                <img
                  src={owner.image}
                  alt=""
                  className="size-14 shrink-0 rounded-full object-cover ring-2 ring-gray-100"
                />
                <div className="min-w-0">
                  <p className="font-semibold text-slate-900">{owner.name}</p>
                  <p className="truncate text-sm text-slate-500">{owner.email}</p>
                  {listing.city && (
                    <p className="mt-1 flex items-center gap-1 text-sm text-slate-600">
                      <MapPin className="size-3.5 shrink-0 text-gray-400" />
                      {listing.city}
                    </p>
                  )}
                  <p className="mt-2 text-xs text-slate-400">
                    Member since {formatShortDate(owner.createdAt)}
                  </p>
                </div>
              </div>
            ) : (
              <p className="text-sm text-slate-500">Seller info unavailable.</p>
            )}
            <div className="mt-6 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => navigate('/messages')}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-orange-500 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600"
              >
                <MessageCircle className="size-5" />
                Chat
              </button>
              <button
                type="button"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-purple-600 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-purple-700"
              >
                <ShoppingBag className="size-5" />
                Purchase
              </button>
            </div>
          </div>

          <div className={cardClass}>
            <h2 className="mb-4 border-b border-gray-200 pb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">
              Car Overview
            </h2>
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <dt className="text-xs font-medium text-slate-400">
                  Interior color
                </dt>
                <dd className="mt-0.5 font-semibold text-slate-900">
                  {listing.interior_color}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-slate-400">
                  Exterior color
                </dt>
                <dd className="mt-0.5 font-semibold text-slate-900">
                  {listing.exterior_color}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-slate-400">
                  Body type
                </dt>
                <dd className="mt-0.5 font-semibold text-slate-900">
                  {listing.body_type}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-slate-400">
                  Horsepower
                </dt>
                <dd className="mt-0.5 font-semibold text-slate-900">
                  {listing.horsepower}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-slate-400">Doors</dt>
                <dd className="mt-0.5 font-semibold text-slate-900">
                  {listing.doors}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-slate-400">
                  Seating capacity
                </dt>
                <dd className="mt-0.5 font-semibold text-slate-900">
                  {listing.seating_capacity}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-slate-400">
                  Transmission
                </dt>
                <dd className="mt-0.5 font-semibold text-slate-900">
                  {listing.transmission_type}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-slate-400">
                  Engine (cc)
                </dt>
                <dd className="mt-0.5 font-semibold text-slate-900">
                  {listing.engine_capacity_cc > 0
                    ? listing.engine_capacity_cc.toLocaleString()
                    : '—'}
                </dd>
              </div>
              {listing.battery_capacity_kwh != null && (
                <div>
                  <dt className="text-xs font-medium text-slate-400">
                    Battery (kWh)
                  </dt>
                  <dd className="mt-0.5 font-semibold text-slate-900">
                    {listing.battery_capacity_kwh}
                  </dd>
                </div>
              )}
              {listing.range_km != null && (
                <div>
                  <dt className="text-xs font-medium text-slate-400">
                    Range (km)
                  </dt>
                  <dd className="mt-0.5 font-semibold text-slate-900">
                    {listing.range_km.toLocaleString()}
                  </dd>
                </div>
              )}
            </dl>
          </div>
        </aside>
      </div>
    </div>
  ) : (
    <div className="mx-auto flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="mb-6 text-slate-600">This listing could not be found.</p>
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-slate-600"
      >
        <ArrowBigLeftIcon className="size-4" /> Go to Previous Page
      </button>
    </div>
  )
}

export default ListingDetails
