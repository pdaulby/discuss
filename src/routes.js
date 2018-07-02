import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import { All } from './index';
import Homepage from './components/HomePage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Homepage} />
        <Route path="old" component={All} />
    </Route>
);