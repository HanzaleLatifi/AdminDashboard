import React  from 'react'
import {MagnifyingGlassIcon} from '@heroicons/react/24/outline'
import { useMyContext } from '../context/ContextProvider';
import pinImg from '../data/pin.png';


const Orders = () => {
  const {activeColor }=useMyContext();

  

  return (
    <div className='w-full min-h-screen p-4 md:p-8'>
      <form className=' flex items-center sm:w-1/3 w-full mx-auto sm:hover:w-1/2 transition-all duration-500 mb-16 mt-4 md:mt-2'>
          <input type='search' className='rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white py-3 px-2 outline-none w-5/6 rounded-l-none'/>
          <button type='submit' style={{backgroundColor:activeColor}} className='w-1/6 text-white  flex items-center justify-center p-3 rounded-lg rounded-r-none'>
            <MagnifyingGlassIcon className='w-7 h-6 rotate-90 '/>
          </button>
      </form>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-4 p-2 '>
        <div className='shadow-lg rounded-2xl relative  '>
          <img src={pinImg} alt='pin' className=' flex items-center justify-center  absolute bottom-24   left-1/2 -translate-x-1/2 -translate-y-1 '  />    
          <div className='p-3  flex flex-col items-center text-gray-100  rounded-2xl space-y-1 ' style={{backgroundColor:activeColor}}>
            <p>شماره سفارش: <span>45788</span> </p>
            <p>تاریخ سفارش: <span>4/55/5788</span> </p>
            <p>مشتری: <span>45788</span> </p>
            <p>آدرس: <span>45788</span> </p>
         </div>
        </div>
      </div>
      
    </div>
  )
}

export default Orders