import React from 'react'
import menuIcon from '../assets/hamburger.png'
import netflix from '../assets/netflix-ui.jpg'
import zwiggy from '../assets/zwiggyapp.jpg'
import emailIcon from '../assets/email.png'
import linkedinIcon from '../assets/linkedin.png'
import githubIcon from '../assets/github.png'

const Home = () => {
    return (
        <div className=''>

            {/* Header */}
            <div className='w-full h-20 py-2 bg-black px-4 flex items-center justify-between'>
                <h1 className='text-4xl font-bold text-[#2967d3]'>NiteshXP</h1>
                <img className='h-5 mx-2' src={menuIcon} alt='menu' />
            </div>

            {/* Intro */}
            <div className='mt-36 h-48 flex justify-center items-center text-center'>
                <div>
                    <h1 className='text-5xl font-bold py-2'>Nitesh Patel</h1>
                    <p className='font-semibold text-xl'>Full Stack Developer <br />having interest in AI</p>
                </div>
            </div>

            {/* buttons */}
            <div className='my-4 flex flex-col justify-center items-center'>
                <span className='w-32 my-2 p-2 text-xl font-semibold text-center bg-pink-500 rounded-full'><a href=''>Contact me</a></span>
                <span className='w-32 my-2 p-2 text-xl font-semibold text-center border border-black rounded-full'>Resume</span>
            </div>

            {/* Projects */}
            <div className='my-24'>

                <div className='text-center'>
                    <h1 className='text-2xl font-semibold'>My Work</h1>
                    <p className=' text-lg font-medium my-2'>Here are some of my proof of work.</p>
                </div>

                <div className='h-80 mx-10 my-10 rounded-3xl bg-purple-700 text-white'>
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

                <div className='h-80 mx-10 my-10 rounded-3xl bg-purple-700 text-white'>
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

                <div className='h-80 mx-10 my-10 rounded-3xl bg-purple-700 text-white'>
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

            {/* About Me */}
            <div className='mx-5'>
                <h1 className='my-5 text-2xl font-semibold'>About me</h1>
                <h4 className='text-left font-medium text-lg'>Hello! I'm a creative developer who's driven by user needs and creativity. I specialize in Front-end development, but I'm also considerably exposed to Back-end development and UI/UX. I always aim to get the best out of myself by staying up to date with latest trends and technologies. I'm extremely fascinated by state of the art user interfaces in particular. In my free time, I'm busy with football.
                </h4>

                <div className='my-8 flex justify-center items-center'>
                    <span className='w-32 my-2 p-2 text-xl font-semibold text-center bg-pink-500 rounded-full'>Contact me</span>
                    <span className='mx-5 w-32 my-2 p-2 text-xl font-semibold text-center border border-black rounded-full'>Resume</span>
                </div>
            </div>


            {/* Skill set */}
            <div className='mx-5'>
                <h1 className='my-2 text-2xl font-semibold'>Skills</h1>
                <p className='text-lg font-medium'>I'm excellent at translating modern and complex UI/UX design into functional and consumable front-end app. I use modern industry level front-end technologies such as Reactjs, TailwindCSS. However, I don't like limiting myself to a particular stack, so I'm constantly learning and adapting to end-user needs.
                </p>
                <div className='my-5 bg-purple-800 text-white p-2 rounded-2xl'>
                    <h1 className='my-2 text-xl font-medium'>Front-End : JavaScript, Reactjs, TailwindCSS, HTML/CSS, RTK, Zustand</h1>
                    <h1 className='my-2 text-xl font-medium'>Back-End : Nodejs, Expressjs, MongoDB, REST API, GraphQL</h1>
                    <h1 className='my-2 text-xl font-medium'>Tools : Git/Github, VS code editor, Netlify</h1>
                </div>
            </div>

            {/* Call to action */}
            <div id='#contact' className='mx-5 my-16 font-semibold text-xl'>
                <h1 className='my-4'>Lets works Together!</h1>
                <h1 className='my-4'>And make something beautiful and great product.
                </h1>
                <h1 className='my-2'>You can contact me at : </h1>
                <ul className='my-5 flex justify-evenly items-center'>
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


        </div>
    )
}

export default Home