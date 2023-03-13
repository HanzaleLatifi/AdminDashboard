import React  from 'react';
import {links} from '../data/dummy';
import {NavLink} from 'react-router-dom';
import { useMyContext, useMyContextActions } from '../context/ContextProvider';
import {XMarkIcon} from '@heroicons/react/24/outline'


const Sidebar = () => {

  const {activeMenu , screenSize , activeColor}=useMyContext();
  const dispatch=useMyContextActions();

  const handleCloseSideBar=()=>{
    if (activeMenu !== undefined  && screenSize!==undefined && screenSize<900 ) {
      dispatch({type:'hideMenu'});
      
    }
  }


  
  const activeLink = `flex  rounded-md dark:text-white items-center gap-2 px-4 py-4 md:py-2  text-md mx-2 my-1 bg-gradient-to-l from-gray-100 to-white dark:bg-gradient-to-l dark:from-gray-800 dark:to-gray-700`;
  const normalLink = `flex items-center gap-2 px-4 py-4 md:py-2  text-md text-gray-400 dark:text-gray-200  mx-2 my-1`;
 
  return (
        <>
              {activeMenu ? <div className='md:h-auto w-3/4 sm:w-72 fixed sm:relative h-screen bg-white dark:bg-gray-700 dark:shadow-gray-400 dark:border-none shadow-md border-l  transition-all duration-300  z-40'>
                                <div className=" md:overflow-hidden h-screen overflow-auto md:hover:overflow-auto pb-10 "  >
                                    <div className="mt-4 relative  ">
                                        {links.map((item) => (
                                          <div className='p-2' key={item.title}>
                                            <p className="text-gray-600  dark:text-gray-400 m-3 mt-3 uppercase">
                                              {item.title}
                                            </p>
                                            {item.links.map((link:any) => (
                                              <NavLink
                                                to={`/${link.path}`}
                                                key={link.name}
                                                onClick={handleCloseSideBar}
                                                style={({ isActive }) => ({
                                                  borderRight: isActive ? `4px solid ${activeColor}` : '',
                                                })}
                                                className={({ isActive }) => (isActive ? activeLink : normalLink)}
                                              >
                                                {link.icon}
                                                <span className="capitalize ">{link.name}</span>
                                              </NavLink>
                                            ))}
                                          </div>
                                        ))}
                                        <span onClick={handleCloseSideBar} className='absolute  text-red-600 sm:hidden left-4 top-4'><XMarkIcon className='h-8 w-8'/></span>
                                    </div>
                                 </div>
                             </div>  : <div className='w-0 duration-300  transition-all'></div>
                 }
        </>
  )
}

export default Sidebar