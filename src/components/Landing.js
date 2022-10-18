import React from 'react'
import services from '../JSON/services.json'
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
    </div>













    </>
  )
}

export default Landing