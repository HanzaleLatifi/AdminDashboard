import React from 'react';
import { Routes , Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import {Cog6ToothIcon} from '@heroicons/react/24/outline';
import Tooltip from '@mui/material/Tooltip';



const App=()=>{
  const activeMenu=true ;

  return ( <div className=''>
              <div className='z-50 fixed'>
                <Tooltip title='تنظیمات' arrow >
                  <button  className='fixed bottom-5 left-5 bg-violet-600 rounded-full w-12 h-12 p-2 border drop-shadow-lg flex items-center justify-center'>
                    <Cog6ToothIcon className='text-white transition-all hover:rotate-90'/>
                  </button>
                </Tooltip>
              </div>
              <div className='flex'>
                {activeMenu ==true ? <div className="w-3/4 sm:w-72 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10" style={{backgroundColor:'rgb(124 58 237)'}} >
                      hi
                      </div> : <div className='w-0'></div>
                 }

                      <Routes>
                      <Route path="/" element={(<Home/>)} />
                      <Route path="/products" element={(<Home/>)} />
                      <Route path="/customers" element={(<Home/>)} />
                      <Route path="/orders" element={(<Home/>)} />
                      <Route path="/calculater" element={(<Home/>)} />
                      <Route path="/expense" element={(<Home/>)} />
                      <Route path="/login" element={(<Home/>)} />
                      </Routes>
              </div>

              
           
          </div> );
  
}



export default App;
