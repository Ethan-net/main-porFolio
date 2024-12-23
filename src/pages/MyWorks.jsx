import React, { useContext, useEffect } from 'react'
import '../App.css'
import { NavContext } from '../context/Nav-context'
import powerhousehome from '../../src/assets/images/project/powerhouse1.png'
import foodshop from '../../src/assets/images/project/foodshop.png'
import powerhouseres from '../../src/assets/images/project/powerhouse3.png'
import powerhouseprod from '../../src/assets/images/project/powerhouseprod.png'
import { Link } from 'react-router-dom'

export default function MyWorks() {
  const { myWork, setMyWork } = useContext(NavContext)

  useEffect(() => {
    if (myWork) {
      document.body.style.overflow = "hidden";
    }
    else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    };
  }, [myWork])
  return (
    <div className='h-full w-full bg-black/50 absolute top-0'>
      <div className='relative top-20 left-[20%] flex gap-2'>
        <button className=' bg-yellow-500 p-1 w-8 h-8 text-black rounded-full sticky ' onClick={() => setMyWork(!myWork)}>X</button>
        <div className=' bg-white h-[70vh] w-[60vw] overflow-hidden overflow-y-scroll p-10 rounded-xl shadow-xl '>

          <div className='gap-10 mywork'>
            <div className='my-10'>
              <img src={powerhousehome} alt="" />
              <h1 className='font-bold'>PowerHouse</h1>
              <p>Power house is web application designed to
                support solar and inverter installation
                companies by providing an online platform for
                potential customers to explore solar products,
                estimates their needs , and book inspection for
                installation</p>
              <Link to='https://powerhouser-admin.onrender.com'>
                <button className='text-white bg-yellow-600 p-2 px-4 mt-3 rounded-3xl'>explore site</button>
              </Link>
            </div>
            <hr />
            <div className='my-10'>
              <img src={foodshop} alt="" />
              <p>A simple food shoping site where user can simply add desired food item to cart and check out\</p>
              <Link to='#'>
                <button className='text-white bg-yellow-600 p-2 px-4 mt-3 rounded-3xl'>explore site</button>
              </Link>
            </div>
            <hr />
            <div className='my-10'>
            <img src={powerhouseres} alt="" />
              <Link to ="#">
                <button className='text-white bg-yellow-600 p-2 px-4 mt-3 rounded-3xl'>explore site</button>
              </Link>
            </div>
            <div className='my-10'>
            <img src={powerhouseprod} alt="" />
            <Link>
                <button className='text-white bg-yellow-600 p-2 px-4 mt-3 rounded-3xl'>explore site</button>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
