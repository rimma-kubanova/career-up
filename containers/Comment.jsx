import React from 'react'

const Comment = () => {
  return (
    <div>
       <div className='border border-black w-full bg-white'>
                  <div className='flex flex-col items-center justify-center text-start p-8'>
                    <div className='w-full flex items-center gap-4'>
                      <div className='w-16 h-16 bg-purple-500 rounded-full'>
                      </div>
                      <div className='px-4 font-semibold'>Dave B.</div>
                    </div>
                    <p className='py-4 text-m'>Introducing our hiring manager to the Senior Hire event was a novel strategy for us, but the results were groundbreaking. These were profound discussions about tech stack, team, and current projects - which I was not aware of. The depth of connections established made the hiring process more meaningful.</p>
                  </div>
                </div>
    </div>
  )
}

export default Comment