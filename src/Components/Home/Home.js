import React from 'react';
import CarouselContainer from '../CarouselContainer/CarouselContainer';
import HomeAbout from '../HomeAbout/HomeAbout';
import HomePartners from '../HomePartners/HomePartners';
import HomeServices from '../HomeServices/HomeServices';
import NewsTeller from '../NewsTeller/NewsTeller';
import Whyus from '../Whyus/Whyus';
import Wishes from '../Wishes/Wishes';

const Home = () => {
    return (
        <div>
            <CarouselContainer></CarouselContainer>
            <Whyus></Whyus>
            <HomeServices></HomeServices>
            <HomeAbout></HomeAbout>
            <Wishes></Wishes>
            <NewsTeller></NewsTeller>
        </div>
    );
};

export default Home;