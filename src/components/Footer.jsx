import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className='bg-[#171616] w-full mt-44 text-start p-5'>
        <p className='text-gray-100 text-7sm'>Nigeria</p>
        <p className='lg:flex  grid-flow-col justify-between border -border-t-1 p-5 border-b-0  border-l-0  border-r-0 mt-4'>
          <span className='gap-5 flex'>
            <a href="" className='text-gray-100  text-sm'>About</a>
            <a href="" className='text-gray-100  text-sm'>Advertising</a>
            <a href="" className='text-gray-100  text-sm'>Business</a>
            <a href="" className='text-gray-100  text-sm'>How Search works</a>
          </span>
          <span>
            <a href="" className='text-gray-100  text-sm'>🍃 Our third decade of climate action: join us</a>
          </span>
          <span className='gap-5 flex'>
            <a href="" className='text-gray-100 text-sm'>Privacy</a>
            <a href="" className='text-gray-100 text-sm'>Terms</a>
            <a href="" className='text-gray-100  text-sm'>Settings</a>
          </span>
        </p> 
     </div>
    </div>
  )
}

export default Footer