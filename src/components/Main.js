import React from 'react'
import '../app.css'

const Main = () => {
    return (
        <div className='mt-64 lg:mt-36 md:mt-36 h-48 font-[Poppins] flex justify-center items-center text-center'>
            <div>
                <h1 className='text-5xl my-2 py-2 px-2 rounded-lg font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'>Nitesh Patel</h1>
                <p className='font-semibold text-xl text-gray-200'>Full Stack Developer <br />having interest in <span className='italic'>AI</span></p>
            </div>
        </div>
    )
}

export default Main