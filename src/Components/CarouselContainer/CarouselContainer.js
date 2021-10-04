import React from 'react';
import { Carousel } from 'react-bootstrap';
import imageone from '../../Images/4457.jpg';
import imagetwo from '../../Images/recruit-agent-analyzing-candidates_74855-4565.jpg';
import imagethree from '../../Images/happy-freelancer-with-computer-home-young-man-sitting-armchair-using-laptop-chatting-online-smiling-vector-illustration-distance-work-online-learning-freelance_74855-8401.jpg';

const CarouselContainer = () => {
    return (
        <div>
            <Carousel fade className='mb-5'>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={imageone}
                        alt="First pic"
                        height='550px'
                        width='80%'
                    />
                    <Carousel.Caption>
                        <h3 className='text-dark'>24/7 OPEN SUPPORT</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={imagetwo}
                        alt="Second slide"
                        height='550px'
                        width='80%'
                    />

                    <Carousel.Caption>
                        <h3 className='text-dark'>Earn in the freelance market</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={imagethree}
                        alt="Third slide"
                        height='550px'
                        width='80%'
                    />

                    <Carousel.Caption>
                        <h3 className='text-dark'>Learn when you are free</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default CarouselContainer;