import React from 'react';
import image from '../../../Images/office-concept-illustration_114360-1248.jpg'

const AboutElementOne = () => {
    return (
        <div className='element bg-dark'>
            <div className="element-image">
                <img src={image} alt="" />
            </div>
            <div className="element-description">
                <h3> <u>Friendly Environment</u></h3>
                <p>In a friendly environment you always learn better and grow better. You can show your problems solve them immediately without any hisitation. Come to our support sessions. Join the conceptual sessions. Also you can personally talk with our supports and mentors for best guidance.They are very friendly and dedicated. You will always feel like home.</p>
            </div>
        </div>
    );
};

export default AboutElementOne;