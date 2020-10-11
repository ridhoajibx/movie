import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import * as yup from 'yup';
import Swal from 'sweetalert2';

import Logo from '../../assets/logo.png'
import './Header.css'
import { useForm } from 'react-hook-form';

const schema = yup.object().shape({
    searchInput: yup.string(),
});
const Header = ({ children }) => {
    let searchMovie = useHistory();
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = async (data) => {
        let { searchInput } = data;
        let config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        try {
            let res = await axios.get(`${process.env.REACT_APP_URL}/search/`, {searchInput : searchInput}, config)
            if (res.data.success === true) {
                searchMovie.push(`/search/${searchMovie}`)
            } else {
                throw res
            }
        } catch (e) {
            console.log(e.message);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `there is no movie`
            })
        }
    };
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
                            <form onSubmit={handleSubmit(onSubmit)} className="mt-2 mt-md-0 mx-auto">
                                <input 
                                    className="form-control searchInput" 
                                    type="text"
                                    name="searchInput"
                                    placeholder="Search movies" 
                                    aria-label="Search"
                                    ref={register}
                                />
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
