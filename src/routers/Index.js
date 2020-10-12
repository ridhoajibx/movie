import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios'

import Header from '../components/header/Header';
import HomePage from '../pages/home/Home';
import Search from '../pages/movies/Search';
import UserIndex from '../pages/auth/user/Index';
import UserEdit from '../pages/auth/user/Edit';
import Signin from '../pages/auth/form/Signin';
import NotFound from '../pages/errors/NotFound';
import Signup from '../pages/auth/form/Signup';
import Admin from '../pages/admin/layouts/Admin';
import Dashboard from '../pages/admin/views/Dashboard';
import MovieCategory from '../pages/movies/MovieCategory';
import Swal from 'sweetalert2';

const Index = () => {
    const [token, setToken] = useState(localStorage.getItem("token"))
    const [user, setUser] = useState({
        id: "",
        fullname: "",
        username: "",
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
                setUser({
                    id: "",
                    fullname: "",
                    username: "",
                    age: "",
                    gender: "",
                    email: "",
                    password: "",
                    role: "",
                });
                setToken(null)
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
                        age: '',
                        gender: '',
                        email: '',
                        password: '',
                        role: ''
                    })
                    throw res
                }
            } catch (e) {
                Swal.fire({
                    icon: "error",
                    title: "Opss",
                    text: `${e.response.data.msg}`
                })
            }
        }
        getUser()
    }, [])
    return (
        <Switch>
            <Route exact path="/">
                <Header token={token} user={user} logout={logout}>
                    <HomePage />
                </Header>
            </Route>

            <Route exact path="/category/:category">
                <Header token={token} user={user} logout={logout}>
                    <MovieCategory />
                </Header>
            </Route>

            <Route exact path="/user">
                <Header token={token} user={user} logout={logout}>
                    <UserIndex />
                </Header>
            </Route>

            <Route path="/user/edit">
                <Header token={token} user={user} logout={logout}>
                    <UserEdit />
                </Header>
            </Route>

            <Route exact path="/movie/search/:searchMovies">
                <Header token={token} user={user} logout={logout}>
                    <Search />
                </Header>
            </Route>

            <Route exact path="/admin/dashboard">
                <Admin>
                    <Dashboard />
                </Admin>
            </Route>

            <Route path="/signin" component={ Signin } />
            <Route path="/signup" component={ Signup } />

            <Route component={ NotFound }/>
        </Switch>
    );
}

export default Index;
