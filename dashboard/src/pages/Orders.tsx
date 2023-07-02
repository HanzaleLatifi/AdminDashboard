import React,{useState}  from 'react'
import {MagnifyingGlassIcon} from '@heroicons/react/24/outline'
import { useMyContext } from '../context/ContextProvider';
import pinImg from '../data/pin.png';
import { myOrders } from '../data/dummy';
import { toPersianDigits } from '../utils/toPersianDisgits';

type orderType={
  id:string
  orderDate:string
  customer:string
  address :string
  detail:{title:string , count:number}[]
}



const Orders = () => {
  const {activeColor }=useMyContext();
  const [orders, setOrders] = useState<orderType[]>(myOrders);
 

  
  return (
    <div className='w-full min-h-screen p-4 md:p-8'>
      <form className=' flex items-center sm:w-1/3 w-full mx-auto sm:hover:w-1/2  transition-all duration-500 mb-16 mt-4 md:mt-2'>
          <input type='search' className='rounded-lg  bg-gray-100 dark:bg-gray-700 dark:text-white py-3 px-2 outline-none w-5/6 rounded-l-none'/>
          <button type='submit' style={{backgroundColor:activeColor}} className='w-1/6 text-white  flex items-center justify-center p-3 rounded-lg rounded-r-none'>
            <MagnifyingGlassIcon className='w-7 h-6 rotate-90 '/>
          </button>
      </form>

      <div className='grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-20 p-2 '>
        {orders.map((order)=>(
          <div className='shadow-xl rounded-2xl relative   '>
              <img src={pinImg} alt='pin' className=' flex items-center justify-center  absolute bottom-28   left-1/2 -translate-x-1/2 -translate-y-2 drop-shadow-md  '  />    
              <div className='p-3 border-gray-300 border-2 flex flex-col items-center text-gray-100  rounded-2xl space-y-1 rounded-t-none  ' style={{backgroundColor:activeColor}}>
                <p className='border-b py-2 border-gray-700'>شماره سفارش : <span>{toPersianDigits(order.id)}</span> </p>
                <p>تاریخ سفارش : <span> {toPersianDigits(order.orderDate)}</span> </p>
                <p>مشتری : <span>{order.customer}</span> </p>
                <p>آدرس : <span>{order.address}</span> </p>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default Orders