import React, { createContext, useRef, useState } from 'react'

export const NavContext = createContext()

export default function NavProvider({children}) {
    const [about, setAbout] = useState(false)
    const [myWork, setMyWork] = useState(false)
    const [contact, setContact] = useState(false)
    const [sidebar, setSidebar] = useState(false)
    const [hamburger, setHamburger] = useState(true)
    const [cancel, setCancel] = useState(false)
    const sectionRef = useRef(null);

  return (
    <NavContext.Provider value={{ about, setAbout, hamburger, setHamburger, myWork, setMyWork, sectionRef, contact, setContact, sidebar, setSidebar, cancel, setCancel }} >
    {children}
   </NavContext.Provider>
  )
}


