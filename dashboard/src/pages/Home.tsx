import { useMyContext, useMyContextActions } from '../context/ContextProvider'
import React from 'react';
import {ArrowDownTrayIcon} from '@heroicons/react/24/outline'

const Home = () => {
  const state=useMyContext();
  const dispatch=useMyContextActions();
  const activeColor='#d90f52';


  return (
    <div className='p-6'>
       <div className="bg-white p-4 md:p-8  dark:text-gray-200 dark:bg-secondary-dark-bg h-56 md:h-44 rounded-xl w-full  bg-hero-pattern dark:bg-hero-dark-pattern bg-no-repeat bg-cover bg-center">
          <span className='text-gray-700 text-2xl  dark:text-gray-200 drop-shadow-xl' >
            خوش آمدید
          </span>
          <p className='md:mt-2 mt-4 text-gray-700'>برای دانلود فایل پی دی اف حاوی اطلاعات خرید و فروش هفته جاری بر روی گزینه دریافت کلیک نمایید . </p>
          <div className='w-full  flex justify-end  px-2 mt-4'>
              <button className='text-white flex gap-3 rounded-xl px-6 py-2.5 text-lg' style={{backgroundColor:activeColor}}>
                دریافت
                <ArrowDownTrayIcon className='h-6 w-6 '/>
              </button>
          </div>
       </div>
    </div>
  )
}

export default Home