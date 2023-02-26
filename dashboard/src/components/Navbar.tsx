import React , {useEffect} from 'react'
import {Bars3Icon , BellIcon , ChevronDownIcon} from '@heroicons/react/24/outline'
import defaultProfImg from '../data/prof.jpg';
import { useMyContext , useMyContextActions } from '../context/ContextProvider';


const Navbar = () => {
  const activeColor='#d90f52';
  let userLogin=true ;
  const {activeMenu ,screenSize}=useMyContext();
  const dispatch=useMyContextActions();

  useEffect(() => {
    const handleResize = () => dispatch({type:'setScreenSize',payload:window.innerWidth});
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize !==undefined && screenSize<= 900) {
      dispatch({type:'hideMenu'})
    } else {
      dispatch({type:'activeMenu'})
    }
  }, [screenSize]);
  

  return (
    <nav className='md:px-4 px-2 py-4 md:py-2 flex items-center justify-between border-b sm:mx-4 mx-2'>
      <div className='flex gap-x-3'>
          <button onClick={()=>dispatch({type:'toggleMenu'})}>
              <Bars3Icon className='h-7 w-7'/>
          </button>
          <button className='relative'>
              <span className='w-2 h-2 rounded-full absolute right-4 ' style={{backgroundColor:activeColor}}></span>
              <BellIcon className='h-7 w-7'/>
          </button>
      </div>
      <div className=''>
        {userLogin ===true ? <button className='flex items-center md:gap-x-2 gap-x-1   '>
                              <img className='bg-center h-11 w-11 rounded-full ' src={defaultProfImg} alt='profile'/>
                              <p className=''>حنظله لطیفی</p>
                              <ChevronDownIcon className='h-5 w-6 sm:mr-6 mr-2'/>
                             </button> : ''}
         
      </div>
        
    </nav>
  )
}

export default Navbar;