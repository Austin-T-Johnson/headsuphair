import React from 'react'
import { Link } from 'react-router-dom'
import servicesIcons from '../JSON/services-icons.json'
import Stepper from './Stepper'
import Contact from './Contact'



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
                    {servicesIcons.map((service,idx) => {
                        return (
                            <div className='service-icon-container' key={idx}>
                                <div className='service-img-container'>
                                    <img src={service.img} className='service-img' alt='services icons' />
                                </div>
                                <div className='service-txt'>{service.txt}</div>
                            </div>
                        )
                    })}
                </div>
                <div className='button-div'>
                    <button className='btn-link'><Link to='/services'>See All Services</Link></button>
                </div>

                <div className='about-section-container' id='about'>
                    <div className='about-us-h1'>About Us</div>
                    <div className='stepper'> <Stepper /> </div>
                    <div className='about-txt-container'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                </div>

                <div className='testimonials-section'>
                    <div className='testimonials-txt'>Testimonials</div>
                    <figure className="card">
                        <figcaption>
                            <blockquote>
                                <p>George gave me the best hairstyle I've ever had in Palm Springs. I'll differently go back to George
                                    Nice big salon spacious and also very clean, I'm glad I live close,I can just walk over and the price for a haircut was is very reasonable.</p>
                            </blockquote>
                            <h3>Jeff L.</h3>
                            <h4>Yelp Review</h4>
                        </figcaption>
                    </figure>
                    <figure className="card">
                        <figcaption>
                            <blockquote>
                                <p>Joanna is an amazing hairstylist. She was at Mane Attraction for years, but is now at Heads Up. I have never left the salon disappointed when she does my hair. This salon is wonderful & they are incredibly lucky to have gained a fabulous, caring, friendly & talented hair stylist in Joanna</p>
                            </blockquote>
                            <h3>Barbara H.</h3>
                            <h4>Yelp Review</h4>
                        </figcaption>
                    </figure>
                    <figure className="card">
                        <figcaption>
                            <blockquote>
                                <p>Looking for a great haircut EVERY TIME then go to Heads up Hair Designs. Paul is the only person that I let touch/cut my hair! He is simply the best in the desert! I have been going to him for years. He even did my wedding hair updo.  Very professional. I go every six to seven weeks and I am happy  every time. </p>
                            </blockquote>
                            <h3>Theresa B.</h3>
                            <h4>Yelp Review</h4>
                        </figcaption>
                    </figure>
                </div>

            </div>
            <Contact />

        </>
    )
}

export default Landing