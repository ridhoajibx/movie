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
import ShowMovie from '../pages/movies/Show';

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

            <Route exact path="/user/edit">
                <Header>
                    <UserEdit />
                </Header>
            </Route>

            <Route exact path="/movies/:searchMovies">
                <Header>
                    <Search />
                </Header>
            </Route>

            <Route exact path="/detail">
                <Header>
                    <ShowMovie />
                </Header>
            </Route>

            <Route exact path="/signin" component={ Signin } />
            <Route exact path="/signup" component={ Signup } />

            <Route path="*" component={ NotFound }/>
        </Switch>
    );
}

export default Index;
