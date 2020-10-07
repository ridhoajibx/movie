import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Logo from '../../assets/logo.png'
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
                                <li className="nav-item">
                                    <Link className="nav-link font-weight-bolder" to="/signin">Sign In</Link>
                                </li>

                                {/* <li className="nav-item dropdown mt-2 mt-md-0">
                                    <a className="nav-link nav-link dropdown-toggle font-weight-bolder" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                                        <img className="profileImg rounded-circle mr-1" src={ profileImg } alt="profile-img" />
                                        Jumakri Ridho Fauzi
                                    </a>
                                    <ul className="py-0 dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                        <li><Link className="dropdown-item" to="/user">Profile</Link></li>
                                        <li><a className="dropdown-item" href="#">Help</a></li>
                                        <li><a className="dropdown-item" href="#">Sign Out</a></li>
                                    </ul>
                                </li> */}
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
