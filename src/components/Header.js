import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='flex justify-between shadow-lg pb-5'>
            <h1 className='font-bold text-2xl ml-10 mt-5'><a href='/'> NiteshXp</a></h1>
            <ul className='flex mr-40'>
                <li className='mt-5 italic text-lg mr-5 '><Link to="/">Home</Link></li>
                <li className='mt-5 italic text-lg mr-5'><Link to="/about">About</Link></li>
                <li className='mt-5 italic text-lg mr-5'><Link to="/contact">Contact</Link></li>
                <li className='mt-5 italic text-lg mr-5'><Link to="/project">Project</Link></li>
            </ul>
        </div>
    )
}

export default Header