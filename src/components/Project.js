import React from 'react'
import zwiggyapp from "../assets/zwiggyapp.jpg";
import netflix from "../assets/netflix-ui.jpg";
import linktree from "../assets/linktree.jpg";
import randomImageGenerator from "../assets/randomImageGenerator.jpg";

const Project = () => {
  return (
    <>
      <div className='text-4xl text-center mt-5'>
        <h1>Projects</h1>
        <h4 className='text-sm mt-1'>Click on the app name to open website</h4>
      </div>

      <div className='flex flex-wrap ml-20 mr-20 justify-between mt-16'>

        <div className='mt-2 border border-solid rounded-lg max-h-52 w-72'>
          <img
            className='h-32'
            alt='zwiggy'
            src={zwiggyapp}
          />
          <a href='https://zwiggyapp.netlify.app/' target='_blank'><h1 className='mt-2 text-center italic hover:text-orange-800'> Zwiggy App </h1> </a>
          <p className='mt-2 mb-5 text-center'>A food delivery App</p>
        </div>

        <div className='mt-2 border border-solid rounded-lg max-h-52 w-72'>
          <img
            className='h-32'
            alt='netflix-ui'
            src={netflix}
          />
          <a href='https://netflix-navigation-project.netlify.app/' target='_blank'><h1 className='mt-2 text-center italic hover:text-orange-800'> Netflix UI </h1> </a>
          <p className='mt-2 mb-5 text-center'>Netflix Menu Animation</p>
        </div>

        <div className='mt-2 border border-solid rounded-lg max-h-52 w-72'>
          <img
            className='h-32'
            alt='linktree'
            src={linktree}
          />
          <a href='https://linktree-clone-project.netlify.app/' target='_blank'><h1 className='mt-2 text-center italic hover:text-orange-800'> Linktree clone </h1> </a>
          <p className='mt-2 mb-5 text-center '>Linktree clone </p>
        </div>


        <div className='mt-2 border border-solid rounded-lg max-h-52 w-72'>
          <img
            className='h-32'
            alt='random-image-generator'
            src={randomImageGenerator}
          />
          <a href='https://random-image-feed-project.netlify.app/' target='_blank'><h1 className='mt-2 text-center italic hover:text-orange-800'> Random Image Generator </h1> </a>
          <p className='mt-2 mb-5 text-center '>Random Images are generated on every refresh</p>
        </div>

      </div>
    </>
  )
}

export default Project