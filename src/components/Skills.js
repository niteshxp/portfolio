import React from 'react'
import { skillsData, frontEndData, backEndData, toolsData, subjectData } from '../utils/data'

const Skills = () => {
    return (
        <div className='mx-5 my-10'>
            <h1 className='my-2 text-2xl font-semibold underline underline-offset-8'>Skills</h1>
            <p className='text-lg font-medium'>
                {skillsData}
            </p>
            <div className='lg:w-8/12 lg:mx-auto my-10 bg-purple-800 bg-opacity-50 text-white p-2 rounded-2xl'>
                <h1 className='my-2 text-xl font-medium'>{frontEndData}</h1>
                <h1 className='my-2 text-xl font-medium'>{backEndData}</h1>
                <h1 className='my-2 text-xl font-medium'>{toolsData}</h1>
                <h1 className='my-2 text-xl font-medium'>{subjectData}</h1>
            </div>
        </div>
    )
}

export default Skills