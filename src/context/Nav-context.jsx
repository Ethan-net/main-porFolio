import React, { createContext, useState } from 'react'

export const NavContext = createContext()

export default function NavProvider({children}) {
    const [about, setAbout] = useState(false)
    const [myWork, setMyWork] = useState(false)
    const [contact, setContact] = useState(false)
    const [sidebar, setSidebar] = useState(false)
    const [hamburger, setHamburger] = useState(true)
    const [cancel, setCancel] = useState(false)

  return (
    <NavContext.Provider value={{ about, setAbout, hamburger, setHamburger, myWork, setMyWork, contact, setContact, sidebar, setSidebar, cancel, setCancel }} >
    {children}
   </NavContext.Provider>
  )
}


