import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
    return (
        <>
        <h2 className="search-title">Find your movie</h2>
        <form className="search-form">
                <input className="search-form-input" type="text" placeholder="What do you want to watch?" />
                <button className="search-form-btn" >SEARCH</button>
            </form>
        </>
    );
}

export default SearchBar;
