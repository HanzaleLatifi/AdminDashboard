import { useMyContext } from '../context/ContextProvider';
import React,{useState} from 'react';
import { themeColors } from '../data/dummy';
import { CheckIcon } from '@heroicons/react/24/outline';


const ThemeSetting = () => {
 const {activeSetting}=useMyContext();
 const activeColor='#d946ef';
 const [value, setValue] = useState('light');

 const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
 };

  return (
    <div className={`fixed transition-all duration-300 bg-f bg-white shadow-2xl left-0 h-screen ${activeSetting ? 'w-72 py-6 px-4' :'w-0' } z-40`}>
        <h3 className='text-lg font-semibold mb-12 text-gray-500'>تنظیمات</h3>
        <p className='mb-2'>انتخاب رنگ</p>
        <hr className='mb-4 '/>
        <div className='flex items-center gap-x-4 mb-10'>
            {themeColors.map((color)=>{
                return  <button style={{backgroundColor:color.code}} className={`rounded-full  flex items-center justify-center  w-12 h-12  ${color.code=== activeColor ? 'ring-gray-400  ring-2 border-2 border-white' : ''}`}> 
                                   <CheckIcon className={` h-7 w-7 text-white ${color.code=== activeColor ? 'block' : 'hidden'}`} />
                         </button>

            })}      
        </div>
        <p className='mb-2'>انتخاب تم</p>
        <hr className='mb-4 '/>
        <div className="flex flex-row gap-x-6">
            <div >
                <input id='light' type="radio" name="color" value="light" className="bg-gray-200 rounded-full ml-2 p-2 cursor-pointer" />
                <label htmlFor='light' className='cursor-pointer'>روشن</label>
            </div>
            <div>
                <input id='dark' type="radio" name="color" value="dark" className="bg-gray-200 rounded-full ml-2 p-2 cursor-pointer " />
                <label htmlFor='dark' className='cursor-pointer'>تیره</label>
            </div>
            
        </div>
    </div>
  )
}

export default ThemeSetting