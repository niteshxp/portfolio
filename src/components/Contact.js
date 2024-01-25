import emailIcon from '../assets/email.svg'
import githubIcon from '../assets/github.svg'
import linkedinIcon from '../assets/linkedin.svg'

const Contact = () => {
    return (
        <div className='lg:text-center mx-5 mt-16 font-semibold text-xl'>
            <h1 className='my-4'>Lets works Together!</h1>
            <h1 className='my-4'>And make something beautiful and great.</h1>
            <h1 className='my-2'>You can contact me at : </h1>
            <ul className='my-5 p-2 flex justify-evenly items-center rounded-xl'>
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
    )
}

export default Contact