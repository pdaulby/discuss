// app template for every page
import React, {PropTypes} from 'react';

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

App.proptypes = {
    children: PropTypes.object.isRequired
};

export default App;