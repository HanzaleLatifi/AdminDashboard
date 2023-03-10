import { useMyContext, useMyContextActions } from '../context/ContextProvider';
import React from 'react';
import { themeColors } from '../data/dummy';
import { CheckIcon } from '@heroicons/react/24/outline';


const ThemeSetting = () => {
 const {activeSetting , activeColor ,theme}=useMyContext();
 const dispatch=useMyContextActions();

 const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    dispatch({type:'changeTheme',payload:(event.target as HTMLInputElement).value})
 };

  return (
    <div className={`fixed transition-all border-r-2 dark:border-black duration-300 dark:bg-gray-800 bg-white shadow-2xl left-0 h-screen ${activeSetting ? 'w-72 py-6 px-4' :'w-0' } z-40`}>
        <h3 className='text-lg font-semibold mb-12 text-gray-500 dark:text-gray-200'>تنظیمات</h3>
        <p className='mb-2 dark:text-gray-200'>انتخاب رنگ</p>
        <hr className='mb-4 '/>
        <div className='flex items-center gap-x-4 mb-10'>
            {themeColors.map((color)=>{
                return  <button onClick={()=>dispatch({type:'setActiveColor',payload:color.code})} style={{backgroundColor:color.code}} className={`rounded-full transition-all  flex items-center justify-center  w-12 h-12 hover:shadow-lg focus:shadow-lg  ${color.code=== activeColor ? 'ring-gray-400 dark:ring-gray-700  ring-2 border-2 border-white' : ''}`}> 
                                   <CheckIcon className={` h-7  w-7 text-white ${color.code=== activeColor ? 'block' : 'hidden'}`} />
                         </button>

            })}      
        </div>
        <p className='mb-2 dark:text-gray-200'>انتخاب تم</p>
        <hr className='mb-4 '/>
        <div className="flex flex-row gap-x-6">
            <div className='dark:text-gray-200' >
                <input onChange={handleChange} id='light' checked={theme==='light'} type="radio" name="color" value="light" className="bg-gray-200 rounded-full ml-2 p-2 cursor-pointer" />
                <label htmlFor='light' className='cursor-pointer'>روشن</label>
            </div>
            <div className='dark:text-gray-200'>
                <input onChange={handleChange} id='dark' checked={theme==='dark'} type="radio" name="color" value="dark" className="bg-gray-200 rounded-full ml-2 p-2 cursor-pointer " />
                <label htmlFor='dark' className='cursor-pointer'>تیره</label>
            </div >
            
        </div>
    </div>
  )
}

export default ThemeSetting