import { ChevronDown, FilterIcon, XIcon } from 'lucide-react'
import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

const FilterSidebar = ({showFilterPhone, setShowFilterPhone, filters, setFilters}) => {

    const currency = import.meta.env.VITE_CURRENCY || 'රු';
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()
    const [search, setSearch] = React.useState(searchParams.get('search') || '')

    const onChangeSearch = (e) => {
        const value = e.target.value
        setSearch(value)
        if (value === '') {
            setSearchParams({})
        } else {
            setSearchParams({ search: value })
        }
    }

    const [expandedSections, setExpandedSections] = React.useState({
        body_type: true,
        price: true,
        make: true,
        transmission_type: true,
        district: true,
    })
    const toggleSection = (section) => {
        setExpandedSections((prev) => ({
            ...prev,
            [section]: !prev[section],
        }))
    }

    const onFiltersChange = (newFilters) => {
        setFilters({...filters, ...newFilters})
    }

    const onClearFilters = () => {
        if(search){
            navigate('/marketplace')
        }
        setFilters({
            make:null,
            maxPrice: 100000,
            body_type: null,
            transmission_type: null,
            district: null,
        })
    }

    const make = [
        {value: 'toyota', label: 'Toyota'},
        {value: 'honda', label: 'Honda'},
        {value: 'byd', label: 'BYD'},
        {value: 'nissan', label: 'Nissan'},
        {value: 'suzuki', label: 'Suzuki'},
        {value: 'ford', label: 'Ford'},
        {value: 'bmw', label: 'BMW'},
        {value: 'mercedes-benz', label: 'Mercedes-Benz'},
        {value: 'audi', label: 'Audi'},
        {value: 'tata', label: 'Tata'},
        {value: 'kia', label: 'Kia'},
        {value: 'tesla', label: 'Tesla'},
        {value: 'volkswagen', label: 'Volkswagen'},
    ]

    const district = [
        {value: 'Colombo', label: 'Colombo'},
        {value: 'Gampaha', label: 'Gampaha'},
        {value: 'Kandy', label: 'Kandy'},
        {value: 'Galle', label: 'Galle'},
        {value: 'Jaffna', label: 'Jaffna'},
        {value: 'Trincomalee', label: 'Trincomalee'},
        {value: 'Anuradhapura', label: 'Anuradhapura'},
        {value: 'Kurunegala', label: 'Kurunegala'},
    ]

  return (
    <div className={`${showFilterPhone ? 'max-sm:fixed' : 'max-sm:hidden'} max-sm:inset-0 z-100 max-sm:h-screen max-sm:overflow-scroll bg-white rounded-lg shadow-sm border-gray-200 h-fit sticky top-24 md:min-w-[300px]`}>
      <div className='p-4 border-b border-gray-200'>
        <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-2 text-gray-700'>
                <FilterIcon className='size-4' />
                <h3 className='font-semibold'>Filters</h3>
            </div>
            <div className='flex items-center gap-2'>

                <XIcon onClick={onClearFilters} className='size-6 text-gray-500 hover:text-gray-700 p-1 hover:bg-gray-100 rounded transition-colors cursor-pointer'/>

                <button onClick={() => setShowFilterPhone(false)} className='sm:hidden text-sm border text-gray-700 px-3 py-1 rounded'> Apply </button>
            </div>
        </div>
      </div>

      <div className='p-4 space-y-6 sm:max-h-[calc(100vh-200px)] overflow-y-scroll no-scrollbar'>
        {/* Search Bar */}
        <div className='flex items-center justify-between'>
            <input type='text' placeholder='Search by make, model, or city' className='w-full text-sm px-3 py-2 border border-gray-300 rounded-md outline-red-500'
            onChange={onChangeSearch} value={search}/>
        </div>
        {/* Make Filter */}
        <div>
            <button onClick={() => toggleSection('make')} className='flex items-center justify-between w-full mb-3'>
                <label className='text-sm font-medium text-gray-800'>Make</label>
                <ChevronDown className={`size-4 transition-transform ${expandedSections.make ? 'rotate-180' : ''}`} />
            </button>
            {expandedSections.make && (
                <div className='flex flex-col gap-2'>
                    {make.map((item) => (
                        <label htmlFor='make.value' className='flex items-center gap-2 text-gray-700 text-sm'>
                            <input type='checkbox' checked={filters.make?.includes(item.value) ||false}
                             onChange={(e) => {
                                const checked = e.target.checked;
                                const current = filters.make || [];
                                const updated = checked ? [...current, item.value] : current.filter((m) => m !== item.value);

                                onFiltersChange({
                                    ...filters,
                                    make: updated.length > 0 ? updated : null
                             })
                            }} />
                            <span> {item.label}</span>
                        </label>
                    ))}
                </div>
            )}
        </div>
        {/* Price Range */}
        <div>
            <button onClick={() => toggleSection('price')} className='flex items-center justify-between w-full mb-3'>
                <label className='text-sm font-medium text-gray-800'>Price Range</label>
                <ChevronDown className={`size-4 transition-transform ${expandedSections.price ? 'rotate-180' : ''}`} />
            </button>
            {expandedSections.price && (
                <div className='space-y-3'>
                    <input type="range" min="0" max="100000" step="100" value={filters.maxPrice || 100000} onChange={(e) =>
                        onFiltersChange({...filters, maxPrice: parseInt(e.target.value)})} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-600" />
                    <div className='flex items-center justify-between text-sm text-gray-600'>
                        <span>{currency}0</span>
                        <span>{currency}{(filters.maxPrice || 100000).toLocaleString()}</span>
                    </div>
                </div>
            )}
        </div>
        {/* Body Type Filter */}
        <div>
            <button onClick={() => toggleSection('body_type')} className='flex items-center justify-between w-full mb-3'>
                <label className='text-sm font-medium text-gray-800'>Body Type</label>
                <ChevronDown className={`size-4 transition-transform ${expandedSections.body_type ? 'rotate-180' : ''}`} />
            </button>
            {expandedSections.body_type && (
                <select
                value={filters.body_type || ''}
                onChange={(e) => onFiltersChange({...filters, body_type: e.target.value || null})}
                className='w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-700 outline-red-500'>
                    <option value=''> All Types </option>
                    <option value='Sedan'> Sedan </option>
                    <option value='SUV'> SUV </option>
                    <option value='Truck'> Truck </option>
                    <option value='Coupe'> Coupe </option>
                    <option value='Van'> Van </option>
                    <option value='Hatchback'> Hatchback </option>
                </select>
            )}
        </div>
        {/* Transmission Filter */}
        <div>
            <button onClick={() => toggleSection('transmission_type')} className='flex items-center justify-between w-full mb-3'>
                <label className='text-sm font-medium text-gray-800'>Transmission</label>
                <ChevronDown className={`size-4 transition-transform ${expandedSections.transmission_type ? 'rotate-180' : ''}`} />
            </button>
            {expandedSections.transmission_type && (
                <select
                value={filters.transmission_type || ''}
                onChange={(e) => onFiltersChange({...filters, transmission_type: e.target.value || null})}
                className='w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-700 outline-red-500'>
                    <option value=''> Both Types </option>
                    <option value='automatic'> Automatic </option>
                    <option value='manual'> Manual </option>
                </select>
            )}
        </div>
        {/* City Filter */}
        <div>
            <button onClick={() => toggleSection('district')} className='flex items-center justify-between w-full mb-3'>
                <label className='text-sm font-medium text-gray-800'>Location</label>
                <ChevronDown className={`size-4 transition-transform ${expandedSections.district ? 'rotate-180' : ''}`} />
            </button>
            {expandedSections.district && (
                <div className='flex flex-col gap-2'>
                    {district.map((item) => (
                        <label htmlFor='district.value' className='flex items-center gap-2 text-gray-700 text-sm'>
                            <input type='checkbox' checked={filters.district?.includes(item.value) ||false}
                             onChange={(e) => {
                                const checked = e.target.checked;
                                const current = filters.district || [];
                                const updated = checked ? [...current, item.value] : current.filter((d) => d !== item.value);

                                onFiltersChange({
                                    ...filters,
                                    district: updated.length > 0 ? updated : null
                                });
                            }} />
                            <span> {item.label}</span>
                        </label>
                    ))}
                </div>
            )}
        </div>
      </div>
    </div>
  )
}

export default FilterSidebar
