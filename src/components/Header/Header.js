import React from 'react';
import './Header.css';
import NavBar from '../NavBar/NavBar';
import SearchBar from '../SearchBar/SearchBar';

const Header = () => {
    return (
        <div className="mainHeader">
            <NavBar />
            <SearchBar />
        </div>
    );
}

export default Header;
