import React from 'react'
import {Bars3Icon , BellIcon , ChevronDownIcon} from '@heroicons/react/24/outline'
import defaultProfImg from '../data/prof.jpg';


const Navbar = () => {
  const activeColor='#d90f52';
  let userLogin=true ;

  return (
    <nav className='px-4 py-2 flex items-center justify-between border-b mx-4'>
      <div className='flex gap-x-3'>
          <button>
              <Bars3Icon className='h-7 w-7'/>
          </button>
          <button className='relative'>
              <span className='w-2 h-2 rounded-full absolute right-4 ' style={{backgroundColor:activeColor}}></span>
              <BellIcon className='h-7 w-7'/>
          </button>
      </div>
      <div className=''>
        {userLogin ===true ? <button className='flex items-center md:gap-x-2 gap-x-1   '>
                              <img className='bg-center h-11 w-11 rounded-full drop-shadow-md' src={defaultProfImg} alt='profile'/>
                              <p className=''>حنظله لطیفی</p>
                              <ChevronDownIcon className='h-5 w-6 sm:mr-6 mr-'/>
                             </button> : ''}
         
      </div>
        
    </nav>
  )
}

export default Navbar;