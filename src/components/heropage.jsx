import React from 'react'
import '../App.css'
import myImg from '../assets/images/bgremove.png'
import arrow from '../assets/icons/arrow.svg'

export default function Heropage() {
  return (
    <div className="hero-bg  flex items-center  bg-slate-200"> 
        <div className="list-wrapper text-center items-center">
          <h1 className="text-black text-lg sm:text-xl md:text-2xl mb-10">
            Hi...
          </h1>
          <h1 className="text-black text-lg sm:text-xl md:text-2xl">
            
              I am{"  "}
              <strong className="text-yellow-600 text-[30px] ">Ajibola Korede</strong>
            
          </h1>
          <p className='text-slate-500 font-bold text-sm'>Frond-End / Back-End Web Developer</p>
      
        
          <button className="bg-yellow-600 py-3 mx-auto my-10 px-6 rounded-full shadow-xl hover:scale-110 hover:duration-700 text-white text-sm md:text-base flex items-center ">
            Explore works
            <img src={arrow} alt="Arrow" className="inline ml-2 w-4 h-4" />
          </button>
       
      </div>
      <div className='bg-black pl-64 pt-20 hero-bgimg justify-items-center '>

      <img className='w-[30vw] mx-auto' src={myImg} alt="myprof" />
      </div>
    </div>
  );
}

