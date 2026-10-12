import React from 'react'

const Screen = ({display}) => {
  return (
    <div className='h-23 w-full  flex justify-center rounded-2xl'>
      <input type="text" placeholder='0' value = {display} readOnly className='h-full w-full bg-[#0E0F19] rounded-t-2xl border-b border-[#696047] text-right text-white text-6xl p-7 shadow-2xl' />
    </div>
  )
}

export default Screen
