import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import { Points } from './components/points/pointsRenderer';
import Homepage from './components/HomePage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Homepage} />
        <Route path="old" component={Points} />
    </Route>
);