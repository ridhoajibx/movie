import React from 'react';
import './Hero.css'
import HeroImg from '../../../../assets/carousel.jpg';

const Hero = () => {
    return (
        <div className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center" style={{ minHeight: '450px', backgroundImage: `url(${HeroImg})`, backgroundSize: 'cover', backgroundPosition: 'center top' }}>
            <span className="mask bg-gradient-default opacity-5"></span>
            <div className="container d-flex align-items-center">
                <div className="row">
                    <div className="col-md-12 contentImg">
                        <h1 className="display-2 text-white">Hello Ridho</h1>
                        <p className="text-white mt-0 mb-5">This is your profile page. You can see the progress you've made with your work and manage your projects or assigned tasks</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
