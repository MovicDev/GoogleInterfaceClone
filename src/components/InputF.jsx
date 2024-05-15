import React from 'react'
import img4 from '../assets/svgexport-4.svg'
import img5 from '../assets/svgexport-5.svg'
import Google from '../App'

const InputF = () => {
  return (
    <>
    <div>
         <div className='md:w-[40%] w-96 rounded-full bg-transparent border border-[#62626b] hover:bg-[#303035] h-12 justify-between mx-auto my-9'>
          <p className='justify-between flex mx-auto p-3'>
          <span><svg class="w-5 h-5 text-gray-800 dark:text-slate-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
       <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
    </svg>
         </span>
            <span><input type="text" title='search' className='bg-transparent lg:w-96 md:w-72 outline-none border-none' autoFocus/></span>
            <span className='flex gap-3'>
            <img src={img4} alt="" />
            <img src={img5} alt="" />
     </span>
          </p>
          </div>
    </div>  
    </>
  )
}

export default InputF
