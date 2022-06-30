import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/router'
import React, {useState, useEffect} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import {FaLinkedin, FaInstagram, FaGithubSquare, FaTelegramPlane} from 'react-icons/fa'
import logo from '../public/assets/logo.png'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [shadow, setShadow] = useState(false)
  const [linkColor, setLinkColor] = useState('#2B4162')
  const router = useRouter()



  useEffect (()=>{
    if (
        router.asPath === '/Portfolio1' ||
        router.asPath === '/Portfolio2' ||
        router.asPath === '/Portfolio3' ||
        router.asPath === '/Portfolio4'
    ){
        setLinkColor('#F5F0F6');
    } else{
        setLinkColor('#2B4162');
    }

  },[router]);






  const handleNav = () =>{
    setNav(!nav)
  }


  useEffect(()=>{
    const handleShadow = () =>{
        if (window.scrollY >= 100){
            setShadow(true);
        } else{
            setShadow(false);
        }
    };
    window.addEventListener('scroll', handleShadow);
  },[]);


  const linkedin = () => {
    window.open("https://www.linkedin.com/in/dennis-oldyatha-pradana-a42828154/" );
  };
  const instagram = () => {
    window.open("https://www.instagram.com/dennisoldyatha/");
  };
  const github = () => {
    window.open("https://github.com/dennispradana" );
  };
  const telegram = () => {
    window.open("https://t.me/dennisoldyatha" );
  };


  return (
    <div className={shadow ? 'fixed w-full h-20 shadow-xl z-[100] ' :'fixed w-full h-20 z-[100] '}>
        <div className="flex justify-between items-center h-full w-full px-2 2xl:px-16 backdrop-blur-md">
            <Link href='/'>
                <Image src={logo} alt="/"
                width={'140'} 
                height={'40'}/>
            </Link>
            <div>
                <ul style={{color :`${linkColor}`}} className="hidden md:flex items-center">
                    <Link href='/'>
                        <li className="ml-10 text-sm uppercase hover:text-[#FCA61F] hover:border-b">Home</li>
                    </Link>
                    <Link href='/#About'>
                        <li className="ml-10 text-sm uppercase hover:text-[#FCA61F] hover:border-b">About</li>
                    </Link>
                    <Link href='/#Skills'>
                        <li className="ml-10 text-sm uppercase hover:text-[#FCA61F] hover:border-b">Skills</li>
                    </Link>
                    <Link href='/#Portfolio'>
                        <li className="ml-10 text-sm uppercase hover:text-[#FCA61F] hover:border-b">Portfolio</li>
                    </Link>
                    <Link href='/#Contact'>
                       <button className="ml-10">Contact</button>
                    </Link>
                </ul>
                <div style={{color :`${linkColor}`}} onClick={handleNav} className='md:hidden'>
                    <AiOutlineMenu size={25}/>
                </div>
            </div>
        </div>
        <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen backdrop-blur-md' : ''}>
            <div className={nav ? 'fixed left-0 top-0 bg-[#c3c4c8] w-[75%] md:w-[45%] sm:w-[60%] h-screen p-10 ease-in duration-500': 'fixed left-[-150%] top-0 h-screen p-10 ease-in duration-500'}>
                <div>
                    <div className='flex w-full items-center justify-between'>
                        <Link href='/'>
                            <Image src={logo} alt="/" width={'100'} height={'40'} />
                        </Link>
                        <div onClick={handleNav} className=' rounded-full bg-white shadow-lg shadow-[#4f655f90] p-2 cursor-pointer'>
                            <AiOutlineClose/>
                        </div>
                    </div>
                    <div className='border-b border-[#0cebeb]-400 my-4'>
                        <p className='w-[85%] md:w-[90%] py-4'>Let&apos;s make something greate together</p>
                    </div> 
                </div>
                <div className='py-4 flex flex-col'>
                    <ul className=' uppercase'>
                        <Link href='/'>
                            <li onClick={()=> setNav(false)} className="py-3 text-sm]">Home</li>
                        </Link>
                        <Link href='/#About'>
                            <li onClick={()=> setNav(false)} className="py-3 text-sm]">About</li>
                        </Link>
                        <Link href='/#Skills'>
                            <li onClick={()=> setNav(false)} className="py-3 text-sm]">Skills</li>
                        </Link>
                        <Link href='/#Portfolio'>
                            <li onClick={()=> setNav(false)} className="py-3 text-sm]">Portfolio</li>
                        </Link>
                        <Link href='/#Contact'>
                        <button onClick={()=> setNav(false)} className='mt-3'>Contact</button>
                        </Link>
                    </ul>
                    <div className='pt-[90px]'>
                        <p className='uppercase tracking-widest text-[#1f35fc]'>Let&apos;s Connect</p>
                        <div className='flex justify-center items-center my-4 w-full sm:w-[80%] gap-3'>
                            <div onClick={linkedin} className=' rounded-full shadow-lg shadow-[#4f655f90] p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <FaLinkedin/>
                            </div>
                            <div onClick={instagram} className=' rounded-full shadow-lg shadow-[#4f655f90] p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <FaInstagram/>
                            </div>
                            <div onClick={github} className=' rounded-full shadow-lg shadow-[#4f655f90] p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <FaGithubSquare/>
                            </div>
                            <div onClick={telegram} className=' rounded-full shadow-lg shadow-[#4f655f90] p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <FaTelegramPlane/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Navbar