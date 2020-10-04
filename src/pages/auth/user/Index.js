import React from 'react';
import './User.css'
import ProfileImg from '../../../assets/profile.jpeg'
import { Link } from 'react-router-dom';
import Footer from '../../../components/footer/Footer';
import Hero from './components/Hero';

const Index = () => {
    return (
        <>
            <Hero />
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-md-6 mb-5 md-mb-0 mx-auto mt--5">
                        <div className="card card-profile shadow">
                            <div className="row justify-content-center">
                                <div className="col-lg-3">
                                    <div className="card-profile-image">
                                        <div>
                                            <img src={ProfileImg} className="rounded-circle" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body pt-4 mt-5">
                                <div className="row mt-4 pt-5 pb-3">
                                    <div className="col">
                                        <div className="d-flex justify-content-center">
                                            <Link to="/user/edit" className="btn btn-sm btn-main">Edit</Link>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="row">
                                    <div className="col">
                                        <div className="card-profile-stats d-flex justify-content-center">
                                            <div>
                                                <span className="heading">22</span>
                                                <span className="description">Friends</span>
                                            </div>
                                            <div>
                                                <span className="heading">10</span>
                                                <span className="description">Photos</span>
                                            </div>
                                            <div>
                                                <span className="heading">89</span>
                                                <span className="description">Comments</span>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                <div className="text-center">
                                    <div className="font-weight-bold">
                                        Jumakri Ridho Fauzi<span className="font-weight-light">, 27</span>
                                    </div>
                                    <div>
                                        <small>Batam, Indonesia</small>
                                    </div>
                                    <div className="font-weight-bold mt-4">
                                        Front End Developer - Creative Tim F
                                    </div>
                                    <div>
                                        <small>Glints Academy Batch 7</small>
                                    </div>
                                    <div>
                                        <small>University of Ibnu Sina</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Index;
