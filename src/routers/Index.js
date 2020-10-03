import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../components/header/Header';
import HomePage from '../pages/home/Home';
import Search from '../pages/movies/Search';

const Index = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Header>
                    <HomePage />
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
