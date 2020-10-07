import React from 'react';
import Footer from '../../components/footer/Footer';
import HeroDetail from './detailMovies/HeroDetail';
import Navpills from './detailMovies/Navpills';

const Show = () => {
    return (
        <div>
            <HeroDetail />
            <Navpills />
            <Footer />
        </div>
    );
}

export default Show;
