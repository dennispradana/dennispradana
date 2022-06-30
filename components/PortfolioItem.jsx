import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const PortfolioItem = ({title,backgroundImg,build,portfolioUrl}) => {
  return (
    <div className=' relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-b from-[#72EDF2] to-[#5151E5]'>
        <Image className=' rounded-xl group-hover:opacity-10' src={backgroundImg} alt='/'/>
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h3 className='text-2xl text-white tracking-widest text-center'>{title}</h3>
            <p className='pb-4 pt-2 text-white text-center'>{build}</p>
            <Link href={portfolioUrl}>
                <button className='py-3'>More Info</button>
            </Link>
        </div>
    </div>
  )
}

export default PortfolioItem