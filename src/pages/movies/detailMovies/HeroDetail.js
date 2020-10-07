import React from 'react';
import ReactStars from "react-rating-stars-component";
import HeroImg from '../../../assets/carousel.jpg';

const HeroDetail = () => {
    const rating = {
        size: 20,
        value: 6.8 / 2,
        isHalf: true,
        edit: false
    }
    return (
        <div className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center" style={{ minHeight: '450px', backgroundImage: `url(${HeroImg})`, backgroundSize: 'cover', backgroundPosition: 'center top' }}>
            <span className="mask bg-gradient-default opacity-5"></span>
            <div className="container d-flex align-items-center">
                <div className="row">
                    <div className="col-md-8 text-white contentImg">
                        <h1 className="mb-0">Captain America</h1>
                        <ReactStars {...rating} />
                        <span className="">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eos, natus impedit nulla molestiae quos aut itaque obcaecati facere eligendi.
                        </span>
                        <div className="col-md-6 mt-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <button className="btn btn-main">Wacth Trailer</button>
                                <button className="btn btn-main">Add to Wacthlist</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroDetail;
