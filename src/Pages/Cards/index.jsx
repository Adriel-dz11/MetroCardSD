import React from 'react'
import cardMetro from '../../Assets/Img/cardMetro.png'

export const Cards = () => {
  return (
    <div className=''>
      <h1 className='text-[26px]'> Metro Cards</h1>
      <div className='flex flex-wrap'>

        {/* Card */}
        <div className='pr-20 pl-2 mt-10'>

          <div className='w-[350px] h-[220px] rounded-[20px] '>
            <img src={cardMetro} className="absolute" />
            <div className='absolute'>
              <h1 className='text-white ml-4 mt-4 relative'>Card ID: 111111112332</h1>
              <h1 className='text-white ml-60 mt-40 relative'>Saldo: 7000</h1>
            </div>
          </div>
          
          <div className='mt-8 space-x-5 ml-5 text-white transition'>
            <button className='w-[146.18px] h-[37px] bg-[#2A6DC3] rounded-[12px] hover:scale-[1.1] transition hover:bg-[#1D4D89]'>Editar</button>
            <button className='w-[146.18px] h-[37px] bg-[#C32A2A] rounded-[12px] hover:scale-[1.1] transition hover:bg-[#961F1F]'>Eliminar</button>
          </div>
        </div>

        

        

        

        



      </div>

    </div>
  )
}
