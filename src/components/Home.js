import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'
import Buttons from './Buttons'
import Projects from './Projects'
import About from './About';
import Skills from './Skills'
import Contact from './Contact'
import Backtheme from './Backtheme'

const Home = () => {

    return (
        <div
            className='text-gray-200 scroll-smooth border border-s-0 md:border-t-0'
        >
            <Backtheme />
            <Header />
            <Main />
            <Buttons />
            <Projects />
            <About />
            <Buttons />
            <Skills />
            <Contact />
            <Footer />
        </div >
    )
}

export default Home