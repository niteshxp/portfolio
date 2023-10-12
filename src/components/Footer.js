import React from 'react'

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear()
    return (
        <div className='flex justify-evenly shadow-lg mt-7 bg-black text-white'>
            <h3>Design and Developed by Nitesh Patel ❤️ </h3>
            <h3>Copyright © {year} NK</h3>
        </div>
    )
}

export default Footer