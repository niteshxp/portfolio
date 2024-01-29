import React, { useState } from 'react'
import '../app.css'
import menu from '../assets/menu.svg'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <div className='fixed bg-black bg-opacity-90 lg:bg-opacity-0 md:bg-opacity-0 lg:relative md:relative w-full h-20 py-2 px-4 flex items-center justify-between'>
                <h1 className='text-3xl font-bold text-gray-300 font-[Silkscreen]'>
                    <a href='/' className='hover:underline hover:underline-offset-8'>NiteshXP</a>
                </h1>
                <div className='md:hidden lg:hidden'>
                    <img
                        className={`md:hidden lg:hidden ${isOpen ? `hidden` : ``}`}
                        src={menu}
                        alt='menu'
                        onClick={toggleMenu}
                    />

                </div>
            </div>

            {
                isOpen && (
                    <ul className='md:hidden lg:hidden py-16 text-5xl z-50 w-full h-screen fixed bg-black text-end '>
                        <li onClick={toggleMenu} className='p-10'><a href='#about'>About Me</a></li>
                        <li onClick={toggleMenu} className='p-10'><a href='#projects'>Projects</a></li>
                        <li onClick={toggleMenu} className='p-10'><a href='#contact'>Contact</a></li>
                        <li onClick={toggleMenu} className='p-10'><a href='https://dev.to/niteshxp' target='_blank' >Blogs</a></li>
                        <li
                            className={`p-5 my-10 mx-8 text-4xl text-red-200 ${isOpen ? `` : `hidden`}`}
                            onClick={toggleMenu}
                        >
                            X
                        </li>
                    </ul>
                )
            }
        </>
    )
}

export default Header