import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import {FaLinkedin, FaInstagram, FaGithubSquare, FaTelegramPlane} from 'react-icons/fa'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'
import emailjs from '@emailjs/browser'
import { useForm } from 'react-hook-form';
import {BsFillExclamationTriangleFill} from 'react-icons/bs'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import contact from '../public/assets/contact.png'

const Contact = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const sendEmail = (formData) => {
        toast.info("Message Sent, I will contact you soon");
        emailjs
          .send("service_9k02md4", "template_dennis", formData, "DM03EseNV-w-9874E")
          .then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log(error.text)
            }
          );
        reset();
      };
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
    <div id='Contact' className='w-full lg:h-full scroll-mt-[50px]'>
        <div className='max-w-[1024px] m-auto py-16 px-2 w-full'>
            <p className='uppercase text-xl tracking-widest text-[#FCA61F] md:text-center' data-aos="zoom-in">contact</p>
            <h2 className='py-4 md:text-center' data-aos="zoom-in">Get in Touch</h2>
            <div className='grid lg:grid-cols-5 gap-8'>
        
                <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4' >
                    <div className='lg:p-4 h-full'>
                        <div>
                            <Image className='rounded-xl hover:scale-105 ease-in duration-300' src={contact} alt='/' width={'250'} height={'250'}/>
                        </div>
                        <div>
                            <h3 className='py-2'>Dennis Oldyatha Pradana</h3>
                            <p className='py-4'>I&apos;m available for freelance or full-time positions. Contact me and let&apos;s talk</p>
                        </div>
                        <p className=' uppercase pt-8 text-center'>Connect With Me</p>
                        <div className='flex items-center justify-center gap-10 py-4'>
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

                <div className='w-full h-auto col-span-3 shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                    <div className='p-4'>
                        <form onSubmit={handleSubmit(sendEmail)} >
                            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                <div className='flex flex-col'>
                                    <label className=' uppercase text-sm py-2'> Name*</label>
                                    <input className=' border-2 rounded-lg p-3 flex border-gray-300' type="text" name="FullName" {...register("FullName", {required: true})}  />
                                    {errors.FullName && <p className=" flex items-center text-sm text-red-500 gap-2 p-2">< BsFillExclamationTriangleFill/> Full Name Required</p>}
                                </div>

                                <div className='flex flex-col'>
                                    <label className=' uppercase text-sm py-2'>Phone Number</label>
                                    <input className=' border-2 rounded-lg p-3 flex border-gray-300' type="text" name="NumberPhone" {...register("NumberPhone", {})}/>
                                </div>
                                
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className=' uppercase text-sm py-2'>Email*</label>
                                <input className=' border-2 rounded-lg p-3 flex border-gray-300' type="email" name="Email" {...register("Email", {required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})} />
                                {errors.Email && errors.Email.type =="required" && <p className=" flex items-center text-sm text-red-500 gap-2 p-2">< BsFillExclamationTriangleFill/> Email Required</p>}
                                {errors.Email && errors.Email.type =="pattern" &&  <p className=" flex items-center text-sm text-red-500 gap-2 p-2">< BsFillExclamationTriangleFill/> Invalid Email</p>}
                            </div>

                            <div className='flex flex-col py-2'>
                                <label className=' uppercase text-sm py-2'>Subject*</label>
                                <input className=' border-2 rounded-lg p-3 flex border-gray-300' type="text" name="Subject" {...register("Subject", {required: true})} />
                                {errors.Subject && <p className=" flex items-center text-sm text-red-500 gap-2 p-2">< BsFillExclamationTriangleFill/> Subject Required</p>}
                            </div>

                            <div className='flex flex-col py-2'>
                                <label className=' uppercase text-sm py-2'>Massage*</label>
                                <textarea className='border-2 rounded-lg p-3 flex border-gray-300' rows="8" name="Message" {...register("Message", {required: true})}  ></textarea>
                                {errors.Message && <p className=" flex items-center text-sm text-red-500 gap-2 p-2">< BsFillExclamationTriangleFill/> Message Required</p>}
                            </div>
                            <button type="submit" value="SEND MESSAGE" className='w-full p-4 mt-4 rounded-xl bg-gradient-to-r from-[#0cebeb] via-[#20e3b2] to-[#0cebeb] hover:bg-right-top'>send messange</button>
                            <ToastContainer/>
                            
                        </form>
                    </div>
                </div>
            </div>
            <div className='flex justify-center py-12'>
                <Link href='/'>
                    <div className='rounded-full shadow-lg shadow-[#4f655f90] p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <HiOutlineChevronDoubleUp className='text-[#FCA61F]' size={30}/>
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Contact
