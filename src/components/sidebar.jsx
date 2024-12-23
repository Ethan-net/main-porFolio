import React, { useContext } from 'react'
import { NavContext } from '../context/Nav-context'
import cancelbut from '../assets/icons/x.png'
import aboutmeimg from '../assets/icons/icons8-home.svg'
// import AboutMe from '../pages/AboutMe'
import '../App.css'
import { Link } from 'react-router-dom'

export default function Sidebar() {

    const { sidebar, setSidebar } = useContext(NavContext)
    const { about, setAbout } = useContext(NavContext)
    const { myWork, setMyWork } = useContext(NavContext);
    const { contact, setContact } = useContext(NavContext);
    const { cancel, setCancel } = useContext(NavContext);
    const { hamburger, setHamburger } = useContext(NavContext);
    return (
        <div className='w-[50%] bg-black h-[100vh] none sidebar-div fixed z-10  left-0 pl-8'>
            <div className='flex justify-between w-[90%]'>
            <hr />
            <div className='bg-yellow-600 p-2 w-7 rounded-lg  mt-5  '>
            {cancel && <img onClick={() => setSidebar(!sidebar) || setCancel(!cancel) || setHamburger(!hamburger)} src={cancelbut} alt="" className="w-4" />}
            </div>
            </div>
            <div className='mt-20 flex items-center gap-3'>
                <img src={aboutmeimg} alt="" />
                <Link to = "/">
                    <button onClick={() => setSidebar(!sidebar) || setHamburger(!hamburger) } className='text-white'>Home</button>
                </Link>
            </div>
            <div className='flex mt-20 items-center gap-2'>
                <img className='w-8' src='https://img.icons8.com/ios/50/FFFFFF/about-me.png' alt="" />
                <button onClick={() => setAbout(!about) || setSidebar(!sidebar)} className='text-white'>About Me</button>
            </div>
            <div className='mt-20 flex gap-3'>
                <img className='w-8' src='https://img.icons8.com/ios/50/FFFFFF/open-source.png' alt="" />
                <button onClick={() => setMyWork(!myWork) || setSidebar(!sidebar)} className='text-white'>Projects</button>
            </div>
            <div className='mt-20 flex gap-3'>
                <img className='w-8' src="https://img.icons8.com/fluency-systems-regular/50/FFFFFF/phone-bubble.png" alt="" />
                <button onClick={() => setContact(!contact) || setSidebar(!sidebar)} className='text-white'>contact me</button>
            </div>

        </div>
    )
}
