import React from 'react'
import { useState } from 'react'
function Use() {
    const [count,setCount]=useState(0)
    
  return (
    <>
    <div className="mt-[7rem]">

    <p className='text-xl m-5'>total count:{count}</p>
    <button  className='bg-red-500 h-10 w-20 m-5 rounded'onClick={
      ()=>setCount(count+1)
    }>click</button>
    </div>
    </>
  )
}

export default Use