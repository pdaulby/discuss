import React from 'react';
import {Link} from 'react-router';

const Homepage = () => 
    {return (
        <div>
            <h1>homepage</h1>
            <p>react redux test</p>
            <Link to="old">old thing</Link>
        </div>
    );};

export default Homepage;