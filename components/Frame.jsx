import React from 'react'
import Image from 'next/image'
import main from '@public/photos/approach.png'

const Frame = () => {
  return (
    <div className='bg-[#6CCAFF] w-full p-4 items-center py-16'>
        <div className='m-auto gap-20 px-80 flex'>
            <Image className='w-full m-auto h-auto' src={main}/>
            <div className='col-span-2 items-center justify-center p-10'>
                <h2 className='text-4xl py-2'>The Modern Approach to Senior Hiring</h2>
                <p className='py-2'>We recognize that hiring for senior-level positions is more than evaluating resumes—it's about creating meaningful relationships, promoting team synergy, and guaranteeing cultural congruity. Through a unique blend of tech and human connection, we host online meetups and IRL happy hours, offering candidates the chance to directly connect with hiring managers.</p>
                <button className='px-6 p-2 my-4 bg-white rounded-full font-semibold'>LET'S CONNECT</button>
            </div>
        </div>
    </div>
  )
}

export default Frame