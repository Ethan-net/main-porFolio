import { useContext, useEffect, useRef, useState } from 'react';
import Logo from './Logo';
import { NavContext } from '../context/Nav-context';
import '../App.css';
import hambugmenu from '../assets/icons/hamburgwhite.svg'
import { Link } from 'react-router-dom';


export default function Nav() {
  const { about, setAbout } = useContext(NavContext);
  const { myWork, setMyWork } = useContext(NavContext);
  const {sidebar, setSidebar} = useContext(NavContext)
  const { hamburger, setHamburger } = useContext(NavContext)
  const { cancel, setCancel } = useContext(NavContext)
  const sectionRef = useRef(NavContext)

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

  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({
      behavior: "smooth", // Smooth scrolling
      block: "start",     // Align to the top of the viewport
    });
  };

  return (
    <div
      id="navbar"
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${scrolled ? 'bg-black shadow-md' : 'bg-transparent'
        }`}
    >
     

      
      {hamburger && <img onClick={() => setSidebar(!sidebar) || setHamburger(!hamburger) || setCancel(!cancel)} src={hambugmenu} alt="" className= "w-7 hamburg ml-3 mt-3" />}

    
      
      <div className="flex justify-between w-[80%] mx-auto py-4 items-center">

        <Logo />
        <ul className="flex gap-10 items-center text-[10px]">
          <button
            onClick={() => setAbout(!about) || setCancel(!cancel) }
            className="hover:text-yellow-600  text-slate-100 "
          >
            About Me
          </button>
          <button
            onClick={() => setMyWork(!myWork) || setCancel(!cancel) }
            className="hover:text-yellow-600"
          >
            Projects
          </button>
        
          <button onClick={scrollToSection}
            className="border-[1px] border-yellow-600 py-3 px-7 rounded-full hover:text-black hover:bg-yellow-600 text-white"
          >Contact</button>
        </ul>
      </div>  
    </div>
  );
}
