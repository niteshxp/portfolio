import React from 'react'
import arrow from '../assets/arrow.svg'

const ArrowAnimation = () => {
    return (
        <div>
            <img
                className='mx-auto w-8 h-8 animate-bounce'
                src={arrow}
                alt='arrow' />
        </div>
    )
}

export default ArrowAnimation