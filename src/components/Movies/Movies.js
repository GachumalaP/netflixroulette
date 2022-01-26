import React from 'react';
import './Movies.css';
import ToggleGenre from '../ToggleGenre/ToggleGenre';
import SortMovies from '../SortMovies/SortMovies';
import MoviesList from '../MoviesList/MoviesList';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const Movies = () => {

    return (
        <div className="movies">
            <div className="genre">
                <ToggleGenre />
                <SortMovies />
            </div>
            <ErrorBoundary>
                <MoviesList />
            </ErrorBoundary>
            
        </div>
    );
}

export default Movies;
