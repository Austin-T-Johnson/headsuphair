import React from 'react'
import Contact from './Contact'
import servicesPricing from '../JSON/services-pricing.json'
import nailServices from '../JSON/nail-services.json'
import servicesCard from '../JSON/services-card.json'
const Services = () => {
    return (
        <>
            <div className='background'></div>
            <div className='services-container'>
            <div className='left-container'>
                {servicesCard.map((data, idx) => {
                    return (
                       <div className='services-card' key={idx}>
                            <h1>{data.title}</h1>
                            <h2>{data.subtitle}</h2>
                            <div className='left-txt-container'>
                                <p className='service-card-p'>{data.info}</p>
                            </div>
                            <h3>{data.subinfo}</h3>
                        </div>
                       
                    )
                })}
                </div>

            <div className='right-container'>
                    <div className='right-txt-container'>
                        <h1>Hair Services</h1>
                        {servicesPricing.map((service) => {
                            return (
                                <p className='service-card-p'>{service.txt}</p>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className='bottom-right-h3-container'>
                <h3>Our prices vary depending upon the length of hair and level of stylist. Prices subject to change without notice.</h3>
            </div>

            <div className='nail-service-container'>
                <h1>Nail Services</h1>
                {nailServices.map((service) => {
                    return (
                        <p className='service-card-p'>{service.txt}</p>
                    )
                })}
            </div>
            <Contact />

        </>
    )
}

export default Services