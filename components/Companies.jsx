import React from 'react'
import Image from 'next/image';
import {facebook,google,pinterest,twitch,webflow,youtube } from '@public/assets/imports';

const Companies = () => {
  return (
    <div className='w-full bg-white p-16 items-center flex'>
        <div className='m-auto text-center'>
            <h2 className='text-xl font-semibold p-2'>Trusted by 1,000+ attendees around the world</h2>
            <div className='w-full inline-flex justify-between gap-x-20 py-4'>
                <div>
                    <Image src={facebook} alt='facebook' />
                </div>
                <div>
                    <Image src={google} alt='google' />
                </div>
                <div>
                    <Image src={pinterest} alt='pinterest' />
                </div>
                <div>
                    <Image src={twitch} alt='twitch' />
                </div>
                <div>
                    <Image src={webflow} alt='webflow' />
                </div>
                <div>
                    <Image src={youtube} alt='youtube' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Companies