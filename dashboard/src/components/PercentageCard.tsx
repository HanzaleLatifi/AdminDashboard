import React from 'react';
import { toPersianDigits } from '../utils/toPersianDisgits';
import {ChevronDoubleDownIcon , ChevronDoubleUpIcon} from '@heroicons/react/24/outline';


type propsTypes={
    type:"asc"|"desc",
    title:string,
    percent:number,
    icon:any

}

const PercentageCard =({type , title , percent , icon}:propsTypes) => {
  return (
            <div className={`bg-gradient-to-t from-pink-200  rounded-lg p-4 shadow-md`}>
                <div className='flex items-center justify-between mb-8'>
                    <p className='text'>{title}</p>
                    <span className='bg-white p-1 shadow-md rounded-full '>
                        {icon}
                    </span>
                </div>
                <div className='flex items-center justify-between '>
                    <p className='text-sm '>نسبت به هفته قبل</p>
                    <div className=' font-bold flex items-center gap-2 text-gray-700'>
                       <span>{type ==='asc' ? <ChevronDoubleUpIcon className='h-7 w-6 text-green-500'/>  : <ChevronDoubleDownIcon className='h-7 w-6 text-red-500'/>}</span>
                       <p className='text-2xl'>
                        {toPersianDigits(percent)}<span className='text-sm pl-0.5'>%</span>
                       </p>
                    </div>
                </div>
            </div> 
         )
}

export default PercentageCard