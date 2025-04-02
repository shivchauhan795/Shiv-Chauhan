import React, { useEffect, useState } from 'react'
import { HashLink } from 'react-router-hash-link'
import Menu from '../assets/Menu.jsx'
import Close from '../assets/Close.jsx'

const Navbar = () => {
    const icons = ["☀️", "🌙"]
    const [themeIcon, setthemeIcon] = useState(icons[0])
    const [theme, setTheme] = useState('dark')
    const [isopen, setisopen] = useState(true)
    const [isDropdownOpen, setisDropdownOpen] = useState(false)

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

                <button className="mobile-menu-button">
                    <ul className='flex gap-4'>
                        <li onClick={() => { setisDropdownOpen(!isDropdownOpen) }}>{isDropdownOpen ? <Close /> : <Menu />}</li>
                        {/* menu in mobile view */}
                        {isDropdownOpen &&
                            <div className='absolute right-12 top-16 w-28 h-fit bg-slate-50 rounded text-black flex flex-col z-50'>
                                <HashLink smooth to={"#projects"} className='bg-transparent text-current p-2 cursor-pointer'>Project</HashLink>
                                <HashLink smooth to={"#about"} className='bg-transparent text-current p-2 cursor-pointer'>About</HashLink>
                                <HashLink smooth to={"#contact"} className='bg-transparent text-current p-2 cursor-pointer'>Contact</HashLink>
                            </div>
                        }
                        <li onClick={handleChange} className='cursor-pointer hover:font-bold transition-all'>{themeIcon}</li>
                    </ul>
                </button>

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
