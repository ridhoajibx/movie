import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png'
import './Header.css'
import Swal from 'sweetalert2'

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
                                <input className="form-control search-input mr-2" type="search" placeholder="Search" aria-label="Search" />
                            </form>
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <Link className="nav-link font-weight-bolder" aria-current="page" to="/">Sign in</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            <main>
                {children}
            </main>
        </div>
    );
}

export default Header;
