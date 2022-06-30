import React from 'react'
import {FaMusic, FaDesktop, FaCarAlt, FaDribbble} from 'react-icons/fa'

const About = () => {
  return (
    <div id='About' className='w-full lg:h-screen p-2 flex justify-center scroll-mt-[80px]'>
        <div className='max-w-[1240px] mx-auto px-4 py-[50px]' data-aos="fade-down">
            <div className=' lg:w-[800px] text-justify'>
                <p className='uppercase text-xl tracking-widest text-[#FCA61F] text-center'>About</p>
                <h2 className='py-2 text-center'>Let Me Introduce Myself</h2>
                <p className='py-2'>I grew up in Sidomulyo village, suburban neighborhood of Kediri, where I also finished elementary school. As a kid I would spend my time making toys, reading comics, watching cartoons and playing video games. Since high school, then I continued study in informatics engineering at State University of Surabaya. There I learned about web programming and networking. Basically, I like to learn new things and discuss them together.</p>
            </div>
            <h2 className='mt-5 text-center'>I&apos;m Interested in</h2>
            <div className='lg:w-[800px] grid grid-cols-2 md:grid-cols-4 gap-4 mt-9'>
              <div className='flex flex-col justify-center items-center p-3 hover:scale-125 ease-in duration-500'>
                <FaMusic size={40}/>
                <p>Music</p>
              </div>
              <div className='flex flex-col justify-center items-center p-3 hover:scale-125 ease-in duration-500'>
                <FaDesktop size={40}/>
                <p>Technology</p>
              </div>
              <div className='flex flex-col justify-center items-center p-3 hover:scale-125 ease-in duration-500'>
                <FaCarAlt size={40}/>
                <p>Automotive</p>
              </div>
              <div className='flex flex-col justify-center items-center p-3 hover:scale-125 ease-in duration-500'>
                <FaDribbble size={40}/>
                <p>Sport</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default About