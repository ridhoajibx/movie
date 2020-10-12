import React from 'react';
import Footer from '../../components/footer/Footer';
import HeroDetail from './components/HeroDetail';
import Navpills from './components/Navpills';

const DetailPage = () => {
    return (
        <div>
            <HeroDetail />
            <Navpills />
            <Footer />
        </div>
    );
}

export default DetailPage;
