import React from 'react'
import {MagnifyingGlassIcon} from '@heroicons/react/24/outline'
import { useMyContext } from '../context/ContextProvider';

const Orders = () => {
  const {activeColor}=useMyContext();

  return (
    <div className='w-full min-h-screen p-4 md:p-8'>
      <form className=' flex items-center sm:w-1/3 w-full mx-auto sm:hover:w-1/2 transition-all duration-500'>
          <input type='search' className='rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white py-3 px-2 outline-none w-5/6 rounded-l-none'/>
          <button type='submit' style={{backgroundColor:activeColor}} className='w-1/6 text-white  flex items-center justify-center p-3 rounded-lg rounded-r-none'>
            <MagnifyingGlassIcon className='w-7 h-6 rotate-90 '/>
          </button>
      </form>
    </div>
  )
}

export default Orders