import React from 'react';
import { Routes , Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import {Cog6ToothIcon} from '@heroicons/react/24/outline';
import Tooltip from '@mui/material/Tooltip';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';



const App=()=>{
 
  const activeColor='#d90f52';

  return ( <div className=''>

              <div className='z-50 fixed'>
                <Tooltip title='تنظیمات' arrow >
                  <button style={{backgroundColor:activeColor}}  className={`fixed bottom-5 left-5  rounded-full w-12 h-12 p-2 border drop-shadow-lg flex items-center justify-center`}>
                    <Cog6ToothIcon className='text-white transition-all hover:rotate-90'/>
                  </button>
                </Tooltip>
              </div>

              <div className='flex'>
                  <Sidebar/>
                  <div className='w-full'>
                      <header className='w-full'>
                          <Navbar/>
                      </header>
                      <Routes>
                          <Route path="/dashboard" element={(<Home/>)} />
                          <Route path="/products" element={(<Home/>)} />
                          <Route path="/customers" element={(<Home/>)} />
                          <Route path="/orders" element={(<Home/>)} />
                          <Route path="/calculater" element={(<Home/>)} />
                          <Route path="/expense" element={(<Home/>)} />
                          <Route path="/login" element={(<Home/>)} />
                     </Routes>
                  </div>        
              </div>
       
                            
          </div> );
  
}



export default App;
