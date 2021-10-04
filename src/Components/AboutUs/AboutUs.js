import React from 'react';
import './About.css'
import AboutElementFour from './AboutElementFour/AboutElementFour';
import AboutElementOne from './AboutElementOne/AboutElementOne';
import AboutElementThree from './AboutElementThree/AboutElementThree';
import AboutElementTwo from './AboutElementTwo/AboutElementTwo';
const AboutUs = () => {
    return (
        <div>
            <div className='text-center'>
                <i className="fas fa-university display-1 d-block text-center mb-3"></i>
                <h3>ABOUT</h3>
                <h1>DEV SCHOOL</h1>
                <p className='quote'>Education is the movement from darkness to light.</p>
                <p className='description'>With This moto Dev School started it's journey.From the idea of ​​improving people's lives through online learning, Dragon Learning is now offering many new educational and skill development courses. We have enriched our website with quality courses that will help everyone learn a new skill and succeed in life.
                    We help organizations of all types and sizes prepare for the path ahead — wherever it leads. Our curated collection of business and technical courses help companies, governments, and nonprofits go further by placing learning at the center of their strategies.</p>
            </div >
            <AboutElementOne></AboutElementOne>
            <AboutElementTwo></AboutElementTwo>
            <AboutElementThree></AboutElementThree>
            <AboutElementFour></AboutElementFour>
            <p className='quote text-center'>The capacity to learn is a gift; the ability to learn is skill; the willingness to learn is a choice.</p>
        </div>
    );
};

export default AboutUs;