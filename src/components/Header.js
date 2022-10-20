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
                   <a href="tel:760-325-4247"> <FontAwesomeIcon className='phone-icon' icon={faPhone} /> (760) 325-4247</a>
                </div>
                <div className='logo-container'>
                <Link to='/'><img src={Logo} alt='logo' className='logo'></img></Link>
                </div>
                <div className='address'>
                    <FontAwesomeIcon className='location-icon' icon={faLocationDot} /> <a href="https://www.google.com/maps/place/1199+Ramon+Rd,+Palm+Springs,+CA+92264/@33.8156287,-116.5355717,17z/data=!3m1!4b1!4m5!3m4!1s0x80db1b744eb26b8f:0xcd75fbfab6c2497c!8m2!3d33.8156287!4d-116.533383" target="_blank"> 1199 Ramon Rd Palm Springs, CA 92264</a>
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