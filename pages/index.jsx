import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Navbar from '../components/navbar'

export default function Home() {

  return (
    <>
      <Navbar />

      <section className='flex justify-between bg-index-pattern bg-cover bg-no-repeat pt-32 pb-28 px-24'>
        <div className='flex-1 max-w-lg'>
          <h1 className='font-mulish font-semibold text-utama-orange text-5xl leading-normal mt-14'>Start your score now with score master</h1>
          <p className='font-poppins text-base font-regular text-utama-orange mt-4 leading-relaxed max-w-sm'>As the best judging platform we provide convenience and service for every event </p>
          <button className='font-mulish font-semibold text-base text-utama-white bg-utama-orange p-5 py-2 mt-6 rounded-md cursor-pointer'>View Event</button>
        </div>
        <div className='flex2 m-auto mt-4'>
          <Image
            src={require("../public/Success.png")}
            alt='Main Illustration'
          />
        </div>
      </section>

      <section className='w-full bg-utama-orange px-24 py-20 text-center text-3xl'>
        <h1 className='font-mulish font-bold text-utama-white'>Pricing</h1>
        <div className='flex mt-8'>
          <div className='text-left w-1/3 mx-4 bg-utama-white p-8'>
            <h2 className='font-mulish text-utama-orange font-bold'>Free</h2>
            <p className='font-mulish text-utama-textGray text-sm'>Starter</p>
            <div>
              <svg width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.4997 2.08325C18.2528 2.08325 22.9163 6.74679 22.9163 12.4999C22.9163 18.253 18.2528 22.9166 12.4997 22.9166C6.74655 22.9166 2.08301 18.253 2.08301 12.4999C2.08301 6.74679 6.74655 2.08325 12.4997 2.08325ZM12.4997 3.64575C10.1514 3.64575 7.89931 4.5786 6.23883 6.23908C4.57836 7.89956 3.64551 10.1516 3.64551 12.4999C3.64551 14.8482 4.57836 17.1003 6.23883 18.7608C7.89931 20.4212 10.1514 21.3541 12.4997 21.3541C14.8479 21.3541 17.1 20.4212 18.7605 18.7608C20.421 17.1003 21.3538 14.8482 21.3538 12.4999C21.3538 10.1516 20.421 7.89956 18.7605 6.23908C17.1 4.5786 14.8479 3.64575 12.4997 3.64575ZM11.1976 13.9999L15.8538 9.34367C15.9934 9.20517 16.1801 9.1244 16.3766 9.11748C16.5731 9.11056 16.765 9.178 16.914 9.30634C17.063 9.43467 17.1581 9.61447 17.1803 9.80984C17.2026 10.0052 17.1504 10.2018 17.0341 10.3603L16.958 10.4478L11.7497 15.6562C11.6174 15.7885 11.442 15.8689 11.2555 15.8829C11.0689 15.8968 10.8835 15.8434 10.733 15.7322L10.6455 15.6562L8.04134 13.052C7.90284 12.9124 7.82208 12.7257 7.81516 12.5292C7.80824 12.3327 7.87567 12.1408 8.00401 11.9918C8.13234 11.8429 8.31214 11.7478 8.50751 11.7255C8.70288 11.7033 8.89946 11.7555 9.05801 11.8718L9.14551 11.9478L11.1976 13.9999L15.8538 9.34367L11.1976 13.9999Z" fill="black" fill-opacity="0.7"/>
              </svg>
            </div>
          </div>
          <div className='text-left w-1/3 mx-4 bg-utama-white p-8'>
            <h2 className='font-mulish text-utama-orange font-bold'>Free</h2>
            <p className='font-mulish text-utama-textGray text-sm'>Starter</p>
          </div>
          <div className='text-left w-1/3 mx-4 bg-utama-white p-8'>
            <h2 className='font-mulish text-utama-orange font-bold'>Free</h2>
            <p className='font-mulish text-utama-textGray text-sm'>Starter</p>
          </div>
        </div>
      </section>
    </>
  )
}