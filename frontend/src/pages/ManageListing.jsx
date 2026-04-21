import { Loader2Icon, Upload } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import toast from 'react-hot-toast'
import { useAuth } from '@clerk/react';
import { getAllPublicListing, getAllUserListing } from '../app/features/listingSlice';
import api from '../configs/axios';

const ManageListing = () => {

  const {id} = useParams();
  const navigate = useNavigate();
  const {userListings} = useSelector((state)=>state.listing)

  const {getToken} = useAuth()
  const dispatch = useDispatch()

  const [loadingListing, setLoadingListing] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [imageError, setImageError] = useState(false)

  const [formData, setFormData] = useState({
    title: '',
    make: '',
    model: '',
    year: '',
    trim: '',
    body_type: '',
    exterior_color: '',
    interior_color: '',
    horsepower: '',
    doors: '',
    fuel_type: '',
    cylinders: '',
    engine_capacity_cc: '',
    seating_capacity: '',
    transmission_type: '',
    mileage_km: '',
    price_per_day: '',
    deposit: '',
    min_rental_days: 1,
    max_rental_days: 30,
    description: '',
    city: '',
    district: '',
    images: [],
  })

  const district = ["Colombo", "Gampaha", "Kandy", "Galle", "Jaffna", "Trincomalee"
    , "Anuradhapura", "Kurunegala"];

  const make = ["Toyota", "Honda", "BYD", "Nissan", "Suzuki", "Ford", "BMW", "Mercedes-Benz", "Audi"
    , "Tata", "Kia", "Tesla", "Volkswagen"];
  
  const transmission_type = ["Automatic", "Manual"];
  const fuel_type = ["Petrol", "Diesel", "Electric", "Hybrid"];
  const body_type = ["Sedan", "SUV", "Truck", "Coupe", "Van", "Hatchback"];

  const handleInputChange = (field, value) =>{
    setFormData((prev) => ({ ...prev, [field]: value}));
  }

  const handleImageUpload = async (event) =>{
    const files = Array.from(event.target.files);
    if (!files.length) return;
    if (files.length + formData.images.length > 5) return toast.error("You can add up to 5 images")
    setImageError(false)
    setFormData((prev) => ({...prev, images: [...prev.images, ...files]}))
  }

  const removeImage = (indexToRemove) =>{
    setFormData((prev) => ({
      ...prev, images: prev.images.filter((_, i) => i !== indexToRemove)
    }))
  }

  useEffect(() =>{
    if(!id) return;
    setIsEditing(true)
    setLoadingListing(true)
    const listing = userListings.find((listing)=>listing.id === id)
    if(listing){
      setFormData(listing)
      setLoadingListing(false)
    }else{
      toast.error("Listing not found")
      navigate("/my-listings")
    }
  }, [id])

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Image validation — required on create, at least one must remain on edit
    if (formData.images.length === 0) {
      setImageError(true)
      toast.error("Please upload at least one image")
      // Scroll the images section into view
      document.getElementById('images-section')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      return
    }

    toast.loading("Saving...")
    const dataCopy = structuredClone(formData)
    try {
      if(isEditing){
        dataCopy.images = formData.images.filter((image) =>typeof image === "string")

        const formDataInstance = new FormData()
        formDataInstance.append('vehicleDetails', JSON.stringify(dataCopy))
        formData.images.filter((image) => typeof image !== 'string').forEach((image) =>{formDataInstance.append('images', image)})

        const token = await getToken()
        const { data } = await api.put('/api/listing', formDataInstance, {headers: {Authorization: `Bearer ${token}` }})
        toast.dismissAll()
        toast.success(data.message)
        dispatch(getAllUserListing({getToken}))
        dispatch(getAllPublicListing())
        navigate('/my-listings')
      }else{
        delete dataCopy.images;

        const formDataInstance = new FormData();
        formDataInstance.append('vehicleDetails', JSON.stringify(dataCopy));
        formData.images.forEach((image) =>{
          formDataInstance.append('images', image)
        })

        const token = await getToken()
        const { data } = await api.post('/api/listing', formDataInstance, {headers: {Authorization: `Bearer ${token}` }})
        toast.dismissAll()
        toast.success(data.message)
        dispatch(getAllUserListing({getToken}))
        dispatch(getAllPublicListing())
        navigate('/my-listings')
      }
    } catch (error) {
      toast.dismissAll();
      toast.error(error?.response?.data?.message || error.message);
    }
  }

  if(loadingListing){
    return (
      <div className='h-screen flex items-center justify-center'>
        <Loader2Icon className='size-7 animate-spin text-red-600' />
      </div>
    )
  }

  return (
    <div className='min-h-screen py-8'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='mb-8'>
          <h1 className='text-3xl font-bold text-gray-800'>
            {isEditing ? "Edit Listing" : "List Your Vehicle"}
          </h1>
          <p className='text-gray-600 mt-2'>
            {isEditing ? 'Update your existing vehicle listing' : 'Create a listing to display your vehicle.'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className='space-y-8'>

          {/* BASIC INFO */}
          <Section title='Basic Information'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <InputField label='Listing Title *' value={formData.title} placeholder='e.g., Well-Maintained 2025 BYD Sealion 5' onChange={(v) => handleInputChange('title', v)} required={true} />
              <SelectField label='Make *' options={make} value={formData.make} onChange={(v) => handleInputChange('make', v)} required={true}/>
              <InputField label='Model *' value={formData.model} placeholder='e.g., Sealion 6 AWD' onChange={(v) => handleInputChange('model', v)} required={true} />
              <InputField label='City *' value={formData.city} placeholder='e.g., Dematagoda' onChange={(v) => handleInputChange('city', v)} required={true} />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-1 gap-6 mb-6'>
              <SelectField label='District *' options={district} value={formData.district} onChange={(v) => handleInputChange('district', v)} required={true}/>
            </div>
          </Section>

          {/* VEHICLE DETAILS */}
          <Section title="Vehicle Details">
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-6'>
              <InputField label='Year of Manufacture *' type='number' min={1990} max={2026} value={formData.year} placeholder='2026' onChange={(v) => handleInputChange('year', v)} required={true} />
              <SelectField label='Body Type *' options={body_type} value={formData.body_type} onChange={(v) => handleInputChange('body_type', v)} required={true}/>
              <InputField label='Trim' value={formData.trim} placeholder='e.g., Dynamic / Superior' onChange={(v) => handleInputChange('trim', v)} required={false} />
              <InputField label='Exterior Color *' value={formData.exterior_color} placeholder='e.g., Cosmos Black' onChange={(v) => handleInputChange('exterior_color', v)} required={true} />
              <InputField label='Interior Color' value={formData.interior_color} placeholder='e.g., Maroon' onChange={(v) => handleInputChange('interior_color', v)} required={false} />
              <InputField label='Horsepower *' type='number' min={0} value={formData.horsepower} placeholder='240' onChange={(v) => handleInputChange('horsepower', v)} required={true} />
              <SelectField label='Fuel Type *' options={fuel_type} value={formData.fuel_type} onChange={(v) => handleInputChange('fuel_type', v)} required={true}/>
              <SelectField label='Transmission *' options={transmission_type} value={formData.transmission_type} onChange={(v) => handleInputChange('transmission_type', v)} required={true}/>
              <InputField label='Seating Capacity *' type='number' min={0} value={formData.seating_capacity} placeholder='5' onChange={(v) => handleInputChange('seating_capacity', v)} required={true} />
              <InputField label='Cylinders' type='number' min={0} value={formData.cylinders} placeholder='6' onChange={(v) => handleInputChange('cylinders', v)} required={false} />
              <InputField label='Engine Capacity (cc)' type='number' min={0} value={formData.engine_capacity_cc} placeholder='1500' onChange={(v) => handleInputChange('engine_capacity_cc', v)} required={false} />
              <InputField label='Mileage (km) *' value={formData.mileage_km} placeholder='70000' onChange={(v) => handleInputChange('mileage_km', v)} required={true} />
            </div>
          </Section>

          {/* PRICING */}
          <Section title='Pricing and Description'>
            <InputField label='Rental Price (LKR) /day *' type='number' min={0} value={formData.price_per_day} placeholder='9500.00' onChange={(v) => handleInputChange('price_per_day', v)} required={true} />
            <TextareaField label='Description *' value={formData.description} onChange={(v) => handleInputChange('description', v)} required={true}/>
          </Section>

          {/* IMAGES */}
          <Section title='Vehicle Images *'>
            <div id='images-section' className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${imageError ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}>
              <input type='file' id='images' multiple accept='image/*' onChange={handleImageUpload} className='hidden'/>
              <Upload className={`w-12 h-12 mx-auto mb-4 ${imageError ? 'text-red-400' : 'text-gray-400'}`}/>
              <label htmlFor="images" className='px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer'>
                Choose Files
              </label>
              <p className='text-sm text-gray-500 mt-2'>Upload at least 1 image (max 5)</p>
              {imageError && (
                <p className='text-sm text-red-500 mt-2 font-medium'>At least one image is required</p>
              )}
            </div>
            {formData.images.length > 0 && (
              <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-4'>
                {formData.images.map((img, index) =>(
                  <div key={index} className='relative'>
                    <img src={typeof img === 'string' ? img : URL.createObjectURL(img)} alt={`image ${index + 1}`} className='w-full h-24 object-cover rounded-lg' />
                    <button type='button' onClick={() => removeImage(index)} className='absolute -top-2 -right-2 size-6 bg-red-600 text-white rounded-full hover:bg-red-700'>
                      x
                    </button>
                  </div>
                ))}
              </div>
            )}
          </Section>

          <div className='flex justify-end gap-3 text-sm'>
            <button onClick={() => navigate(-1)} type='button' className='px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors'>
              Cancel
            </button>
            <button type='submit' className='px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors'>
              {isEditing ? 'Update Listing' : 'Create Listing'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

{/* --- Common Elements --- */}
const Section = ({title, children}) => (
  <div className='bg-white rounded-lg border border-gray-200 p-6 space-y-6'>
    <h2 className='text-lg font-semibold text-gray-800'>{title}</h2>
    {children}
  </div>
)

const InputField = ({label, value, onChange, placeholder, type = 'text', required = false, min = null, max = null})=> (
  <div>
    <label className='block text-sm font-medium text-gray-700 mb-2'>{label}</label>
    <input type={type} min={min} max={max} placeholder={placeholder} value={value} onChange={(e)=>onChange(e.target.value)} className='w-full px-3 py-1.5 text-gray-600 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 border-gray-300' required={required}/>
  </div>
)

const SelectField = ({label, options, value, onChange, required = false}) => (
  <div>
    <label className='block text-sm font-medium text-gray-700 mb-2'>{label}</label>
    <select value={value} onChange={(e) => onChange(e.target.value)} className='w-full px-3 py-1.5 text-gray-600 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 border-gray-300' required={required}>
      <option value=''>Select...</option>
      {options.map((opt)=>(
        <option key={opt} value={opt}>{opt}</option>
      ))}
    </select>
  </div>
)

const TextareaField = ({label, value, onChange, required = false}) => (
  <div>
    <label className='block text-sm font-medium text-gray-700 mb-2'>{label}</label>
    <textarea rows={5} value={value} onChange={(e) => onChange(e.target.value)} className='w-full px-3 py-1.5 text-gray-600 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 border-gray-300'></textarea>
  </div>
)

export default ManageListing
