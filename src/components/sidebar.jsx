import React, { useContext } from 'react'
import { NavContext } from '../context/Nav-context'
import AboutMe from '../pages/AboutMe'
import '../App.css'

export default function Sidebar() {

    const { sidebar, setSidebar } = useContext(NavContext)
    const { about, setAbout } = useContext(NavContext)
    return (
        <div className='w-[50%] bg-black/90 h-[100vh] none sidebar-div fixed z-10 '>

            <button onClick={() => setSidebar(!sidebar)} className='text-white'>X</button>
            <div className='mt-20'>
                <button onClick={() => setAbout(!about) || setSidebar(!sidebar)} className='text-white'>About Me</button>
            </div>

        </div>
    )
}
