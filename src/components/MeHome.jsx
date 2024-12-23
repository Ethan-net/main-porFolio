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

