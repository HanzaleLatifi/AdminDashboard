import React, { useState } from 'react';
import { useMyContext } from '../context/ContextProvider';
import {ChevronUpDownIcon} from '@heroicons/react/24/outline'

type PropsType= {
  data: Array<{ [key: string]: any }>;
  headers?: string[];
  hide ?:any  
  sortByHeader?:string[]
 }
  
const Table: React.FC<PropsType> = ({ data , headers , hide ,sortByHeader }) => {

    const {activeColor , theme }=useMyContext();
    const [sortKey, setSortKey] = useState<string>('');  
  
    const handleSort = (key: string) => {
      setSortKey(key);
    };

    const handlerSortHeader=(title:string)=>{
      switch(title){
        case 'قیمت' : setSortKey('price')
        break;
        case 'تعداد':setSortKey('count')
      }
      
    }
  
    const sortedData = sortKey
    ? [...data].sort((a, b) => (a[sortKey] < b[sortKey] ? 1 : -1))
    : data;
  
    return (
      <table style={{borderColor:activeColor}} className="w-full md:w-auto border-spacing-y-2 text-sm md:text-lg shadow-xl rounded-xl ">
       
        <thead >
          <tr  >
            {headers ? headers.map((header) => (
              <th className={` font-normal md:px-8 lg:px-10 px-1 py-2 ${sortByHeader!==undefined && sortByHeader.includes(header) && 'cursor-pointer'}`} 
                onClick={()=>handlerSortHeader(header)} key={header}>{header} 
                <ChevronUpDownIcon className={`inline text-blue-800 w-0 ${sortByHeader!==undefined && sortByHeader.includes(header) && 'w-5'}`}/>
              </th>
              ))   
                // if headers undefind 
                  : 
                  Object.keys(data[0]).map((key) => (
                    <th
                      key={key}
                      onClick={() => handleSort(key)}
                      className="md:px-8 px-1 py-2 cursor-pointer font-normal"
                    >
                      {key}
                    </th>
              ))}
          </tr>
         </thead>
        
        <tbody className='font-light'>
        {sortedData.map((item:any) => (
          <tr key={item.id} className="text-center  ">
            {Object.keys(item).map((key) =>
              key === 'imgSrc' ? (
                <td key={key} className="flex items-end py-2 justify-center">
                  <img className='h-12 w-12 rounded-md' src={item[key]} alt="" />
                </td>
              ) : key!=hide ?  (
                <td key={key}>{item[key]}</td>
              ) :''
            )}
          </tr>
        ))}
        </tbody>
      
      </table>
    );
  };
  
  export default Table;