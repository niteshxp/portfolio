import React from 'react'
import '../app.css'

const Header = () => {

    return (
        <div className='w-full h-20 py-2 px-4 flex items-center justify-between'>
            <h1 className='text-3xl font-bold text-gray-300 font-[Silkscreen]'>
                <a href='/' className='hover:underline hover:underline-offset-8'>NiteshXP</a>
            </h1>
        </div>
    )
}

export default Header