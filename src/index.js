import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router , Route} from 'react-router-dom';
import App from './components/App';
import Points from './components/points/pointsRenderer';
import Homepage from './components/HomePage';
import './index.css';

ReactDom.render(
    <Router>
        <App>
            <Route exact path="/" component={Homepage} />
            <Route  path="/old" component={Points} />
        </App>
    </Router>, 
    document.getElementById('root')
);
 