import { intro1, intro2 } from '../utils/data'

const About = () => {
    return (
        <div id='about' className='mb-16'>
            <div className='mx-5'>
                <h1 className='my-5 text-2xl font-semibold underline underline-offset-8'>About me</h1>
                <h4 className='text-left font-medium text-lg'>
                    {intro1}
                </h4>
                <br />
                <h4 className='text-left font-medium text-lg'>
                    {intro2}
                </h4>
            </div>
        </div>
    )
}

export default About