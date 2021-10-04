import React from 'react';
import image from '../../../Images/office-concept-illustration_114360-4777.jpg'

const AboutElementFour = () => {
    return (
        <div>
            <div className='element bg-dark'>
                <div className="element-description">
                    <h3> <u>One To One Support</u></h3>
                    <p>In our research we found that many students hesitate to ask question in front of others.
                        This one of the main reason that we are providing you individual support session. We are to first one to do this king of work.
                        More over we always value our students. Our expert mentors always take the best care of our students so that they can give the best output and make their careear brighter.
                    </p>
                </div>
                <div className="element-image">
                    <img src={image} alt="" />
                </div>

            </div>
        </div>
    );
};

export default AboutElementFour;