import React from 'react'

const Skills = () => {
    return (
        <div className='mx-5 my-10'>
            <h1 className='my-2 text-2xl font-semibold underline underline-offset-8'>Skills</h1>
            <p className='text-lg font-medium'>I'm excellent at translating modern and complex UI/UX design into functional and consumable front-end app. I use modern industry level front-end technologies such as Reactjs, TailwindCSS. However, I don't like limiting myself to a particular stack, so I'm constantly learning and adapting to end-user needs.
            </p>
            <div className='lg:w-8/12 lg:mx-auto my-5 bg-purple-800 bg-opacity-50 text-white p-2 rounded-2xl'>
                <h1 className='my-2 text-xl font-medium'>Front-End : JavaScript, Reactjs, TailwindCSS, HTML/CSS, RTK, Zustand</h1>
                <h1 className='my-2 text-xl font-medium'>Back-End : Nodejs, Expressjs, MongoDB, REST API, GraphQL</h1>
                <h1 className='my-2 text-xl font-medium'>Tools : Git/Github, VS code editor, Netlify</h1>
            </div>
        </div>
    )
}

export default Skills