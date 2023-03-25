import Table from '../components/ProductTable';
import React  from 'react';
import { products } from '../data/dummy';
import {PlusIcon,PrinterIcon} from '@heroicons/react/24/outline'
import { useMyContext } from '../context/ContextProvider';
import { useState } from 'react';

const Products = () => {
    const [showModal, setShowModal] = useState(false);
    const {activeColor , theme}=useMyContext();

    const handleShowModal = () => {
      setShowModal(true);
    };
  
    const handleCloseModal = () => {
      setShowModal(false);
    };
  return (
    <div className='w-full min-h-screen  p-4 md:p-8'>

        <div className='w-full  flex justify-between mb-6'>
          <button onClick={handleShowModal} style={{backgroundColor:activeColor}} className='text-white md:w-44 flex items-center justify-center gap-2 px-4 py-2 rounded-lg'>
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

        {/*---- Modal Start ---- */}
        {showModal && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-white dark:bg-gray-900 opacity-90 dark:opacity-95 flex justify-center items-center"
          onClick={handleCloseModal}
        >
          <div onClick={(e)=>e.stopPropagation()} className="bg-white  dark:bg-gray-500 p-4 rounded shadow-xl">
            <h2 className="text-lg font-bold mb-2">Popup Content</h2>
            <p>Some text goes here...</p>
          </div>
        </div>
         )} 
       {/* ---- Modal End ---*/}

    </div>
  )
}

export default Products