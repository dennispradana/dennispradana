import Image from 'next/image';
import React from 'react';
import Link from 'next/link';



const Intro = () => {
    const linkedin = () => {
        window.open("https://www.linkedin.com/in/dennis-oldyatha-pradana-a42828154/" );
      };
      const instagram = () => {
        window.open("https://www.instagram.com/dennisoldyatha/");
      };
      const github = () => {
        window.open("https://github.com/dennispradana" );
      };
  return (
    
    <div id='Home' className='w-full h-full text-left md:text-center pt-[100px] lg:pt-20'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2'>
            <div className='grid grid-cols-1 lg:grid-cols-2 justify-center items-center'>
                <div className="i-left" data-aos="fade-right">
                    <div className="p-6">
                        <h2>Hallo, I am</h2>
                        <h1 className="py-2"> Dennis Oldyatha Pradana</h1>
                        <h3>I&apos;m a frond-end developer, let&apos;s work together and do something useful</h3>
                    </div>
                    <Link href='/#Contact'>
                        <button className='mt-3 rounded-xl py-2 px-5 mb-8 cursor-pointer'>Hire Me</button>
                    </Link>
                    <div className="flex md:justify-center gap-8 items-center cursor-pointer">
                        <div onClick={github} className=' rounded-full p-3 shadow-black hover:shadow-xl hover:scale-105 ease-in duration-300'>
                            <Image src="/../public/assets/sosialMedia/github.png" alt="/" width='50' height='50' />
                        </div>
                        <div onClick={instagram} className=' rounded-full p-3 shadow-black hover:shadow-xl  hover:scale-105 ease-in duration-300'>
                            <Image src="/../public/assets/sosialMedia/instagram.png" alt="/" width='50' height='50' />
                        </div>
                        <div onClick={linkedin} className=' rounded-full p-3 shadow-black hover:shadow-xl  hover:scale-105 ease-in duration-300'>
                            <Image src="/../public/assets/sosialMedia/linkedin.png" alt="/" width='50' height='50' />
                        </div>
                        
                    </div>
                </div>
                <div className='i-right text-center' data-aos="fade-left">
                    <Image src="/../public/assets/dennis.png" alt="/" width='500' height='500' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Intro