import Image from 'next/image'
import Link from 'next/link'

import Button from "@material-tailwind/react/Button";

import PacketContainer from '../components/packetContainer';
import Navbar from '../components/navbar'
import FooterMain from '../components/footerMain';

export default function Home() {

  let containerFirst = {
    packetTitle: 'Free',
    packetSub: 'Starter',
    packetDesc: {
      fill: 'black',
      first: 'Only 1 competition',
      second: 'Only 5 committee',
      third: 'Only 5 jury'
    }, 
    price: '0'
  }

  let containerSecond = {
    packetTitle: 'Basic',
    packetSub: 'Better',
    packetDesc: {
      fill: '#FF6800',
      first: 'Up to 100 committee',
      second: 'Up to 100 committee',
      third: 'Up to 50 jury'
    }, 
    price: '100'
  }

  let containerThird = {
    packetTitle: 'Pro',
    packetSub: 'Super',
    packetDesc: {
      fill: '#FF6800',
      first: 'Up to 20 competition',
      second: 'Only 200 committee',
      third: 'Only 100 jury'
    }, 
    price: '300'
  }

  return (
    <>
      <Navbar />

      <section className='flex justify-between bg-index-pattern bg-cover bg-no-repeat pt-32 pb-28 px-24'>
        <div className='flex-1 max-w-lg'>
          <h1 className='font-mulish font-semibold text-utama-orange text-5xl leading-normal mt-14'>Start your score now with score master</h1>
          <p className='font-poppins text-base font-regular text-utama-orange mt-4 leading-relaxed max-w-sm'>As the best judging platform we provide convenience and service for every event </p>
          <Button color="" size="regular" className="font-poppins font-semibold bg-utama-orange mt-6 capitalize" ripple='dark'>
            View Event
          </Button>

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
          <PacketContainer {...containerFirst} />
          <PacketContainer {...containerSecond} />
          <PacketContainer {...containerThird} />
        </div>
      </section>

      <section className='px-24 py-20 mb-14'>
        <h1 className='font-mulish font-bold text-3xl text-center text-utama-orange mb-14'>Why Choose Us?</h1>
        <div className='flex justify-evenly mb-2'>
          <div className='text-center w-52 rounded-lg'>
            <Image
              src={require("../public/index/choose-1.png")}
              alt='Medals Illustration'
            />
            <p className='my-4 font-mulish text-2xl font-bold text-center opacity-70'>First scoring <br />platform</p>
          </div>
          <div className='text-center w-52 rounded-lg'>
            <Image
              src={require("../public/index/choose-2.png")}
              alt='Medals Illustration'
            />
            <p className='my-4 font-mulish text-2xl font-bold text-center opacity-70'>Data security <br />guarantee</p>
          </div>
          <div className='text-center 2-52 rounded-lg'>
            <Image
              src={require("../public/index/choose-3.png")}
              alt='Medals Illustration'
            />
            <p className='my-4 font-mulish text-2xl font-bold text-center opacity-70'>Fast and accurate <br />scoring</p>
          </div>
        </div>
      </section>

      <FooterMain />
    </>
  )
}
