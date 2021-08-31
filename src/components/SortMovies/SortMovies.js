import React, {useState} from 'react';
import './SortMovies.css';

const SortMovies = ( props ) => {

    const [sortType, setSortType] = useState("releaseYear");

    const selectSortBy = (type) => {
        console.log(type);
        setSortType(type);
        props.SortMovies(sortType);
    }
    return (
        <div className="sort-movies">
            <label className="label">Sort by:</label>
            <select className="select" onChange={(e) => selectSortBy(e.target.value)}>
                <option value="releaseYear">Release year</option>
                <option value="length">Length</option>
                <option value="title">Title </option>
            </select>
        </div>
    );
}

export default SortMovies;
