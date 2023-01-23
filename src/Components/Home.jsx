import React,{useState} from 'react'
import Search from './Search'
import User from './User'
import Friends from './Friends'

function Home() {
  const[show,setShow]=useState(false)
  return (
    <>
    <div className="grid w-full h-full grid-cols-[4.5rem_15rem_1fr]">
      <div className='flex bg-[#212325] w-full'>
        <div className=''></div>
      </div>
      <div className='grid bg-[#2e3137] w-full grid-rows-[3rem_1fr_3.25rem]'>
        <div className='shadow-md p-2.5'>
        <button onClick={()=>setShow(true)} type="button" class="text-[#A3A6A6] bg-[#212325] font-medium rounded text-sm h-full w-full dark:bg-[#212325] text-left px-1.5">Find or start a conversation</button>
        </div>
        <Friends/>
        <User/>
      </div>
      <div className='grid bg-[#36383e] w-full grid-rows-[3rem_1fr]'>
        <div className='shadow-md'></div>
        <div className=''></div>
      </div>
    </div>
    <Search onClose={()=>setShow(false)} show={show}/>

    </>
    


  )
}

export default Home