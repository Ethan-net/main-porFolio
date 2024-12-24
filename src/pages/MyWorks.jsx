import React, { useContext, useEffect } from 'react'
import '../App.css'
import { NavContext } from '../context/Nav-context'
import powerhousehome from '../../src/assets/images/project/powerhouse1.png'
import foodshop from '../../src/assets/images/project/foodshop.png'
import cryptop from '../../src/assets/images/project/cryptop.png'
import electromart from '../../src/assets/images/project/electromart.png'
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
              <p>A simple food shoping site where user can simply add desired food item to cart and check out</p>
              <Link to='#'>
                <button className='text-white bg-yellow-600 p-2 px-4 mt-3 rounded-3xl'>explore site</button>
              </Link>
            </div>
            <hr />
            <div className='my-10'>
            <img src={cryptop} alt="" />
              <h1 className='font-bold'>Cryptop</h1>
              <p>Cryptop is a blockchain-based escrow P2P platform designed to facilitate secure cryptocurrency transactions between users. The platform connects buyers and sellers directly, ensuring transparency and trust through a decentralized system. By leveraging blockchain technology, Cryptop guarantees transaction integrity and prevents fraud, with funds securely held in escrow until both parties fulfill their obligations. Whether you're buying or selling crypto, Cryptop provides a seamless, efficient, and user-friendly experience for peer-to-peer trading.</p>
              <Link to ="#">
                <button className='text-white bg-yellow-600 p-2 px-4 mt-3 rounded-3xl'>explore site</button>
              </Link>
            </div>
            <hr />
            <div className='my-10'>
            <img src={electromart} alt="" />
              <h1 className='font-bold'>Electromart</h1>
              <p>Electromart is a user-friendly online shop designed for easy and secure electronic purchases. Users can browse a wide range of products, add items to their cart, proceed to checkout, and complete payments effortlessly. The platform prioritizes convenience and efficiency, ensuring a seamless shopping experience for all customers. Whether you're buying the latest gadgets or essential electronics, Electromart makes it simple and reliable.</p>
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
