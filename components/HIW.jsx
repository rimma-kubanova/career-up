import React from 'react'
import Testimonial from '@containers/Testimonial'

const HIW = () => {
  return (
    <div className='bg-white'>
        <div className='py-32'>
            <h2 className='text-center text-4xl font-semibold'>How it works?</h2>
            <div className='grid grid-cols-3 gap-6 p-2 px-32 py-12'>
                <div className='border border-black rounded-2xl w-full'>
                  <div className='flex flex-col items-center justify-center text-center py-10 px-8'>
                    <div className='w-20 h-20 bg-[#51E9BB] rounded-full my-5 flex justify-center items-center text-center'>
                      <h1 className='text-3xl'>1</h1>
                    </div>
                    <span className='p-2 font-semibold text-2xl'>Sign Up for Events</span>
                    <p className='p-2 font-medium text-xl'>Register for our engaging Happy Hour or Online events. Discover a fresh, innovative approach to tech recruitment.</p>
                  </div>
                </div>
                
                <div className='border border-black rounded-2xl w-full'>
                  <div className='flex flex-col items-center justify-center text-center py-10 px-8'>
                    <div className='w-20 h-20 bg-[#FD9AFF] rounded-full my-5 flex justify-center items-center text-center'>
                      <h1 className='text-3xl'>2</h1>
                    </div>
                    <span className='p-2 font-semibold text-2xl'>Add Your Hiring Manager</span>
                    <p className='p-2 font-medium text-xl'>Introduce your hiring manager and specify the open senior roles in your team. Allow us to facilitate the most fruitful connections.</p>
                  </div>
                </div>

                <div className='border border-black rounded-2xl w-full'>
                  <div className='flex flex-col items-center justify-center text-center py-10 px-8'>
                    <div className='w-20 h-20 bg-[#6CCAFF] rounded-full my-5 flex justify-center items-center text-center'>
                      <h1 className='text-3xl'>3</h1>
                    </div>
                    <span className='p-2 font-semibold text-2xl'>Meet Talents at the Event</span>
                    <p className='p-2 font-medium text-xl'>Directly engage with candidates. Select from a pool of vetted senior talents who align with your team's culture and objectives.</p>
                  </div>
                </div>
              </div>
        </div>

    </div>
  )
}

export default HIW