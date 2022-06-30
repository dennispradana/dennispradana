import React from 'react'
import Image from 'next/image'
import html from '../public/assets/skill/html.png'
import figma from '../public/assets/skill/figma.png'
import css from '../public/assets/skill/css.png'
import bootstrap from '../public/assets/skill/bootstrap.png'
import javascript from '../public/assets/skill/javascript.png'
import nextjs from '../public/assets/skill/nextjs.png'
import react from '../public/assets/skill/react.png'
import tailwind from '../public/assets/skill/css.png'

const Skill = () => {
  return (
    <div id='Skills' className='w-full lg:h-screen p-2 scroll-mt-[100px] lg:scroll-mt-1'>
        <div className='max-w-[1024px] h-full flex flex-col justify-center mx-auto'>
            <p className='uppercase text-xl tracking-widest text-[#FCA61F] md:text-center' >Skills</p>
            <h2 className='py-4 md:text-center' data-aos="zoom-in">What Can I Do</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

                <div className='p-5 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={figma} width='60px' height='60px' alt='/'/>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <h3>Figma</h3>
                        </div>
                    </div>
                </div>
                <div className='p-5 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={html} width='60px' height='60px' alt='/'/>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <h3>HTML</h3>
                        </div>
                    </div>
                </div><div className='p-5 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={css} width='60px' height='60px' alt='/'/>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <h3>CSS</h3>
                        </div>
                    </div>
                </div><div className='p-5 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={bootstrap} width='60px' height='60px' alt='/'/>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <h3>Bootstrap</h3>
                        </div>
                    </div>
                </div><div className='p-5 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={javascript} width='60px' height='60px' alt='/'/>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <h3>JavaScript</h3>
                        </div>
                    </div>
                </div><div className='p-5 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={nextjs} width='60px' height='60px' alt='/'/>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <h3>NextJs</h3>
                        </div>
                    </div>
                </div><div className='p-5 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={react} width='60px' height='60px' alt='/'/>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <h3>ReactJs</h3>
                        </div>
                    </div>
                </div><div className='p-5 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={tailwind} width='60px' height='60px' alt='/'/>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <h3>Tailwind</h3>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Skill