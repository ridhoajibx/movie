import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../components/header/Header';
import HomePage from '../pages/home/Home';
import MoviesIndex from '../pages/movies/Index';
import MoviesShow from '../pages/movies/Show';

const Index = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Header>
                    <HomePage />
                </Header>
            </Route>
            <Route exact path="/movies">
                <Header>
                    <MoviesIndex />
                </Header>
            </Route>

            <Route path="/movies:identifier">
                <Header>
                    <MoviesShow />
                </Header>
            </Route>
        </Switch>
    );
}

export default Index;
