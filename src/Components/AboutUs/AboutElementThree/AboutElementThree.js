import React from 'react';
import image from '../../../Images/happy-freelancer-with-computer-home-young-man-sitting-armchair-using-laptop-chatting-online-smiling-vector-illustration-distance-work-online-learning-freelance_74855-8401.jpg'

const AboutElementThree = () => {
    return (
        <div>
            <div className='element bg-dark'>
                <div className="element-image">
                    <img src={image} alt="" />
                </div>
                <div className="element-description">
                    <h3> <u>Learn when you are free</u></h3>
                    <p>We designed our courses in a unique way so that everyone can get benefits from it. From students to service holder anyone can learn anytime from anywhere around the world. We don't want to stay in the box. We came out of the box so that our students also can do that. Maybe you are busy today, no matter you can learn tomorrow.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutElementThree;