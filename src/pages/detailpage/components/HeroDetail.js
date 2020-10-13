import React from 'react';
import ReactStars from "react-rating-stars-component";

const HeroDetail = ({ movie }) => {
    const ratings = {
        size: 20,
        value: 8 / 2,
        isHalf: true,
        edit: false
    }

    const wacthTrailer = (e) => {
        e.preventDefault()
        let otherWindow = window.open();
        otherWindow.opener = null;
        otherWindow.location = movie.trailer;
    }

    return (
        <div className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center" style={{ minHeight: '450px', backgroundImage: `url(${movie.poster ? movie.poster : null})`, backgroundSize: 'cover', backgroundPosition: 'center top' }}>
            <span className="mask bg-gradient-default opacity-5"></span>
            <div className="container d-flex align-items-center">
                <div className="row">
                    <div className="contentImg text-white col-lg-8 d-lg-flex flex-lg-column justify-content-center align-items-stretch pt-5 pt-lg-0 order-2 order-lg-1" data-aos="fade-up">
                        <div className="mb-4 mb-md-0">
                            <h1>{movie.title}</h1>
                            <div>
                                <ReactStars {...ratings} />
                            </div>
                            <div className="my-3">{movie.synopsis}</div>
                            <div className="my-2">
                                <button onClick={wacthTrailer} className="btn btn-main mr-4">Wacth trailer</button>
                                <button className="btn btn-main">Watchlist</button>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 mt-lg-0 col-lg-4 d-lg-flex flex-lg-column align-items-stretch order-1 order-lg-2 contentImg" data-aos="fade-up">
                        <img src={movie.poster ? movie.poster : null} className="img-thumbnail hero-img" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroDetail;
