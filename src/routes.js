import React from 'react';
import { Route } from 'react-router-dom';
import App from './components/App';
import Points from './components/points/pointsRenderer';
import Homepage from './components/HomePage';


export default (
    <App>
        <Route exact path="/" component={Homepage} />
        <Route  path="/old" component={Points} />
    </App>
);