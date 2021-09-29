import React, { useState } from 'react';
import './MovieCard.css';
import { connect, useDispatch } from 'react-redux';
import { fetchMovieById, showDeleteMovieModal, showEditMovieModal } from '../../redux/movie/movieActions';
import { useHistory } from 'react-router-dom';
import poster from '../../utils/defaultPoster.jpg';
export const MovieCard = ( props ) => {

    const history = useHistory();
    const [ showMovieCardIcon, setshowMovieCardIcon ] = useState(false);

    const [ showMenu, setShowMenu ] = useState(false);

    const dispatch = useDispatch();

    const toggleMovieCardIcon = () => {
        setshowMovieCardIcon(!showMovieCardIcon)
    }
    
    const renderShowMenu = (event) => {
        event.stopPropagation();
        setShowMenu(true);
    }

    const hideShowMenu = (event) => {
        event.stopPropagation();
        setShowMenu(false);
    }

    const renderMovieClick = () => {
        history.push(`?movieId=${props.movie.id}`);
        dispatch(fetchMovieById(props.movie.id));
    }

    const defaultImage = (e) => {
        e.target.src = poster;
    }

    return (
        <div 
            className="movie-card"
            onMouseOver={toggleMovieCardIcon}
            onMouseOut={toggleMovieCardIcon}
            onClick={() => renderMovieClick()}
            data-testid={`movie-item-${props.movie.id}`}
        >
            <div className="movie-img-container" >
                <img className="card-img" src={props.movie.poster_path} alt="alt text" onError={defaultImage}></img>
                <button 
                    className={`movie-card-icon ${showMovieCardIcon === true && showMenu === false ? 'display-block' : 'display-none'}`}
                    onClick={renderShowMenu}
                >...
                </button>
                <div className={`movie-card-menu ${showMenu === true ? 'display-block': 'display-none'}`}>
                    <button onClick={hideShowMenu}>X</button>
                    <div className="movie-card-edit-delete">
                        <div className="edit"  onClick={()=>props.showEditMovieModal(props.movie)}>
                             Edit
                        </div>
                        <div className="delete" onClick={() =>props.showDeleteMovieModal(props.movie)}>
                            Delete
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-content">
                <div>
                    <h5 className="card-title">{props.movie.title}</h5>
                    <h5 className="card-year">{props.movie.release_date}</h5>
                </div>
                <span>
                    {props.movie.genres.map(genre => {
                        return <span key={genre}>{genre}</span>
                    })}
                </span>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        movieData: state.movie.movies
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        showEditMovieModal: (movie) => dispatch(showEditMovieModal(movie)),
        showDeleteMovieModal: (movie) => dispatch(showDeleteMovieModal(movie))
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);
