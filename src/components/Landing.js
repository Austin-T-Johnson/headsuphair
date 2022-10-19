import React from 'react'
import services from '../JSON/services.json'
import OutdoorImg from '../assets/images/Outdoor-Sign.webp'
const Landing = () => {
  return (
    <>
    <div className='top-container'>
        <div className='top-img-container'></div>
        <div className='heading'>Heads Up Hair Designs And Salon Suites</div>
        <div className='paragraph'>Your one stop shop for professional hair and beauty needs providing the Coachella Valley with expert service since 1979</div>
    </div>

    <div className='services-outer-container'>
        <div className='h1'>Hair & Beauty Services</div>
        <div className='service-info'>We carry the finest beauty products and offer the largest selection of hair and beauty services in the Coachella Valley</div>
        <div className='icon-container'>
            {services.map((service) => {
                return (
                    <div className='service-icon-container'>
                   <div className='service-img-container'>
                    <img src={service.img} className='service-img'/>
                   </div>
                    <div className='service-txt'>{service.txt}</div>
                    </div>
                )
            })}
        </div>
        <div className='button-div'>
            <button>See All Services</button>
        </div>

        <div className='about-section-container'>
            <div className='about-us-h1'>About Us</div>
            <div className='outside-img-container'><img src={OutdoorImg} alt="Heads Up Outdoor Sign" className='outside-img'/></div>
            <div className='about-txt-container'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        </div>
        
    </div>













    </>
  )
}

export default Landing