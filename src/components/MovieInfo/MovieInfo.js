import React, { useContext } from 'react';
import './MovieInfo.css';
import ViewMovieContext from '../../contexts/ViewMovieContext';
import NavBar from '../NavBar/NavBar';

const MovieInfo = () => {

    const movieInfo = useContext(ViewMovieContext);
    const selectedMovie = movieInfo.selectedMovie;

    return (
        <div className="movie-info-container">
            <NavBar title="search" handleClick = {movieInfo.hideMovieInfo}/>
            <div className="movie-info">
                <div className="img-container">
                    <img className="movie-img" src={selectedMovie.img} alt="Movie"></img>
                </div> 
                <div className="info-container">
                    <h1>{selectedMovie.title}</h1>
                    <span>{selectedMovie.genre}</span>
                    <div className="year-runtime-container">
                        <span>{selectedMovie.releaseYear}</span>
                        <span>2h43min</span>
                    </div>
                    <p> 
                    Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra
                    </p>
                </div>
            </div>
        </div>
        
    );
}

export default MovieInfo;
