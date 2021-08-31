import React from 'react';
import './Movies.css';
import ToggleGenre from '../ToggleGenre/ToggleGenre';
import SortMovies from '../SortMovies/SortMovies';
import MoviesList from '../MoviesList/MoviesList';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const Movies = ( props ) => {

    return (
        <div className="movies">
            <div className="genre">
                <ToggleGenre ToggleGenre={props.ToggleGenre} />
                <SortMovies SortMovies={props.SortMovies} />
            </div>
            <ErrorBoundary>
                <MoviesList movies={props.movies}/>
            </ErrorBoundary>
            
        </div>
    );
}

export default Movies;
