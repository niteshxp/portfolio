import React from 'react'
import bg2 from '../assets/bg2.mp4';
import Footer from './Footer'
import Header from './Header'
import Main from './Main'
import Buttons from './Buttons'
import Projects from './Projects'
import About from './About';
import Skills from './Skills'
import Contact from './Contact'

const Home = () => {

    return (
        <div className='text-white'>

            <div>
                {/* Background Video */}
                <video
                    className='fixed top-0 left-0 w-screen h-screen object-cover -z-10'
                    autoPlay
                    loop
                    muted>
                    <source src={bg2} type='video/mp4' />
                </video>
                <div className='fixed h-full w-full bg-black opacity-60 -z-10'>
                </div>
            </div>

            {/* Header */}
            <Header />

            {/* Intro */}
            <Main />

            {/* buttons */}
            <Buttons />

            {/* Projects */}
            <Projects />

            {/* About Me */}
            <About />
            <Buttons />
            {/* Skill set */}
            <Skills />

            {/* Call to action */}
            <Contact />

            {/* Footer */}
            <Footer />

        </div >
    )
}

export default Home