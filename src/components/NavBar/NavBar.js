import React from 'react';
import './NavBar.css';

const NavBar = ( props ) => {

    return (
        <div className="navbar">
            <p className="navbar-title">NetflixRoulette</p>
            <button className="navbar-btn" onClick={props.handleClick}>{props.title}</button>
         </div>
    );
}

export default NavBar;
