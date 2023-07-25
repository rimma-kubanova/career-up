import React from 'react'
import Comment from '@containers/Comment'


const ChooseUs = () => {
  return (
    <div className='bg-[#6CCAFF] py-16'>
       <h2 className='text-center text-4xl font-semibold pb-16'>Why Choose Us?</h2>
      <div className='grid grid-cols-4 gap-4 px-24'>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
    </div>
  )
}

export default ChooseUs