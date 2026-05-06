import React from 'react'
import { assets } from '../assets/assets'

const StarRating = () => {
  return (
    <>
        {Array(5).fill('').map((_, rating, index)=>(
            <img src={rating > index ? assets.starIconFilled : assets.starIconHalfFilled} alt="" className='w-4.5 h-4.5'/>
        ))}
    </>
  )
}

export default StarRating