import React from 'react'
import Contact from './Contact'
import servicesPricing from '../JSON/services-pricing.json'
import nailServices from '../JSON/nail-services.json'
const Services = () => {
    return (
        <>
            <div className='background'></div>
            <div className='services-container'>
                <div className='services-left-container'>
                    <div className='services-card'>
                        <h1>The Cut</h1>
                        <div className='service-txt-container'>
                            <p className='service-card-p'>The cut begins with a full consultation regarding your hairstyle options. Your hair is then treated to our clarification process which removes hard water deposits, followed by a five-minute, monthly maitenance conditioning. Next, our designer will cut your hair using precision cutting techniques that make handling your hair between services a breeze.<strong>Complimentary hair sculpting or blow-dry finish.</strong></p>
                        </div>
                    </div>

                    <div className='services-card'>
                        <h1>Color</h1>
                        <div className='service-txt-container'>
                            <p className='service-card-p'>Corrective and custom color are our specialties. Our extensive color training comes into play as we use "hair color as make up." Skin tone analysis, highlights to brighten your face, and coloring that takes advantage of your natural tones, are just a few ofthe many elements taken into consideration in finding the most flattering color solution for you.</p>
                        </div>
                    </div>

                    <div className='services-card'>
                        <h1>Hair Straightening</h1>
                        <h2>Yuko Hair Straightening System</h2>
                        <div className='service-txt-container'>
                            <p className='service-card-p'>We are pleased to offere the <strong>Yuko System Repair</strong> in our salon. This straight permanent process was designed to not only straighten wavy or curly hair but also revitalize the hair. After the process is done, the hair not only stays straight, but also becomes healthier than ever.</p>
                        </div>
                        <h3>Please call to book a consultation for pricing and more information.</h3>
                    </div>
                </div>


                <div className='services-pricing-container'>
                    <div className='services-card'>
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