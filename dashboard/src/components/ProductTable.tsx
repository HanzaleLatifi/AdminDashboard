import React, { useState } from 'react';
import { useMyContext } from '../context/ContextProvider';

type PropsType= {
  data: Array<{ [key: string]: any }>;
  headers?: string[];
  hide ?:any  
 }
  
const Table: React.FC<PropsType> = ({ data , headers , hide }) => {

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
      <table style={{borderColor:activeColor}} className="w-full md:w-auto border-spacing-y-2 text-sm md:text-lg shadow-xl">
        <thead >
          <tr  className=''>
            {headers ? headers.map((header) => (
            <th className='cursor-pointer font-normal md:px-8 lg:px-10 px-1 py-2  ' onClick={()=>handlerSortHeader(header)} key={header}>{header}</th>
            )) : Object.keys(data[0]).map((key) => (
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
                <td key={key} className="flex items-end justify-center">
                  <img className='h-14 w-14' src={item[key]} alt="" />
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