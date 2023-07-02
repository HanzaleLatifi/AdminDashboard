import {HomeIcon , ClipboardDocumentListIcon,ShoppingBagIcon ,UserGroupIcon ,UserCircleIcon, CreditCardIcon,CalculatorIcon,ArrowRightCircleIcon } from '@heroicons/react/24/outline'
import React from 'react';

export const links = [
    {
      title: 'صفحه ها',
      links: [
        {
          name: 'دشبورد',
          icon: <HomeIcon className='h-8 w-8'/>,
          path:'dashboard'
        },
        {
          name: 'محصولات',
          icon: <ClipboardDocumentListIcon className='h-8 w-8' />,
          path:'products'
        },
        {
          name: 'سفارشات',
          icon: <ShoppingBagIcon className='h-8 w-8' />,
          path:'orders'
        },
        {
          name: 'مشتری ها',
          icon: <UserGroupIcon className='h-8 w-8' />,
          path:'customers'
        },
      ],
    },
    {
      title: 'برنامه ها',
      links: [
        {
          name: 'مدیریت حساب',
          icon: <CreditCardIcon className='h-8 w-8' />,
          path:'tracking'
        },
        {
          name: 'ماشین حساب',
          icon: <CalculatorIcon className='h-8 w-8' />,
          path:'calculator'

        },
      ],
    },
    {
      title: 'اکانت',
      links: [
        {
          name: 'ورود',
          icon: <UserCircleIcon className='h-8 w-8' />,
          path:'login'
        },
        {
          name: 'خروج',
          icon: <ArrowRightCircleIcon className='h-8 w-8' />,
          // path:''/
        },
  
      ],
    },
  ];

  export const themeColors=[{title:'blue',code:'#0ea5e9'},
                            {title:'purple',code:'#a855f7'} ,
                            {title:'fuchsia',code:'#d946ef'} ,
                            {title:'pink',code:'#ec4899'} 
                           ]

  ;
  export const myProducts=[ {imgSrc:'/images/sauvage.jpg',title:'ساویج دیور',category:'ادکلن',id:'7800',count:10 , price:798000},
                          {imgSrc:'/images/zedlak.jpg',title:' ضدلک',category:'کرم',id:'3248',count:50 , price:92000},
                          {imgSrc:'/images/coolwater.jpg',title:'کول واتر',category:'ادکلن',id:'8911',count:45 , price:299000},
                          {imgSrc:'/images/shabnam.jpg',title:'شبنم',category:'شامپو',id:'3966',count:80 , price:24000},
                          {imgSrc:'/images/spelendor.jpg',title:'اسپلندور',category:'ادکلن',id:'1397',count:15 , price:600000},
                          {imgSrc:'/images/tomford.jpg',title:'تام فورد',category:'ادکلن',id:'5202',count:9 , price:998000},
                          {imgSrc:'/images/clear.jpg',title:'کلیر',category:'شامپو',id:'3000',count:62, price:130000},   
                        ]

  export const myOrders=[ {id:'7800',orderDate:'1402/02/14' ,customer:'فاطمه شعبانی',address:'فارس-فسا',detail:[{title:'ساویج دیور',count:1},{title:'ضدلک',count:2}]},
                          {id:'3248', orderDate:'1402/05/24',customer:'محمدرضا شیخی',address:'بوشهر-خشت',detail:[{title:'کول واتر',count:2}]},
                          {id:'8911', orderDate:'1401/02/20',customer:'داوود فرجی',address:'هرمزگان-بندرعباس',detail:[{title:'تام فورد',count:1}]},
                          {id:'3966', orderDate:'1402/08/04',customer:'پوریا رضایی',address:'فارس-کازرون',detail:[{title:'شبنم',count:4}]},
                          {id:'1397' , orderDate:'1402/03/14',customer:'فاضل صادقی',address:'فارس-کوار',detail:[{title:'ساویج دیور',count:1}]},
                          {id:'5202',  orderDate:'1400/02/14',customer:'یاسمن طاهری',address:'بوشهر-سیراف',detail:[{title:'ضدلک',count:2}]},
                          {id:'3445', orderDate:'1402/06/11',customer:'حسین حمیدی',address:'فارس-شیراز',detail:[{title:'ضدلک',count:2}]},   
                          {id:'3000', orderDate:'1402/08/30',customer:'مریم صلاحی',address:'فارس-فراشبند',detail:[{title:'ضدلک',count:1}]},   
                        ]


  
  