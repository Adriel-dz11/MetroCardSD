import React, { useState } from 'react'
import line1 from '../Assets/Img/Line1.png'
import mapmetro from '../Assets/Img/map.png'

export const Login = () => {

  const [button, setButton] = useState(false)

  const ActivateButton = () =>{
    setButton(!button);
  }

  return (
    <div className='z-20 w-full h-full absolute bg-[#FFFEFC] flex'>
        <div className='w-[100%] h-full relative'>
            <img src={mapmetro} className='w-full h-full'/>
        </div>
        <div className='mt-2 relative w-[100%]'>
          <div className='absolute text-center w-full h-full '>
            <h1 className='text-right mr-10 mr-0 text-xl font-bold '>OPRET</h1>
            <h1 className='mx-auto mt-0 min-w-[300px] text-xl font-medium'>Welcome to OPRET App</h1>
            <div className='mx-auto w-[329px] h-[59px] bg-[#a9a9af] mt-5 rounded-[33px] flex delay-300 transition-all'>
              <button className={button ? 'ml-20 mr-8' : 'mt-2 ml-4  w-[146px] h-[40px] bg-[#181C32] text-white rounded-[33px]'} onClick={ActivateButton}>
                Login
              </button>
              <button className={button ? 'mt-2  w-[146px] h-[40px] bg-[#181C32] text-white rounded-[33px]' : 'ml-10 mr-8'} onClick={ActivateButton}>
                Register
              </button>
           </div>
          {button ? 
          <>
              <form className='mt-6 max-w-[400px] mx-auto space-y-2'>
                <h1 className=''>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
                <h1 className='text-left mt-4 ml-2 mb-2 font-bold '>Nombre</h1>
                <input tpye="text" placeholder='Enter your Name' className='border-2 border[#181C32] rounded-[40px] w-[435px] h-[44px] pl-4'/>
                <h1 className='text-left ml-2 mb-2 font-bold '>Mail</h1>
                <input tpye="text" placeholder='Enter your Email Address' className='border-2 border[#181C32] rounded-[40px] w-[435px] h-[44px] pl-4'/>
                <h1 className='text-left ml-2 mb-2 font-bold '>Cellphone</h1>
                <input tpye="text" placeholder='Enter your Cellphone' className='border-2 border[#181C32] rounded-[40px] w-[435px] h-[44px] pl-4'/>
                <h1 className='text-left ml-2 mb-2 font-bold '>Username</h1>
                <input tpye="text" placeholder='Enter your Username' className='border-2 border[#181C32] rounded-[40px] w-[435px] h-[44px] pl-4'/>
                <h1 className='text-left ml-2 mb-2 font-bold '>Password</h1>
                <input tpye="text" placeholder='Enter your Password' className='border-2 border[#181C32] rounded-[40px] w-[435px] h-[44px] pl-4'/>
                <input type="submit" value='Register' className='w-[146px] h-[40px] bg-[#181C32] text-white rounded-[33px] cursor-pointer'/>
            </form>
            </>
            :
            <form className='mt-20 max-w-[400px] mx-auto space-y-4'>
            <h1 className=''>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
            <h1 className='text-left ml-2 mb-2 font-bold '>Username</h1>
            <input tpye="text" placeholder='Enter your Username' className='border-2 border[#181C32] rounded-[40px] w-[435px] h-[54px] pl-4'/>
            <h1 className='text-left ml-2 mb-2 font-bold '>Password</h1>
            <input tpye="text" placeholder='Enter your Password' className='border-2 border[#181C32] rounded-[40px] w-[435px] h-[54px] pl-4'/>
            <input type="submit" value='Login' className='w-[146px] h-[40px] bg-[#181C32] text-white rounded-[33px] cursor-pointer'/>
        </form>
        }
          </div>
        </div>
    </div>
  )
}
