import React from 'react'
import Video from './Video'


const HomeHeroText = () => {
  return (
    <div className='font-[font1] pt-5 text-center'>
        <div className='text-[9.5vw] leading-[8vw] uppercase justify-center flex item-center'>L'étincelle</div>
        <div className='text-[9.5vw] leading-[8vw] uppercase justify-center flex item-center'>qui<div className='h-[7vw] w-[16vw] rounded-full  overflow-hidden'><Video/></div>génère</div>
        <div className='text-[9.5vw] leading-[8vw] uppercase justify-center flex item-center'>la créativité</div>
    </div>
  )
}

export default HomeHeroText