import React from 'react';
import './Header.css';
import NavBar from '../NavBar/NavBar';
import SearchBar from '../SearchBar/SearchBar';

const Header = ( {showMovieModal} ) => {
    return (
        <div className="mainHeader">
            <NavBar showMovieModal={showMovieModal} />
            <SearchBar />
        </div>
    );
}

export default Header;
