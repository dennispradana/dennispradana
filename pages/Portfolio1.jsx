import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {RiRadioButtonFill} from 'react-icons/ri'
import portfolio1Img from '../public/assets/portfolio/portfolio1.png'

const Portfolio1 = () => {
  return (
    <div className='w-full h-screen lg:h-full'>
        <div className='w-full h-[40vh] lg:h-[50vh] relative'>
            <div className=' absolute top-0 left-0 w-full h-[40vh] lg:h-[50vh] bg-gray-900/80 z-10' />
            <Image className=' absolute z-1' layout='fill' objectFit='cover' src={portfolio1Img} alt='/'  />
            <div className=' absolute top-[70%] max-w-[1024px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2>QRCode Scanner</h2>
                <h3>HTML/JavaScripct</h3>
            </div>
        </div>
        <div className='max-w-[1024px] mx-auto grid md:grid-cols-5 gap-8 px-3 pt-8'>
            <div className=' col-span-3 text-justify'>
                <p className='text-[#FCA61F]'>Portfolio</p>
                <h2>Overview</h2>
                <p>
                I made this project for functional needs. made only with javascript and html but has a very fast load speed which is very helpful for urgent needs even without an internet network.
                </p>
            </div>
            <div className='col-span-4 md:col-span-2 shadow-xl shadow-gray-300 rounded-xl p-4'>
                <div className='p-2'>
                    <p className='text-bold text-center pb-2'>Technologi</p>
                    <div className='grid grid-cols-3 md:grid-cols-1'>
                     <p className='flex items-center text-gray-600 py-2 gap-4'><RiRadioButtonFill/> HTML 5</p>
                     <p className='flex items-center text-gray-600 py-2 gap-4'><RiRadioButtonFill/> JavaScript</p>
                    </div>
                </div>
            </div>
            <div className='my-4'>
                    <Link href='/#Portfolio'>
                        <p className='underline cursor-pointer'>Back</p>
                    </Link>
            </div>
        </div>
    </div>
  )
}

export default Portfolio1