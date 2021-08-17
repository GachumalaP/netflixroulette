import React from 'react';
import './MovieCard.css';
import PropTypes from 'prop-types';


const MovieCard = (props) => {

    return (
        <div className="movie-card">
            <img className="card-img" src={props.img} alt="alt text"></img>
            <div className="card-content">
                <div>
                    <h5 className="card-title">{props.title}</h5>
                    <h5 className="card-year">{props.releaseYear}</h5>
                </div>
                <h5 className="card-genre">{props.genre}</h5>
            </div>
        </div>
    );
}

MovieCard.propTypes = {
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseYear: PropTypes.number.isRequired
}

export default MovieCard;
