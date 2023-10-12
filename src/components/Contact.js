import React from 'react'

const Contact = () => {
  return (
    <>
      <div>
        <h1 className='mt-10  text-center text-2xl font-bold'>Contact</h1>
      </div>

      <div className='flex justify-evenly'>
        <div className='mt-20 pb-10'>
          <div className='font-medium ml-10'>
            <h1>Github</h1>
            <h3>Username : niteshxp</h3>
            <a className='hover:text-orange-500' href='https://github.com/niteshxp' target='_blank'> Github Link</a>
          </div>

          <div className='font-medium ml-10 mt-10'>
            <h1>LinkedIn</h1>
            <h3>Username : niteshxp</h3>
            <a className='hover:text-orange-500' href='http://www.linkedin.com/in/niteshxp' target='_blank'> LinkedIn Link</a>
          </div>

          <div className='font-medium ml-10 mt-10'>
            <h1>Gmail</h1>
            <h3>email : niteshpatel8852@gmail.com</h3>
          </div>

        </div>
        <div>
          <img
            className='h-80 mt-10'
            alt='contact'
            src='https://vunetsystems.com/wp-content/uploads/2022/06/Contact-Us-animation.gif' />
        </div>
      </div>
    </>
  )
}

export default Contact