import React from 'react';
import './SortMovies.css';

const SortMovies = () => {
    return (
        <div className="sort-movies">
            <label className="label">Sort by:</label>
            <select className="select">
                <option value="release date">Release date</option>
                <option value="length">Length</option>
            </select>
        </div>
    );
}

export default SortMovies;
