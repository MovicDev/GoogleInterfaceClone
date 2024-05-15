import React from 'react'
import imgVoice from '../assets/userImg.jpg'
import img1 from '../assets/svgexport-1.svg'
const NavBar = () => {
  return (
    <div>
        <div>
        <p className='flex float-right py-3 gap-5 me-3 text-sm'>
          <span>Gmail</span>
          <span>Images</span>
          <span><img src={img1} alt="" /></span>
          <span><img src={imgVoice} alt="" className='w-10 h-10 rounded-full pb-1'/></span>
        </p>
        </div>
    </div>
  )
}

export default NavBar