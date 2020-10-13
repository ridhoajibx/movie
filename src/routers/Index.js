import React from 'react';
import { Route, Switch } from 'react-router-dom';

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
import ShowMovie from '../pages/detailpage/DetailPage';

const Index = () => {
    
    return (
        <Switch>
            <Route exact path="/">
                <Header>
                    <HomePage />
                </Header>
            </Route>

            <Route exact path="/movie/:identifier">
                <Header>
                    <ShowMovie />
                </Header>
            </Route>

            <Route exact path="/category/:category">
                <Header>
                    <MovieCategory />
                </Header>
            </Route>

            <Route exact path="/user">
                <Header>
                    <UserIndex />
                </Header>
            </Route>

            <Route exact path="/user/edit">
                <Header>
                    <UserEdit />
                </Header>
            </Route>

            <Route exact path="/movie/search/:searchMovies">
                <Header>
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
