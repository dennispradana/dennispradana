import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import portfolio1Img from '../public/assets/portfolio/portfolio1.png'
import portfolio2Img from '../public/assets/portfolio/portfolio2.png'
import portfolio3Img from '../public/assets/portfolio/portfolio3.png'
import portfolio4Img from '../public/assets/portfolio/portfolio4.png'
import PortfolioItem from './PortfolioItem'

const Portfolio = () => {
  return (
    <div id='Portfolio' className='w-full scroll-mt-[50px]'>
        <div className='max-w-[1024px] mx-auto py-16 px-2' data-aos="zoom-in-up">
            <p className='uppercase text-xl tracking-widest text-[#FCA61F] md:text-center' data-aos="zoom-in-up">Portfolio</p>
            <h2 className='py-4 md:text-center' data-aos="zoom-in-up">What I&apos;ve Build</h2>
            <div className='grid md:grid-cols-2 gap-8'>
                <PortfolioItem title='Portfolio 1' backgroundImg={portfolio1Img} build='QRCode Builder' portfolioUrl='/Portfolio1'  />
                <PortfolioItem title='Portfolio 2' backgroundImg={portfolio2Img} build='Personal Website' portfolioUrl='/Portfolio2'  />
                <PortfolioItem title='Portfolio 3' backgroundImg={portfolio3Img} build='Company Profile' portfolioUrl='/Portfolio3'  />
                <PortfolioItem title='Portfolio 4' backgroundImg={portfolio4Img} build='E-Commers' portfolioUrl='/Portfolio4' />
            </div>
        </div>
    </div>
  )
}

export default Portfolio