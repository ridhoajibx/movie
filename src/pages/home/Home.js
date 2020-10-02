import React from 'react';

import Carousel from '../../components/carousel/Carousel';
import Movies from '../movies/Index';
import Footer from '../../components/footer/Footer';

const Home = () => {
    
    return (
        <div>
            <Carousel />           
            <Movies />
            <Footer />
        </div>
    );
}

export default Home;
