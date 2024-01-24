import React from 'react'
import netflix from '../assets/netflixai.png'
import zwiggy from '../assets/zwiggyapp.jpg'
import newsdekho from '../assets/newsdekho.png'
import wetube from '../assets/wetube.png'

const Projects = () => {
    return (
        <div className='my-10 py-4'>
            <div className='text-center'>
                <h1 className='text-2xl font-semibold'>My Work</h1>
                <p className=' text-lg font-medium my-2'>Here are some of my proof of work.</p>
            </div>

            <div className='lg:flex lg:flex-wrap lg:justify-around'>
                <div className='lg:w-2/5 mx-4 my-10 rounded-3xl bg-purple-700 bg-opacity-50 text-white'>
                    <h1 className='font-semibold text-2xl text-center pt-4'>
                        Netflix.ai
                    </h1>
                    <img
                        className='h-32 my-4 mx-auto rounded-lg'
                        src={netflix}
                        alt='netflixai'
                    />
                    <p className='text-center text-lg font-medium mx-5'>
                        Netflix.ai is a full-stack web-app with integrated ChatGPT support.
                    </p>
                    <div className='flex justify-evenly py-4 font-medium italic text-lg'>
                        <h1 className='hover:text-gray-400 hover:underline'>
                            <a href='https://netflixai.netlify.app/' target='_blank'>Live</a>
                        </h1>
                        <h1 className='hover:text-gray-400 hover:underline'>
                            <a href='https://github.com/niteshxp/NetflixGPT' target='_blank'>Github Link</a>
                        </h1>
                    </div>
                </div>

                <div className='lg:w-2/5 mx-4 my-10 rounded-3xl bg-purple-700 bg-opacity-50 text-white'>
                    <h1 className='font-semibold text-2xl text-center pt-4'>Zwiggy</h1>
                    <img
                        className='h-32 my-4 mx-auto rounded-lg'
                        src={zwiggy}
                        alt='zwiggy'
                    />
                    <p className='text-center text-lg font-medium mx-5'>
                        Zwiggy is a food delivery web-app having different restaurants.
                    </p>
                    <div className='flex justify-evenly py-4 font-medium italic text-lg'>
                        <h1 className='hover:text-gray-400 hover:underline'>
                            <a href='https://zwiggyapp.netlify.app/' target='_blank'>Live</a>
                        </h1>
                        <h1 className='hover:text-gray-400 hover:underline'>
                            <a href='https://github.com/niteshxp/Food-App' target='_blank'>Github Link</a>
                        </h1>
                    </div>
                </div>

                <div className='lg:w-2/5 mx-4 my-10 rounded-3xl bg-purple-700 bg-opacity-50 text-white'>
                    <h1 className='font-semibold text-2xl text-center pt-4'>NewsDekho</h1>
                    <img
                        className='h-32 my-4 mx-auto rounded-lg'
                        src={newsdekho}
                        alt='newsdekho'
                    />
                    <p className='text-center text-lg font-medium mx-5'>
                        NewsDekho is a full-stack web-app which shows recent trending news.
                    </p>
                    <div className='flex justify-evenly py-4 font-medium italic text-lg'>
                        <h1 className='hover:text-gray-400 hover:underline'>
                            <a href='https://newsdekhoapp.netlify.app/' target='_blank'>Live</a>
                        </h1>
                        <h1 className='hover:text-gray-400 hover:underline'>
                            <a href='https://github.com/niteshxp/News-App-Reactjs' target='_blank'>Github Link</a>
                        </h1>
                    </div>
                </div>

                <div className='lg:w-2/5 mx-4 my-10 rounded-3xl bg-purple-700 bg-opacity-50 text-white'>
                    <h1 className='font-semibold text-2xl text-center pt-4'>WeTube</h1>
                    <img
                        className='h-32 my-4 mx-auto rounded-lg'
                        src={wetube}
                        alt='wetube'
                    />
                    <p className='text-center text-lg font-medium mx-5'>
                        WeTube is a video streaming web-app which uses youtube api and have live chat feature.
                    </p>
                    <div className='flex justify-evenly py-4 font-medium italic text-lg'>
                        <h1 className='hover:text-gray-400 hover:underline'>
                            <a href='https://wetubeproject.netlify.app/' target='_blank'>Live</a>
                        </h1>
                        <h1 className='hover:text-gray-400 hover:underline'>
                            <a href='https://github.com/niteshxp/WeTube' target='_blank'>Github Link</a>
                        </h1>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Projects