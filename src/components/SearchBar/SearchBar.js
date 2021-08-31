import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import './SearchBar.css';

const SearchBar = ( props ) => {

    const [searchValue, setSearchValue] = useState("");

    const handleSearchValueChanges = (e) => {
        setSearchValue(e.target.value);
    }

    // const resetSearchValue = () => {
    //     setSearchValue("");
    // }

    const searchFunction = (e) => {
        e.preventDefault();
        props.Search(searchValue);
        // resetSearchValue();
    }

    return (
        <div className="search-bar-container">
            <NavBar handleClick={props.openMovieModal} title="+ ADD MOVIE"/>
            <h2 className="search-title">Find your movie</h2>
            <form className="search-form">
                <input className="search-form-input" 
                       type="text" 
                       placeholder="What do you want to watch?"
                       value={searchValue}
                       onChange={handleSearchValueChanges}
                />
                <input className="search-form-btn"
                       type="submit"
                       value="Search"
                       onClick={searchFunction} 
                />
            </form>
        </div>
    );
}

export default SearchBar;
