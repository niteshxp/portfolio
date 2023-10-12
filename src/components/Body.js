import React from 'react'

const Body = () => {
  return (
    <div className='flex justify-around'>
      <div className='text-4xl mt-20 pt-10 ml-20 h-96'>
        <h1 className='m-5'>Hey There! <span> 👋🏻</span></h1>
        <h1 className='m-5'>I'M <strong className='text-orange-500'>NITESH PATEL</strong></h1>
      </div>
      <div>
        <img
          className='h-72 mt-20'
          alt='display-photo'
          src='https://cdn.dribbble.com/users/926537/screenshots/4502924/python-2.gif'
        />
      </div>
    </div>
  )
}

export default Body