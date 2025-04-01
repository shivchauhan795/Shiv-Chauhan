import React, { useEffect, useState } from 'react'
import { HashLink } from 'react-router-hash-link'

const Navbar = () => {
    const icons = ["☀️", "🌙"]
    const [themeIcon, setthemeIcon] = useState(icons[0])
    const [theme, setTheme] = useState('dark')
    const [isopen, setisopen] = useState(true)

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme])

    const handleChange = () => {
        changeTheme()
        changeIcon()
    }
    const changeTheme = () => {
        setTheme((prevTheme) => (
            prevTheme === 'light' ? 'dark' : 'light'
        ))
    }
    const changeIcon = () => {
        setthemeIcon((icon) => (
            icon === icons[0] ? icons[1] : icons[0]
        ))
    }

    return (
        <div>
            <nav className='navbar flex justify-between px-24 py-7 items-center w-full fixed'>
                <div className="logo">
                    <HashLink smooth to={"#home"}><span className='font-bold text-2xl uppercase cursor-pointer'>Shiv Chauhan</span></HashLink>
                </div>

                {/* Hamburger Button */}
                <button className="mobile-menu-button md:hidden" onClick={() => setisopen(!isopen)}>
                    <span className="text-3xl">&#9776;</span>
                </button>

                {/* Mobile menu */}
                <ul className={`absolute top-16 left-0 w-full flex flex-col items-center gap-6 py-4 shadow-md transition-all duration-300 ${isopen ? 'block' : 'hidden'} md:hidden`}>
                    <HashLink smooth to={"#projects"} onClick={() => setisopen(false)}><li className='cursor-pointer hover:font-bold transition-all'>Projects</li></HashLink>
                    <HashLink smooth to={"#about"} onClick={() => setisopen(false)}><li className='cursor-pointer hover:font-bold transition-all'>About</li></HashLink>
                    <HashLink smooth to={"#contact"} onClick={() => setisopen(false)}><li className='cursor-pointer hover:font-bold transition-all'>Contact</li></HashLink>
                    <li onClick={handleChange} className='cursor-pointer hover:font-bold transition-all'>{themeIcon}</li>
                </ul>
                
                {/* Desktop menu */}
                <ul className={`flex gap-8 menu ${isopen ? 'block' : 'hidden'} `}>
                    <HashLink smooth to={"#projects"}><li className='cursor-pointer hover:font-bold transition-all'>Project</li></HashLink>
                    <HashLink smooth to={"#about"}>
                        <li className='cursor-pointer hover:font-bold transition-all'>About</li>
                    </HashLink>
                    <HashLink smooth to={"#contact"}>
                        <li className='cursor-pointer hover:font-bold transition-all'>Contact</li>
                    </HashLink>
                    <li onClick={handleChange} className='cursor-pointer hover:font-bold transition-all'>{themeIcon}</li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
