import React, { useContext, useEffect } from 'react'
import { NavContext } from '../context/Nav-context'
import cancelbut from '../assets/icons/x.png'
import profilepic from '../assets/images/meajibola.jpeg'

export default function AboutMe() {
  const {about, setAbout} = useContext(NavContext)
  const { hamburger, setHamburger } = useContext(NavContext)
  const { cancel, setCancel } = useContext(NavContext)

  useEffect(()=>{
    if(about){
      document.body.style.overflow = "hidden";
    }
    else{
      document.body.style.overflow =""
    }

    return ()=>{
      document.body.style.overflow = ""
    };
  },[about])

  return (
    <div className='h-full w-full bg-black/90 absolute top-0 flex'>
      <div className='relative top-20 left-[20%] flex gap-2'>
      <button className='bg-yellow-600 p-1 w-8 h-8 text-black rounded-full sticky' onClick={() => setAbout(!about) || setHamburger(!hamburger) || setCancel(!cancel)}> X</button>
        <div className=' rounded-xl shadow-xl  h-[70vh] w-[60vw] overflow-hidden overflow-y-scroll p-10  bg-white'>
        
        <h1 className='font-bold text-2xl text-center border-b-2 border-b-yellow-600'>About Me</h1>
        <img src={profilepic} alt='Profile Pic' className='rounded-full mx-auto mb-10 w-36 mt-10 ' />
        <p className='pt-5'>

          Hi! I’m a passionate front-end and software developer with a deep interest in creating innovative and efficient solutions to technical challenges. Currently, I am honing my skills in front-end development with JavaScript and React, and I’m also expanding my backend knowledge using Node.js. My work focuses on building user-friendly, responsive websites and web applications that provide seamless experiences.

          I started my journey in web development with a strong foundation in JavaScript, diving into the intricacies of functions, arrays, and objects while building interactive websites with HTML and CSS. Over time, I’ve become proficient in React, focusing on creating reusable components and managing state effectively. I’m particularly interested in leveraging the power of React to craft dynamic, efficient, and scalable user interfaces.

          In addition to front-end development, I’ve recently started exploring the world of blockchain technology. The potential of decentralized applications excites me, and I am eager to integrate this knowledge into my projects. I believe that the future of the web will be shaped by these emerging technologies, and I’m excited to be part of that evolution.

          Problem-solving is at the core of my development process. I thrive when tackling technical challenges and finding creative solutions to make complex tasks simpler. I love exploring new technologies, continuously learning, and applying my knowledge to build real-world applications that can make a positive impact.

          When I’m not coding, I enjoy experimenting with new tech, staying up-to-date with industry trends, and collaborating with others to bring ideas to life.

        </p>
      </div>
      </div>
    </div>
  )
}
