import React from 'react'

const Buttons = () => {
    return (
        <div className='my-4 py-4 font-[Silkscreen] flex flex-col justify-center items-center'>
            <span className='w-44 my-2 p-2 text-xl font-semibold text-center bg-gradient-to-r from-pink-700 to-purple-700 rounded-full'>
                <a href='https://github.com/niteshxp' target='_blank'>Contact me</a>
            </span>
            <span className='w-44 my-2 p-2 text-xl font-semibold text-center border-2 border-gray-400 rounded-full'>
                <a href='https://drive.google.com/file/d/1Suof5Rd-p9ZmZfQGLX8aMuU0ufJOs3b4/view' target='_blank'>Resume</a>
            </span>
        </div>
    )
}

export default Buttons