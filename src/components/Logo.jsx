import React from 'react'
import profile from '../assets/images/profile.jpeg'

export default function Logo() {
  return (
    <div className='flex gap-4 items-center'>
    <img className='w-7 rounded-full h-8 animate-bounce' src={profile} alt="" />
    </div>
  )
}
