import React from 'react';

import {NavLink} from 'react-router-dom';

const navigation = () =>{
    return(
        <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">contact</NavLink>
        </div>
    );
}

export default navigation;