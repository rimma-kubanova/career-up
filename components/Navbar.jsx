'use client'

import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import logo from '@public/photos/logo.png'

const Navbar = () => {

  const [ nav,setNav ] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  }



  return (
    <div className='fixed w-full h-24 shadow-xl z-[100] bg-white/10 backdrop-blur-lg'>
        <div className='flex justify-between items-center w-full h-full px-8 2xl:px-16'>
          <Link href='/#home'>
          <Image 
          src={logo}
            alt='logo'
            width={50}
            height={50}          
          />
          </Link>
          <div>
            <ul className='hidden md:flex'>
            <Link href="">
                <li className='ml-10 text-lg font-medium uppercase hover:border-b'>For Candidates</li>
              </Link>
              <Link href="">
                <li className='ml-10 text-lg font-medium uppercase hover:border-b'>For Employers</li>
              </Link>
              <Link href="">
                <li className='ml-10 text-lg font-medium uppercase hover:border-b'>Login</li>
              </Link>
              <Link href="">
                <li className='ml-10 text-lg font-medium uppercase hover:border-b'>Sign Up</li>
              </Link>
            </ul>

            <div onClick={handleNav} className='md:hidden'>
              <AiOutlineMenu  size={25}/>
            </div>
          </div>
        </div>
    
    <div className={ nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
      <div className={ nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:[45%] h-screen bg-[#ecf0f3] p-8 ease-in duration-300' : 
    'fixed left-[-100%] top-0 p-8 ease-in duration-300' }>
        <div>
          <div className='flex w-full items-center justify-between'>
            <Image  src={logo}
            alt='logo' width={60} height={60}/>
            <h1 className='font-bold text-xl'>CareerUp</h1>
            <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'><AiOutlineClose /></div>
          </div>
          <div className='border-b border-gray-300 my-4'>
            <p className='w-[85%] md:w-[90%] py-4'>Let's build something legendary together!</p>
          </div>
        </div>


        <div className='py-4 flex flex-col'>
          <ul className='uppercase'>
              <Link href="">
                <li onClick ={()=> setNav(false)} className='py-4 text-sm'>Login</li>
              </Link>
              <Link href="">
                <li onClick ={()=> setNav(false)} className='py-4 text-sm'>Sign up</li>
              </Link>
          </ul>

        </div>
      </div>
    </div>

    </div>
  )
}

export default Navbar