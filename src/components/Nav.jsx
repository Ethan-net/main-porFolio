import { useContext, useEffect, useState } from 'react';
import Logo from './Logo';
import { NavContext } from '../context/Nav-context';
import '../App.css';
import hambugmenu from '../assets/icons/hamburgmenu.svg'

export default function Nav() {
  const { about, setAbout } = useContext(NavContext);
  const { myWork, setMyWork } = useContext(NavContext);
  const { contact, setContact } = useContext(NavContext);
  const {sidebar, setSidebar} = useContext(NavContext)

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Adjust threshold as needed
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    
    window.addEventListener("scroll", handleScroll);
    
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    const handleHambug = () =>{
      if(window.scrollY > 50){
        setScrolled(true);
      }else{
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleHambug);

    return()=>{
      window.removeEventListener("scroll", handleHambug);
    }

  },[])

  return (
    <div
      id="navbar"
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${scrolled ? 'bg-black shadow-md' : 'bg-transparent'
        }`}
    >
      <img onClick={()=> setSidebar(!sidebar)} src={hambugmenu} alt="" className={` w-16 hamburg ${scrolled ? 'to-black' : 'to-white'}`}/>
      <div className="flex justify-between w-[80%] mx-auto py-4 items-center">

        <Logo />
        <ul className="flex gap-10 items-center text-white text-[10px]">
          <button
            onClick={() => setAbout(!about)}
            className="hover:text-yellow-600"
          >
            About Me
          </button>
          <button
            onClick={() => setMyWork(!myWork)}
            className="hover:text-yellow-600"
          >
            My Work
          </button>
          <button
            onClick={() => setContact(!contact)}
            className="border-[1px] border-yellow-600 py-3 px-7 rounded-full hover:text-black hover:bg-yellow-600 text-white"
          >
            Contact
          </button>
        </ul>
      </div>
    </div>
  );
}
