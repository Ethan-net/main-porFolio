import React from 'react'
import myPic from '../assets/images/myPic.svg'

export default function MeHome() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-10 items-center">
        {/* Text Section */}
        <div className="md:w-1/2">
          <h1 className="text-2xl md:text-4xl font-bold leading-snug">
            Let’s get to know <br /> about me better
          </h1>
          <div className="mt-4">
            <p className="text-sm md:text-base text-gray-700">
              I'm a passionate front-end developer with a growing interest in blockchain
              technology, and I’m currently expanding my skill set in backend development using Node.js.
              My background in creating dynamic and user-centered interfaces has provided me with a strong foundation
              to build robust applications, while my recent backend experience is helping me approach projects more holistically.
              I’m excited about the opportunity to contribute my skills and continue learning in a collaborative and innovative environment.
            </p>
            <button className="bg-yellow-600 text-white py-2 px-4 rounded-full mt-5 text-xs md:text-sm">
              Download my CV
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className=" md:w-1/2 flex justify-center">
          <img className="w-[60%] md:w-[80%] lg:w-[50%] rounded-lg" src={myPic} alt="My Profile" />
        </div>
      </div>
    </section>
  );
}

