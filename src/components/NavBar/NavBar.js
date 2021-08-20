import React from 'react';
import './NavBar.css';

const NavBar = ( {showMovieModal} ) => {

    return (
        <div className="navbar">
            <p className="navbar-title">NetflixRoulette</p>
            <button className="navbar-btn" onClick={showMovieModal}>+ Add Movies</button>
         </div>
    );
}

export default NavBar;
