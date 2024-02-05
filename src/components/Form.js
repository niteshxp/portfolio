import React from 'react'

const Form = () => {
    return (
        <form className='my-16'>
            <div>
                <h1 className='text-center text-2xl'>Contact Me</h1>
                <div className='my-8'>
                    <input className='lg:w-2/5 md:w-2/4 md:mx-56 rounded-xl p-2 w-full text-2xl' type='text' placeholder='Enter your Name' />
                </div>
                <div className='my-8'>
                    <input className='lg:w-2/5 md:w-2/4 md:mx-56 rounded-xl p-2 w-full text-2xl' type='email' placeholder='Enter your Email' />
                </div>
                <div className='my-8'>
                    <textarea className='lg:w-2/5 md:w-2/4 md:mx-56 rounded-xl p-2 w-full text-2xl' rows={5} placeholder='Enter your Message'></textarea>
                </div>
                <button className='w-full lg:w-2/5 md:w-2/4 md:mx-56 mx-auto rounded-xl p-2 text-2xl bg-red-500'>Submit</button>
            </div>
        </form>
    )
}

export default Form



