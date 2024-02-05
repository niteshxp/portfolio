import React from 'react'
import bg2 from '../assets/bg2.mp4';

const Backtheme = () => {
    return (
        <div>
            <video
                className='fixed top-0 left-0 w-screen h-screen object-cover -z-10'
                autoPlay
                loop
                muted>
                <source src={bg2} type='video/mp4' />
            </video>
            <div className='fixed h-full w-full bg-black opacity-70 -z-10'>
            </div>
        </div>
    )
}

export default Backtheme