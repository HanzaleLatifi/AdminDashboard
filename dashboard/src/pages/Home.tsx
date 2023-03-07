import { useMyContext, useMyContextActions } from '../context/ContextProvider'
import React from 'react';
import {ArrowDownTrayIcon, EyeIcon} from '@heroicons/react/24/outline'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { PDFDownloadLink } from '@react-pdf/renderer';
import {UserGroupIcon , CurrencyDollarIcon ,ShoppingCartIcon} from '@heroicons/react/24/outline';
import PercentageCard from '../components/PercentageCard';

// style for pdf File
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
})

// create pdf File
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);

const Home = () => {
  const {activeColor}=useMyContext();
  const dispatch=useMyContextActions();


  return (
    <div className='p-5'>
       <section className="bg-white mb-12 md:mb-10 shadow-lg p-4 md:p-8  dark:text-gray-200 dark:bg-secondary-dark-bg h-56 md:h-44 rounded-xl w-full  bg-hero-pattern dark:bg-hero-dark-pattern bg-no-repeat bg-cover bg-center">
          <span className='text-gray-700 text-2xl  dark:text-gray-200 drop-shadow-xl' >
            خوش آمدید
          </span>
          <p className='md:mt-2 mt-4 text-gray-700'>برای دانلود فایل پی دی اف حاوی اطلاعات خرید و فروش هفته جاری بر روی گزینه دریافت کلیک نمایید . </p>
          <div className='w-full  flex justify-end  px-2 mt-4'>
              <PDFDownloadLink document={<MyDocument/>} fileName="dashboardAdmin.pdf">
                <button className='text-white flex gap-3 rounded-xl px-6 py-2.5 text-lg' style={{backgroundColor:activeColor}}>
                  دریافت
                  <ArrowDownTrayIcon className='h-6 w-6 '/>
                </button>
              </PDFDownloadLink>        
          </div>
       </section>
       <section className='grid md:grid-cols-4 grid-cols-1 gap-4  '>
        
            <PercentageCard  icon={<CurrencyDollarIcon className='md:h-10 md:w-10 p-1 h-14 w-14' style={{color:activeColor}}/>} percent={4} title={'میزان سود کل'} type="asc"/>
            <PercentageCard  icon={<ShoppingCartIcon className='md:h-10 md:w-10 p-1 h-14 w-14' style={{color:activeColor}}/>} percent={8} title={'کالاهای فروخته شده'} type="asc"/>
            <PercentageCard  icon={<UserGroupIcon className='md:h-10 md:w-10 p-1 h-14 w-14' style={{color:activeColor}}/>} percent={2} title={'مشتری های اضاف شده'} type="desc"/>
            <PercentageCard  icon={<EyeIcon className='md:h-10 md:w-10 p-1 h-14 w-14 ' style={{color:activeColor}}/>} percent={6} title={'بازدید از فروشگاه'} type="asc"/>
       </section>

    </div>
  )
}

export default Home