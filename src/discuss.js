import React from 'react';
import { render} from 'react-dom';
import './index.css';
import configureStore from './store/configureStore';
import routes from './routes';
import {Router, browserHistory } from 'react-router';
import {Provider} from 'react-redux';

const store = configureStore();

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);