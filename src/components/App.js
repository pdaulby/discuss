// app template for every page
import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
    render () {
        return (
            <div className='app'>
                <p>Header here...</p>
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.any.isRequired
};

export default App;