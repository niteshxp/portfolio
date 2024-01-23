import React from 'react'

const Buttons = () => {
    return (
        <div className='my-4 py-4 flex flex-col justify-center items-center border'>
            <span className='w-32 my-2 p-2 text-xl font-semibold text-center bg-gradient-to-r from-pink-700 to-purple-700 rounded-full'><a href='https://github.com/niteshxp' target='_blank' >Contact me</a></span>
            <span className='w-32 my-2 p-2 text-xl font-semibold text-center border-2 border-gray-400 rounded-full'>Resume</span>
        </div>
    )
}

export default Buttons