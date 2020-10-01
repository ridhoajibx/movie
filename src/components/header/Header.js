import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png'
import FormLogin from '../../pages/auth/login/FormLogin';
import FormSignup from '../../pages/auth/registration/FormSignup';
import './Header.css'

const Header = ({ children }) => {
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
                            <form className="mt-2 mt-md-0 mx-auto">
                                <input className="form-control searchInput" type="search" placeholder="Search movies" aria-label="Search" />
                            </form>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <button className="nav-link btn btn-link font-weight-bolder" data-toggle="modal" data-target="#signup" to="/register">Sign in</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            <FormSignup />
            <FormLogin />

            <main>
                {children}
            </main>
        </div>
    );
}

export default Header;
