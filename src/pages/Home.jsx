import React, { useContext } from 'react'
import Heropage from '../components/heropage'
import MeHome from '../components/MeHome'
import Techskill from '../components/techskill'
import { NavContext } from '../context/Nav-context'
import AboutMe from './AboutMe'
import MyWorks from './MyWorks'
import Contact from './Contact'
import Sidebar from '../components/sidebar'
import Logo from '../components/Logo'
import Footer from '../components/footer'

export default function Home() {

  const { about } = useContext(NavContext)
  const { myWork } = useContext(NavContext)
  const { contact } = useContext(NavContext)
  const { sidebar } = useContext(NavContext)
  return (
    <div className='relative'>
      { sidebar && <Sidebar />}
      <Heropage />
      <Techskill />
      {about && <AboutMe />}
      {myWork && <MyWorks />}
      {contact && <Contact />}
      <MeHome />
      <Footer/>
      <hr />
     
    </div>
  )
}
