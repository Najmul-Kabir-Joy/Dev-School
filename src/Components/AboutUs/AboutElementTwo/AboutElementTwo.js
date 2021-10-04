import React from 'react';
import image from '../../../Images/4457.jpg';

const AboutElementTwo = () => {
    return (
        <div>
            <div className='element bg-dark'>
                <div className="element-description">
                    <h3> <u>24/7 OPEN SUPPORT</u></h3>
                    <p>Our dedicated and friendly support team is always there for you. For any kind of help they will be there. All you need to do is just email,call or message them. We are commited to solve your problems with in 24 hours duration. We have so many correspondent so you will never need to wait in the long queue like other organizations.</p>
                </div>
                <div className="element-image">
                    <img src={image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutElementTwo;