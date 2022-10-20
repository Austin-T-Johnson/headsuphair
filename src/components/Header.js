import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/logo.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
    return (
        <div className='header-container'>

            <div className='contact-container'>
                <div className='call-now'>
                    <FontAwesomeIcon className='phone-icon' icon={faPhone} /> (760) 325-4247
                </div>
                <div className='logo-container'>
                    <img src={Logo} alt='logo' className='logo'></img>
                </div>
                <div className='address'>
                    <FontAwesomeIcon className='location-icon' icon={faLocationDot} />  1199 Ramon Rd Palm Springs, CA 92264
                </div>
            </div>
            <div className='nav-container'>
                <div className='link'><Link to='/'>Home</Link></div>
                <a href='/#about'><div className='link'>About</div></a>
                <div className='link'><Link to='/services'>Services</Link></div>
                <a href="#contact"><div className='link'>Contact</div></a>
            </div>
        </div>
    )
}

export default Header