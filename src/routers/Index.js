import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Header from '../components/header/Header';
import HomePage from '../pages/home/Home';
import Search from '../pages/movies/Search';
import UserIndex from '../pages/auth/user/Index';
import UserEdit from '../pages/auth/user/Edit';
import Signin from '../pages/auth/form/Signin';
import NotFound from '../pages/errors/NotFound';
import Signup from '../pages/auth/form/Signup';
import ShowMovie from '../pages/movies/Show';
import Admin from '../pages/admin/layouts/Admin';
import Dashboard from '../pages/admin/views/Dashboard';

const Index = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Header>
                    <HomePage />
                </Header>
            </Route>

            <Route exact path="/user">
                <Header>
                    <UserIndex />
                </Header>
            </Route>

            <Route path="/user/edit">
                <Header>
                    <UserEdit />
                </Header>
            </Route>

            {/* <Route exact path="/movies/:searchMovies">
                <Header>
                    <Search />
                </Header>
            </Route> */}

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
