import React  from 'react';
import {links} from '../data/dummy';
import {NavLink} from 'react-router-dom';
import { useMyContext, useMyContextActions } from '../context/ContextProvider';
import {XMarkIcon} from '@heroicons/react/24/outline'


const Sidebar = () => {

  const {activeMenu}=useMyContext();
  const dispatch=useMyContextActions();

  const handleCloseSideBar=()=>{
    if (activeMenu !== undefined ) {
      dispatch({type:'hideMenu'});
      
    }
  }


  
  const activeColor='#d90f52'
  const activeLink = `flex items-center gap-2 px-4 py-4 md:py-1 text-[${activeColor}] text-md mx-2 my-1`;
  const normalLink = `flex items-center gap-2 px-4 py-4 md:py-2  text-md text-gray-400 dark:text-gray-200  mx-2 my-1`;
 
  return (
        <>
                {activeMenu ? <div className="w-3/4 transition-all duration-300  z-50 sm:w-72 fixed sm:relative h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 bg-white shadow-lg border-l"  >
                       <div className="mt-4 relative  ">
                          {links.map((item) => (
                            <div className='p-2' key={item.title}>
                              <p className="text-gray-600 dark:text-gray-400 m-3 mt-3 uppercase">
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
                          <span onClick={handleCloseSideBar} className='absolute text-red-600 sm:hidden left-4 top-4'><XMarkIcon className='h-8 w-8'/></span>
                      </div>
                    </div> : <div className='w-0 duration-300  transition-all'></div>
                 }
        </>
  )
}

export default Sidebar