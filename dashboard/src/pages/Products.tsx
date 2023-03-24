import Table from '../components/ProductTable';
import React from 'react';
import { products } from '../data/dummy';
import {PlusIcon,PrinterIcon} from '@heroicons/react/24/outline'
import { useMyContext } from '../context/ContextProvider';

const Products = () => {
  const {activeColor , theme}=useMyContext()
  return (
    <div className='w-full min-h-screen  p-4 md:p-8'>
        <div className='w-full  flex justify-between mb-6'>
          <button style={{backgroundColor:activeColor}} className='text-white md:w-44 flex items-center justify-center gap-2 px-4 py-2 rounded-lg'>
              <span>افزودن محصول</span>
              <PlusIcon className='h-7 w-8'/>
          </button>
          <button style={{backgroundColor:activeColor}}  className='text-white md:w-44 flex items-center justify-center gap-2 px-4 py-2 rounded-lg'>
            <span>چاپ</span>
            <PrinterIcon className='h-7 w-7'/>
          </button>
        </div>
        <div className='flex items-center justify-center '>
          <Table data={products} headers={['عکس','نام محصول','دسته','تعداد','قیمت']} hide="id" sortByHeader={['قیمت','تعداد']}/>
        </div>
    </div>
  )
}

export default Products