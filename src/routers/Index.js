import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../components/header/Header';
import HomePage from '../pages/home/Home';
import Search from '../pages/movies/Search';
import UserIndex from '../pages/auth/user/Index';
import UserEdit from '../pages/auth/user/Edit';

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

            <Route path="/movies/:searchMovies">
                <Header>
                    <Search />
                </Header>
            </Route>
        </Switch>
    );
}

export default Index;
