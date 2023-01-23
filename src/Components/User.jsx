import React from 'react'

function User() {
  return (
    <div className='bg-[#292a2e] flex gap-2 p-2'>
        <div className='rounded-sm hover:bg-[#36383e] w-full cursor-pointer'></div>
        <div className='flex gap-1'>
            <div className='rounded-sm hover:bg-[#36383e] h-full w-11 cursor-pointer'></div>
            <div className='rounded-sm hover:bg-[#36383e] h-full w-11 cursor-pointer'></div>
            <div className='rounded-sm hover:bg-[#36383e] h-full w-11 cursor-pointer'></div>
        </div>

    </div>
    )
}

export default User