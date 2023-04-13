import React from 'react'
import cardMetro from '../../Assets/Img/cardMetro.png'
import useCard from '../../Components/Cards/useCards'

export const Cards = () => {
  const { metroCards, AddNew } = useCard()
  return (
    <div className=''>
      <div className='flex justify-between'>
        <h1 className='text-[26px]'> Metro Cards</h1>
        <button className='w-[166px] h-[40px] bg-[#181C32] mt-4 2xl:ml-100 text-[#FFFFFF] rounded-[25px] ml-[550px]'>Agregar Nueva</button>
      </div>
      <div className='flex flex-wrap'>

        {metroCards.map((card, index) => {
          return <>
            {/* Card */}
            <div className='pr-20 pl-2 mt-10'>

              <div className='w-[350px] h-[220px] rounded-[20px] '>
                <img src={cardMetro} className="absolute" />
                <div className='absolute'>
                  <h1 className='text-white ml-4 mt-4 relative'>{card.Card}</h1>
                  <h1 className='text-white ml-60 mt-40 relative'>Saldo: 7000</h1>
                </div>
              </div>

              <div className='mt-8 space-x-5 ml-5 text-white transition'>
                <button onClick={AddNew} className='w-[146.18px] h-[37px] bg-[#2A6DC3] rounded-[12px] hover:scale-[1.1] transition hover:bg-[#1D4D89]'>Añadir Balance</button>
                <button className='w-[146.18px] h-[37px] bg-[#C32A2A] rounded-[12px] hover:scale-[1.1] transition hover:bg-[#961F1F]'>Eliminar</button>
              </div>
            </div></>
        })}
        











      </div>

    </div>
  )
}
