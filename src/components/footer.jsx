import React, { useRef } from 'react'
import email from '../assets/icons/gmail.svg'
import whatsapp from '../assets/icons/whatsapp.svg'
import call from '../assets/icons/call.png'
import Logo from './Logo'
import { NavContext } from '../context/Nav-context'
import { Link } from 'react-router-dom'

export default function Footer() {
    const sectionRef = useRef(NavContext)
    return (
        <div ref={sectionRef} className=' bg-black '>
            <section className=' ml-10 flex justify-center ' >
                <div className='flex flex-wrap gap-16 py-10 justify-center'>
                    <Link to='https://wa.me/2348078304832'>
                        <div className='flex gap-2 items-center'>
                            <img className='w-6' src={whatsapp} alt="" />
                            <p className='text-white block'>Whats app</p>
                        </div>
                    </Link>
                    <hr />
                    <Link to = 'tell:+2348078304832'>
                    <div className='flex gap-2 items-center'>
                        <img className='w-6' src={call} alt="" />
                        <p className='text-white'>Call me</p>
                    </div>
                    </Link>
                    <hr />
                    <Link to='mailto:koredeajibola@gmail.com?subject=contacting you for web service'>
                        <div className='flex gap-2 items-center'>
                            <img className='w-6' src={email} alt="" />
                            <p className='text-white'>Email</p>
                        </div>
                    </Link>
                </div>
            </section>
        </div>
    )
}
