import React from 'react'
import '@styles/globals.css'
import Link from 'next/link'
import Image from 'next/image'
import main from '@public/photos/main.png'

const Main = () => {
  return (
    <div id='home' className='w-full h-screen bg-[url("../public/assets/background.png")] bg-cover bg-no-repeat'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
          <div className='flex-1 '>
            <h1 className='text-7xl font-semibold'>Senior-level hiring is a meetup away</h1>
            <p className='py-4'>Open doors to exciting career opportunities by networking with hiring managers and unleash your professional potential</p>
            <button>Learn More</button>
          </div>
        <Image src={main} alt='main-picture'/>
        </div>
    </div>
  )
}

export default Main