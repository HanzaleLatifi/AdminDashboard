import { useMyContext, useMyContextActions } from '../context/ContextProvider'
import React from 'react';
import {ArrowDownTrayIcon, EyeIcon} from '@heroicons/react/24/outline'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { PDFDownloadLink } from '@react-pdf/renderer';
import {UserGroupIcon , CurrencyDollarIcon ,ShoppingCartIcon} from '@heroicons/react/24/outline';
import PercentageCard from '../components/PercentageCard';
import CircularChart from '../components/charts/PieCharts';
import AreaChartComponent from '../components/charts/AreaChart';

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
    <div className='p-8'>

      {/* --- welcome banner --- */}
       <section className="bg-white mb-12 md:mb-10 shadow-lg p-4 md:p-8  dark:text-gray-200 dark:bg-secondary-dark-bg h-56 md:h-44 rounded-xl w-full  bg-hero-pattern dark:bg-hero-dark-pattern bg-no-repeat bg-cover bg-center transition-all">
          <span className='text-gray-700  text-2xl  dark:text-white drop-shadow-xl' >
            خوش آمدید
          </span>
          <p className='md:mt-2 mt-4 text-gray-700 dark:text-gray-200'>برای دانلود فایل پی دی اف حاوی اطلاعات خرید و فروش هفته جاری بر روی گزینه دریافت کلیک نمایید . </p>
          <div className='w-full  flex justify-end  px-2 mt-4'>
              <PDFDownloadLink document={<MyDocument/>} fileName="dashboardAdmin.pdf">
                <button className='text-white flex gap-3 rounded-xl px-6 py-2.5 text-lg' style={{backgroundColor:activeColor}}>
                  دریافت
                  <ArrowDownTrayIcon className='h-6 w-6 '/>
                </button>
              </PDFDownloadLink>        
          </div>
       </section>
       {/* --- End wellcome --- */}

       <section className='mb-12 grid md:grid-cols-4 grid-cols-1 gap-4  '>
            <PercentageCard  icon={<CurrencyDollarIcon className='md:h-10 md:w-10 p-1 h-14 w-14' style={{color:activeColor}}/>} percent={4} title={'میزان سود کل'} type="asc"/>
            <PercentageCard  icon={<ShoppingCartIcon className='md:h-10 md:w-10 p-1 h-14 w-14' style={{color:activeColor}}/>} percent={8} title={'کالاهای فروخته شده'} type="asc"/>
            <PercentageCard  icon={<UserGroupIcon className='md:h-10 md:w-10 p-1 h-14 w-14' style={{color:activeColor}}/>} percent={2} title={'مشتری های اضاف شده'} type="desc"/>
            <PercentageCard  icon={<EyeIcon className='md:h-10 md:w-10 p-1 h-14 w-14 ' style={{color:activeColor}}/>} percent={6} title={'بازدید از فروشگاه'} type="asc"/>
       </section>

       {/* --- charts start --- */}
       <section className=' grid grid-cols-1 md:grid-cols-3 md:gap-x-6 gap-y-4 '>
            <div className='shadow-lg h-72 rounded-lg  font-semibold p-4 dark:shadow-purple-100 dark:shadow-md '>
             <h3 className=' pb-2 border-b dark:border-gray-700 dark:text-gray-200'>نمودار سنی</h3>
              <div className='flex h-full items-center justify-between '>
                <div className='w-1/2 h-full flex items-center '>
                    <ul className='font-light text-sm  space-y-3 dark:text-gray-300 '>
                        <li className="flex tracking-tight items-center gap-1.5"><span className='bg-violet-700 w-3 h-3 rounded-full'></span> بالای 40 سال  </li> 
                        <li className="flex tracking-tight items-center gap-1.5"><span className='bg-pink-400 w-3 h-3 rounded-full'></span> بین 20 تا 40  </li> 
                        <li className="flex tracking-tight items-center gap-1.5 "><span className='bg-fuchsia-700 w-3 h-3 rounded-full'></span> زیر 20 سال  </li> 
                    </ul>
                </div>
                <div className='w-1/2 flex items-center justify-center '>
                  <CircularChart data={[{name:'بالای 40 سال' , value:25},{name:'بین 20 تا 40 سال' , value:55},{name:'زیر 20 سال' , value:20}]}/>
                </div>
              </div> 
            </div>

            <div className='shadow-lg col-span-2 h-72 rounded-lg  font-semibold p-4  dark:shadow-purple-100 dark:shadow-md '>
             <h3 className=' pb-2 border-b dark:border-gray-700 dark:text-gray-200'>نمودار فروش</h3>
               <div className='w-full h-52 mt-4 px-4 mx-4'>     
                <AreaChartComponent activeColor={activeColor} data={[{name:'بالای 40 سال' , value:25},{name:'بین 20 تا 40 سال' , value:55},{name:'زیر 20 سال' , value:20},{name:'زیر 10 سال' , value:40}]}/>
              </div> 
            </div>
       </section>
       {/* --- charts End --- */}

    </div>
  )
}

export default Home