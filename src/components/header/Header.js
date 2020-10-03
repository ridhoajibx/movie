import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Logo from '../../assets/logo.png'
import FormLogin from '../../pages/auth/login/FormLogin';
import FormSignup from '../../pages/auth/registration/FormSignup';
import './Header.css'

const Header = ({ children }) => {
    const [searchMovies, setSearchMovies] = useState("");
    let movies = useHistory();

    const handleChange = (e) => {
       e.preventDefault()
        setSearchMovies(e.target.value);
    }

    const handleSubmit = (e) => {
       e.preventDefault()
       movies.push(`/movies/${searchMovies}`);
    }
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
                            <form onSubmit={ handleSubmit } className="mt-2 mt-md-0 mx-auto">
                                <input onChange={ handleChange } value={ searchMovies } className="form-control searchInput" type="search" placeholder="Search movies" aria-label="Search" />
                            </form>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <button className="nav-link btn btn-link font-weight-bolder" to="/register">Sign in</button>
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
