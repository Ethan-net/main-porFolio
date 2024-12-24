import React from 'react'
import '../App.css'
import myImg from '../assets/images/mesmiling.jpeg'
import linkdn from '../assets/icons/linkdnic.svg'
import instagram from '../assets/icons/instaicon.svg'
import facebook from '../assets/icons/facebookicon.svg'
import twitter from '../assets/icons/twitericon.svg'
import download from '../assets/icons/download.png'
import { Link } from 'react-router-dom';

export default function Heropage() {
  return (
    <div className="hero-bg items-center"> 
      <div className='bg-black/80'>
        <section className='justify-center p-10'>
        <div className="list-wrapper text-center items-center">
          <h1 className="text-white font-bold text-lg sm:text-xl md:text-2xl mb-10">
            Hi...
          </h1>
          <h1 className="text-white text-lg font-bold sm:text-xl md:text-2xl my-5">
            
              I am{"  "}
              <strong className="text-yellow-600 text-[30px] ">Ajibola Korede Ayo</strong>
            
          </h1>
          <p className='text-slate-200 font-bold text-sm'>Front-End/Back-End Web Developer</p>
          <div className='flex gap-4  my-5 justify-center'>
          <Link to= 'https://www.linkedin.com/in/korede-ajibola-2a53981b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' >
          <img className='w-10' src={linkdn} alt="" />
          </Link>
          <Link to = 'https://www.facebook.com/share/k2nrqQQfyHDHrttP/?mibextid=qi2Omg' >
          <img className='w-10' src={facebook} alt="" />
          </Link>
          <Link to= 'https://www.instagram.com/_ethanakorede?igsh=YzljYTk1ODg3Zg=='>
          <img className='w-10' src={instagram} alt="" />
          </Link>
          <Link to= 'https://x.com/Ethannets?t=k3VZLuV0DOd5hYH5LdOVwA&s=09' >
          <img className='w-10' src={twitter} alt="" />
          </Link>
          </div>
      </div>
        <div className="mt-4 justify-center w-[80%] mx-auto">
          <p className="text-sm md:text-base text-slate-300">
            I'm a passionate front-end developer with a growing interest in blockchain
            technology, and I’m currently expanding my skill set in backend development using Node.js.
            My background in creating dynamic and user-centered interfaces has provided me with a strong foundation
            to build robust applications, while my recent backend experience is helping me approach projects more holistically.
          </p> 
          <button className="bg-yellow-600  text-black py-2 px-4 rounded-full mt-5 text-xs md:text-sm mb-5">
            <p>Download my CV </p> <img className='w-5 inline' src={download} alt="" />
          </button>
        </div>
    </section>
      </div>
       
    </div>
  );
}

