import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/logo.png';
import profileImg from '../../../assets/profile.jpeg';

const Topnav = () => {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-main-color fixed-top">
                    <div className="container">
                        <Link className="navbar-brand font-weight-bolder d-flex align-items-center" to="/">
                            <img src={Logo} alt="" className="brandImage" />
                            <div className="brandText">
                                ALL-STAR MOVIE
                            </div>
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item dropdown mt-2 mt-md-0">
                                    <a className="nav-link nav-link dropdown-toggle font-weight-bolder" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                                        <img className="profileImg rounded-circle mr-1" src={ profileImg } alt="profile-img" />
                                        Jumakri Ridho Fauzi
                                    </a>
                                    <ul className="py-0 dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="#">Settings</a></li>
                                        <li><a className="dropdown-item" href="#">Sign Out</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Topnav;
