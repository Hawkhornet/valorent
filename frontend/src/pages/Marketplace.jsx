import React from 'react'
import { ArrowLeftIcon, FilterIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Marketplace = () => {
  const navigate = useNavigate()
  const [showFilterphone, setShowFilterphone] = React.useState(false)
  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32'>
      <div className='flex items-center justify-between text-slate-500'>
        <button onClick={()=>{navigate('/'); scrollTo(0, 0)}}
          className='flex items-center gap-2 py-5'>
          <ArrowLeftIcon className="size-4" />
          Back to Home
        </button>
        <button onclick={()=>setShowFilterphone(true)} className='flex sm:hidden items-center gap-2 py-5'>
          <FilterIcon className='size-4'/>
           Filters
          
          </button>
      </div>

      <div className='relative flex items-start justify-between gap-8 pb-8'>
        <div>Filter</div>
        <div className='flex-1 grid xl:grid-cols-2 gap-4'>
          list
        </div>

      </div>
    </div>
  )
}

export default Marketplace
