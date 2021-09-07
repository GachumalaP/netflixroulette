import React, { useState } from 'react';
import './MovieCard.css';
import { connect, useDispatch } from 'react-redux';
import { fetchMovieById, showDeleteMovieModal, showEditMovieModal } from '../../redux/movie/movieActions';

const MovieCard = ( props ) => {
    
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
        dispatch(fetchMovieById(props.movie.id));
    }

    const defaultImage = (e) => {
        e.target.src = "https://s3-alpha-sig.figma.com/img/d1aa/af35/28ac5bd1a8440253c319d472993bdd34?Expires=1631491200&Signature=MKjoVSkJXBD~krs~xKOCWNP-8f8UciPGcTva-UopR3C5Fz-pt5PQQftjFBzLpYDgp4ZAGCqcegXycNx5f5JKV0TRDZrsQVTdBKsK4DwLbugk3r2rCf3Pb18ZonmPm9zPrGPaEL8vK8IcWNq09YG75yI24mKKuuUVetbu0wEx9ax9bJSycEfOlrVwwfdE~~nLv75JOJxA0-MY4ydPo42puwWFIm7nnCI~PPizlgXZx91Y7MFWl~3kLPpYcZrzg6cT8ftkfqNzORqDwYbxUPaN8WEfIT4L0394b7b4hsfvycMxLixvgAdAsX~uAGPDxuLJnIvhQ22-NuxDODn~Rfic5A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA";
    }

    return (
        <div 
            className="movie-card"
            onMouseOver={toggleMovieCardIcon}
            onMouseOut={toggleMovieCardIcon}
            onClick={() => renderMovieClick()}
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
                        return <span>{genre}</span>
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
