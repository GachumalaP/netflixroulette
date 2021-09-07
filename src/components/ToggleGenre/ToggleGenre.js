import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchMovies, filterMoviesByGenre } from '../../redux/movie/movieActions';
import './ToggleGenre.css';

const ToggleGenre = ( props ) => {
    const genres = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];
    const [genre, setGenre] = useState("All");

    const handleClick = (genre) => {
        setGenre(genre);
        if(genre.toLowerCase() === 'all') {
            props.fetchMovies()
        }
        else {
            props.filterMoviesByGenre(genre);
        }
    };

    const RenderButtons = () => {
        return genres.map((Genre)=> {
            return ( 
                <button key={`genre-${Genre}`} 
                        className= {`genre-button ${genre === Genre ? 'active' : ''}`} 
                        onClick={() => handleClick(Genre)}>
                            {Genre}
                </button>);
        });
    };

    return(
        <div className="genre-buttons">
            {RenderButtons()}
        </div>

    );
}

const mapStateToProps = state => {
    return {
        movies: state.movie.movies
    }
}

const mapDispatchToProps = dispatch => {
    return {
        filterMoviesByGenre : (genre) => dispatch(filterMoviesByGenre(genre)),
        fetchMovies: () => dispatch(fetchMovies())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToggleGenre);
