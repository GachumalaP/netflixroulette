import React from 'react';
import { connect } from 'react-redux';
import { fetchMovies, sortMovies } from '../../redux/movie/movieActions';
import './SortMovies.css';

const SortMovies = ( props ) => {

    const selectSortBy = (sortType) => {
        if(sortType === "")
        {
            props.fetchMovies();
        }
        else{
            props.sortMovies(sortType);
        }
    }

    return (
        <div className="sort-movies">
            <label className="label">Sort by:</label>
            <select className="select" onChange={(e) => selectSortBy(e.target.value)}>
                <option value="">--</option>
                <option value="release_date">Release year</option>
                <option value="vote_average">rating</option>
            </select>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        movies : state.movie.movies
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sortMovies : (sortValue) => dispatch(sortMovies(sortValue)),
        fetchMovies : () => dispatch(fetchMovies())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SortMovies);
