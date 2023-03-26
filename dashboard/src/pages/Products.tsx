import Table from '../components/ProductTable';
import React  from 'react';
import { products } from '../data/dummy';
import {PlusIcon,PrinterIcon} from '@heroicons/react/24/outline'
import { useMyContext } from '../context/ContextProvider';
import { useState } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import FormikInput from '../components/inputs/FormikInputs';

// --- for form data
const initialValues={
  title: '',
  price: '',
  category: '',
  count: ''
}

const onSubmit=(values:any)=>{
  console.log(values)
}

const validationSchema = Yup.object().shape({
  title: Yup.string().required('لطفا نام محصول را وارد کنید'),
  price: Yup.number().required('قیمت محصول را وارد کنید'),
  category: Yup.string().required('دسته محصول را انتخاب کنید'),
  count: Yup.number().required('تعداد محصول را مشخص کنید')
});

// -----------

const Products = () => {
    const [showModal, setShowModal] = useState(false);
    const {activeColor}=useMyContext();

    const formik = useFormik(
      {
          initialValues,
          onSubmit,
          validationSchema,
          validateOnMount: true,

      }
    )
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
              <form className="Form" onSubmit={formik.handleSubmit}>
                <FormikInput name="title" formik={formik}  />
                <FormikInput name="price" formik={formik}  />
                <FormikInput name="count" formik={formik}  />
                <FormikInput name="category" formik={formik}  />
                <div className='flex items-center justify-center gap-x-2 my-4'>
                  <button style={{backgroundColor:activeColor}} className="text-white px-4 py-2 rounded-lg disabled:bg-gray-500" type="submit" disabled={!formik.isValid}>ثبت محصول</button>
                  <button style={{borderColor:activeColor , color:activeColor}} className="px-4 py-2 border rounded-lg" type="button" >انصراف</button>
                </div>
              </form>
          </div>
        </div>
         )} 
       {/* ---- Modal End ---*/}

    </div>
  )
}

export default Products