import React from 'react';
import Header from './Header/Header';
import NavBar from './NavBar/NavBar';
import Services from './Services/Services';
import Feedback from './Feedback/Feedback'
import Footer from './Footer/Footer';
import Brands from './Brands/Brands';
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <>
            <NavBar />
            <Header />
            <Brands></Brands>
            <Services />
            <Slider></Slider>
            <Feedback />
            <Footer />
        </>
    );
};

export default Home;