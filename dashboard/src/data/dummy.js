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