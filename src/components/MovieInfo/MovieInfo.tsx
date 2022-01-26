import React from 'react';
import './MovieInfo.css';
import { connect } from 'react-redux';
import { hideMovieInfo } from '../../redux/movie/movieActions';
import { Movie } from '../../shared/Movie';
import { useHistory } from 'react-router';

interface MovieInfoProps {
    selectedMovie: Movie,
    hideMovieInfo: () => void
}

const MovieInfo: React.FC<MovieInfoProps> = (props) => {

    const history = useHistory();
    

    const convertDuration = (num) => {
        var hours = (num / 60);
        var roundedhours = Math.floor(hours);
        var minutes = (hours - roundedhours) * 60;
        var rminutes = Math.round(minutes);
        return `${roundedhours}h ${rminutes}min`;
    }

    const getYear = (date) => {
        var input = date.split("-");
        var year = input[0];
        return year;
    }

    const handleSearch = () => {
        props.hideMovieInfo();
        history.push('/search');
    }

    return (
        <div className="movie-info-container">
            <div className="movie-info-header">
                <p className="movie-info-heading">Netflix<b>Roulette</b></p>
                <button className="movie-info-header-button" onClick={handleSearch}>Search</button>
            </div>
            <div className="movie-info">
                <div className="img-container">
                    <img className="movie-img" src={props.selectedMovie.poster_path} alt="Movie"></img>
                </div> 
                <div className="info-container">
                    <h1 className="info-title">{props.selectedMovie.title}</h1>
                    <span>{props.selectedMovie.genres}</span>
                    <div className="year-runtime-container">
                        <span>{getYear(props.selectedMovie.release_date)}</span>
                        <span>{convertDuration(props.selectedMovie.runtime)}</span>
                    </div>
                    <p>{props.selectedMovie.overview}</p>
                </div>
            </div>
        </div>
        
    );
}

const mapStateToProps = state => {
    return {
        selectedMovie: state.movie.selectedMovie
    }
}

const mapDispatchToProps = dispatch => {
    return {
        hideMovieInfo : () => dispatch(hideMovieInfo())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieInfo);
