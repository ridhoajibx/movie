import React from 'react';
import Footer from '../../components/footer/Footer';
import HeroDetail from './component/HeroDetail';
import Navpills from './component/Navpills';

const DetailMovies = () => {
    return (
        <div>
            <div>
                <HeroDetail />
                <Navpills />
                <Footer />
            </div>
        </div>
    );
}

export default DetailMovies;
