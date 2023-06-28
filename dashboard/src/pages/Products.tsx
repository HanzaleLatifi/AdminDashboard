import Table from '../components/ProductTable';
import React  from 'react';
import { myProducts } from '../data/dummy';
import {PlusIcon,PrinterIcon} from '@heroicons/react/24/outline'
import { useMyContext } from '../context/ContextProvider';
import { useState } from 'react';
import * as Yup from 'yup';
import { Formik, useFormik } from 'formik';
import FormikInput from '../components/Formik/FormikInputs';
import FormikSelect from '../components/Formik/FormikSelect';
import { toast } from 'react-hot-toast';

// --- for form data in Modal
const initialValues={
  title: '',
  price: '',
  category: '',
  count: ''
}



const validationSchema = Yup.object().shape({
  title: Yup.string().required('لطفا نام محصول را وارد کنید'),
  price: Yup.number().required('قیمت محصول را وارد کنید'),
  category: Yup.string().required('دسته محصول را انتخاب کنید'),
  count: Yup.number().required('تعداد محصول را مشخص کنید')
});

const selectOptions=[ 
  {value:'ادکلن' , label:'ادکلن'},
  {value:'شامپو' , label:'شامپو'},
  {value:'کرم' , label:'کرم'},
]

// -----------

type productType={
  imgSrc?:string
  title:string
  category:string
  id:number|string
  count :number
  price:number
}

const Products = () => {
    const [showModal, setShowModal] = useState(false);
    const [products, setProducts] = useState<productType[]>(myProducts);
    
    const {activeColor}=useMyContext();

    const onSubmit = (values:any, { resetForm }: { resetForm: () => void }) => {
      const newProduct:productType = {
        imgSrc:values.imgSrc || '/images/random.jpg' , //default img or user img .
        title:values.title,
        id: Math.floor(Math.random() * 1000), // generate a random id
        category:values.category,
        count:values.count,
        price:values.price
      };
      setProducts([...products , newProduct]) 
      toast.success('محصول اضافه شد');
      resetForm();
      handleCloseModal();
    };

 
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

        {/* --- Table Strat */}
        <div className='flex items-center justify-center '>
          <Table data={products} headers={['عکس','نام محصول','دسته','تعداد','قیمت']} hide="id" sortByHeader={['قیمت','تعداد']}/>
        </div>
        {/* --- Table End  */}

        {/*---- Modal Start ---- */}
        {showModal && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-gray-50 opacity-95 dark:bg-gray-900 dark:opacity-95 flex justify-center items-center"
          
        >
          <div  className="bg-white  dark:bg-gray-700 p-4 rounded-lg shadow-xl">
              <form className="p-3 " onSubmit={formik.handleSubmit} >
                <FormikInput name="title" formik={formik} type="text" placeholder='نام محصول' />
                <FormikInput name="price" formik={formik} type="number" placeholder='قیمت محصول' />
                <FormikInput name="count" formik={formik} type="number" placeholder='تعداد' />
                <FormikSelect name="category" formik={formik} selectOptions={selectOptions} placeholder="انتخاب دسته" activeColor={activeColor}  />
                <div className='flex items-center justify-center gap-x-2 my-4'>
                  <button  style={{backgroundColor:activeColor}} className="text-white px-4 py-2 rounded-lg disabled:!bg-gray-300 disabled:cursor-not-allowed" type="submit" disabled={!formik.isValid}>ثبت محصول</button>
                  <button onClick={handleCloseModal} style={{borderColor:activeColor , color:activeColor}} className="px-4 py-2  border rounded-lg" type="button" >انصراف</button>
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