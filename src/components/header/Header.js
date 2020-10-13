import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import axios from 'axios';
import Swal from 'sweetalert2';

import Logo from '../../assets/logo.png'
import './Header.css'
import profileImg from '../../assets/profile.jpeg'

const Header = (props) => {
    const [searchMovies, setSearchMovies] = useState("");
    let movies = useHistory();
    let userLog = useHistory()

    const [token, setToken] = useState(localStorage.getItem("token"))
    const [user, setUser] = useState({
        id: "",
        fullname: "",
        username: "",
        image: "",
        age: "",
        gender: "",
        email: "",
        password: "",
        role: "",
    });

    const logout = () => {
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#19b190",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes",
        }).then((res) => {
            if (res.isConfirmed) {
                localStorage.clear();
                setToken(null)
                userLog.push('/')
                setUser({
                    id: "",
                    fullname: "",
                    username: "",
                    image: "",
                    age: "",
                    gender: "",
                    email: "",
                    password: "",
                    role: "",
                })
            }
        });
    };
    // console.log(user);
    useEffect(() => {
        const getUser = async () => {
            try {
                let url = `${process.env.REACT_APP_URL}/user/find/`
                let res = await axios.get(url,
                    {
                        headers: {
                            "access_token": token
                        }
                    }
                )
                if (res.status === 201) {
                    setUser({
                        id: res.data.id,
                        fullname: res.data.fullname,
                        username: res.data.username,
                        image: res.data.profileimage,
                        age: res.data.age,
                        gender: res.data.gender,
                        email: res.data.email,
                        password: res.data.password,
                        role: res.data.role
                    })
                } else {
                    setUser({
                        id: '',
                        fullname: '',
                        username: '',
                        image: '',
                        age: '',
                        gender: '',
                        email: '',
                        password: '',
                        role: ''
                    })
                    throw res
                }
            } catch (e) {
                console.log(e.response.data.msg);
            }
        }
        getUser()
    }, [token])

    const handleChange = (e) => {
        e.preventDefault()
        setSearchMovies(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        movies.push(`/movie/search/${searchMovies}`);
    }

    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-main-color fixed-top">
                    <div className="container">
                        <Link className="navbar-brand font-weight-bolder d-flex align-items-center" to="/">
                            <img src={Logo} alt="" className="brandImage" />
                            <div className="brandText">
                                ALLSTAR MOVIE
                            </div>
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <form onSubmit={handleSubmit} className="mt-2 mt-md-0 mx-auto">
                                <input
                                    className="form-control searchInput"
                                    type="text"
                                    name="searchInput"
                                    placeholder="Search movies"
                                    aria-label="Search"
                                    onChange={handleChange}
                                    value={searchMovies}
                                />
                            </form>
                            <ul className="navbar-nav ml-auto align-items-center">
                                {user.id === '' ?
                                    <li className="nav-item">
                                        <Link className="nav-link font-weight-bolder" to="/signin">Sign In</Link>
                                    </li> :
                                    <>
                                        {user.role === 'admin' &&
                                            <li className="nav-item">
                                                <Link className="nav-link font-weight-bolder" to="/admin/dashboard">Dasboard</Link>
                                            </li>
                                        }
                                        <li className="nav-item dropdown mt-2 mt-md-0">
                                            <a className="nav-link nav-link dropdown-toggle font-weight-bolder" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                                                <img className="profileImg rounded-circle mr-1" src={!user.image ? null : user.image} alt="profile-img" />
                                                {user.username}
                                            </a>
                                            <ul className="py-0 dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                                <li><Link className="dropdown-item" to={`/user`}>Profile</Link></li>
                                                <li><a className="dropdown-item" href="#">Help</a></li>
                                                <li><button className="dropdown-item" onClick={logout} >Sign Out</button></li>
                                            </ul>
                                        </li>
                                    </>
                                }
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            <main>
                {props.children}
            </main>
        </div>
    );
}

export default Header;
