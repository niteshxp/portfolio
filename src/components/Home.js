import React, { useState } from 'react'
import netflix from '../assets/netflix-ui.jpg'
import zwiggy from '../assets/zwiggyapp.jpg'
import emailIcon from '../assets/email.png'
import linkedinIcon from '../assets/linkedin.png'
import githubIcon from '../assets/github.png'
import bg2 from '../assets/bg2.mp4';

const Home = () => {

    return (
        <div className='text-white'>

            <div>
                {/* Background Video */}
                <video className='fixed top-0 left-0 w-full h-full object-cover -z-20' autoPlay loop muted>
                    <source src={bg2} type='video/mp4' />
                </video>
            </div>

            {/* Header */}
            <div className='w-full h-20 py-2 px-4 flex items-center justify-between'>
                <h1 className='text-4xl font-bold text-gray-300'>NiteshXP</h1>

            </div>

            {/* Intro */}
            <div className='mt-36 h-48 flex justify-center items-center text-center'>
                <div>
                    <h1 className='text-5xl py-2 px-2 rounded-lg font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'>Nitesh Patel</h1>
                    <p className='font-semibold text-xl text-gray-200'>Full Stack Developer <br />having interest in AI</p>
                </div>
            </div>

            {/* buttons */}
            <div className='my-4 flex flex-col justify-center items-center'>
                <span className='w-32 my-2 p-2 text-xl font-semibold text-center bg-gradient-to-r from-pink-700 to-purple-700 rounded-full'><a href='https://github.com/niteshxp' target='_blank' >Contact me</a></span>
                <span className='w-32 my-2 p-2 text-xl font-semibold text-center border-2 border-gray-400 rounded-full'>Resume</span>
            </div>

            {/* Projects */}
            <div className='my-24'>

                <div className='text-center'>
                    <h1 className='text-2xl font-semibold'>My Work</h1>
                    <p className=' text-lg font-medium my-2'>Here are some of my proof of work.</p>
                </div>

                <div className='lg:flex'>
                    <div className='lg:w-2/5 h-80 mx-10 my-10 rounded-3xl bg-purple-700 text-white'>
                        <h1 className='font-semibold text-2xl text-center pt-4'>Netflix.ai</h1>
                        <img
                            className='h-32 my-4 mx-auto rounded-lg'
                            src={netflix}
                            alt='netflixai'
                        />

                        <p className='text-center text-lg font-medium mx-5'>
                            Netflix.ai is a full-stack web-app with integrated ChatGPT support.
                        </p>
                    </div>

                    <div className='lg:w-2/5 h-80 mx-10 my-10 rounded-3xl bg-purple-700 text-white'>
                        <h1 className='font-semibold text-2xl text-center pt-4'>Zwiggy</h1>
                        <img
                            className='h-32 my-4 mx-auto rounded-lg'
                            src={zwiggy}
                            alt='netflixai'
                        />

                        <p className='text-center text-lg font-medium mx-5'>
                            Zwiggy is a food delivery web-app having different restaurants.
                        </p>
                    </div>

                    <div className='lg:w-2/5 h-80 mx-10 my-10 rounded-3xl bg-purple-700 text-white'>
                        <h1 className='font-semibold text-2xl text-center pt-4'>NewsDekho</h1>
                        <img
                            className='h-32 my-4 mx-auto rounded-lg'
                            src={zwiggy}
                            alt='netflixai'
                        />

                        <p className='text-center text-lg font-medium mx-5'>
                            NewsDekho is a full-stack web-app which shows recent trending news.
                        </p>
                    </div>
                </div>

            </div>

            {/* About Me */}
            <div className='mx-5'>
                <h1 className='my-5 text-2xl font-semibold'>About me</h1>
                <h4 className='text-left font-medium text-lg'>Hello! I'm a creative developer who's driven by user needs and creativity. I specialize in Front-end development, but I'm also considerably exposed to Back-end development and UI/UX. I always aim to get the best out of myself by staying up to date with latest trends and technologies. I'm extremely fascinated by state of the art user interfaces in particular. In my free time, I'm busy with football.
                </h4>

                <div className='my-8 flex justify-center items-center'>
                    <span className='w-32 my-2 p-2 text-xl font-semibold text-center bg-gradient-to-r from-pink-700 to-purple-700 rounded-full'><a href='https://github.com/niteshxp' target='_blank' >Contact me</a></span>
                    <span className='mx-5 w-32 my-2 p-2 text-xl font-semibold text-center border-2 border-gray-400 rounded-full'>Resume</span>
                </div>
            </div>


            {/* Skill set */}
            <div className='mx-5'>
                <h1 className='my-2 text-2xl font-semibold'>Skills</h1>
                <p className='text-lg font-medium'>I'm excellent at translating modern and complex UI/UX design into functional and consumable front-end app. I use modern industry level front-end technologies such as Reactjs, TailwindCSS. However, I don't like limiting myself to a particular stack, so I'm constantly learning and adapting to end-user needs.
                </p>
                <div className='lg:w-8/12 lg:mx-auto my-5 bg-purple-800 text-white p-2 rounded-2xl'>
                    <h1 className='my-2 text-xl font-medium'>Front-End : JavaScript, Reactjs, TailwindCSS, HTML/CSS, RTK, Zustand</h1>
                    <h1 className='my-2 text-xl font-medium'>Back-End : Nodejs, Expressjs, MongoDB, REST API, GraphQL</h1>
                    <h1 className='my-2 text-xl font-medium'>Tools : Git/Github, VS code editor, Netlify</h1>
                </div>
            </div>

            {/* Call to action */}
            <div className='lg:text-center mx-5 my-16 font-semibold text-xl'>
                <h1 className='my-4'>Lets works Together!</h1>
                <h1 className='my-4'>And make something beautiful and great product.
                </h1>
                <h1 className='my-2'>You can contact me at : </h1>
                <ul className='my-5 p-2 flex justify-evenly items-center bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl'>
                    <li>
                        <a href='mailto:niteshpatel8852@gmail.com'><img className='w-10' src={emailIcon} alt='email-icon' /></a>
                    </li>
                    <li>
                        <a href='https://linkedin.com/in/niteshxp'><img className='w-10' src={linkedinIcon} alt='linkedin-icon' /></a>
                    </li>
                    <li>
                        <a href='https://github.com/niteshxp'><img className='w-10' src={githubIcon} alt='github-icon' /></a>
                    </li>
                </ul>
            </div>

            {/* Footer */}
            <div className='mt-10 bg-pink-500 text-white text-center'>
                <h1 className='py-4 text-xl font-bold'>Created with ❤️ by Nitesh </h1>
            </div>


        </div >
    )
}

export default Home