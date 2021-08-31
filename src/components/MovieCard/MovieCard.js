import React, {useContext, useState} from 'react';
import './MovieCard.css';
import ViewMovieContext from '../../contexts/ViewMovieContext';

const MovieCard = ( props ) => {
    
    const [ showMovieCardIcon, setshowMovieCardIcon ] = useState(false);

    const [ showMenu, setShowMenu ] = useState(false);

    const movieInfo = useContext(ViewMovieContext)

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

    return (
        <div 
            className="movie-card"
            onMouseOver={toggleMovieCardIcon}
            onMouseOut={toggleMovieCardIcon}
            onClick={() => movieInfo.showMovieInfo(props.movie)}
        >
            <div className="movie-img-container" >
                <img className="card-img" src={props.movie.img} alt="alt text"></img>
                <button 
                    className={`movie-card-icon ${showMovieCardIcon === true && showMenu === false ? 'display-block' : 'display-none'}`}
                    onClick={renderShowMenu}
                >...
                </button>
                <div className={`movie-card-menu ${showMenu === true ? 'display-block': 'display-none'}`}>
                    <button onClick={hideShowMenu}>X</button>
                    <div className="movie-card-edit-delete">
                        <div className="edit"  onClick={()=>props.openEditMovieModal(props.movie)}>
                             Edit
                        </div>
                        <div className="delete" onClick={()=>props.openDeleteMovieModal(props.movie)}>
                            Delete
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-content">
                <div>
                    <h5 className="card-title">{props.movie.title}</h5>
                    <h5 className="card-year">{props.movie.releaseYear}</h5>
                </div>
                <h5 className="card-genre">{props.movie.genre}</h5>
            </div>
        </div>
    );
}

export default MovieCard;
