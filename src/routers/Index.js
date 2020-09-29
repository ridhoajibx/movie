import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import HomePage from '../pages/home/Home';

const Index = () => {
    return (
        <Switch>
            <Route path="/">
                <Header>
                    <HomePage />
                </Header>
            </Route>
        </Switch>
    );
}

export default Index;
