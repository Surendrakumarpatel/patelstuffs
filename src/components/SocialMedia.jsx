import React from 'react'
import { BsLinkedin, BsInstagram } from 'react-icons/bs';
import { FaFacebookF, FaYoutube } from 'react-icons/fa';


const SocialMedia = () => {
    return (
        <div className='app__social'>
            <div>
               <a href="https://www.linkedin.com/in/surendrakumar143/" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a> 
            </div>
            <div>
                <a href="https://www.youtube.com/@patelstuffs" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            </div>
            <div>
                <a href="https://www.instagram.com/patelstuffs" target="_blank" rel="noopener noreferrer"><BsInstagram /></a>
            </div>
        </div>
    )
}

export default SocialMedia