import React, {useState} from 'react';
import './MovieCard.css';


const MovieCard = ({movie, renderMovieModal} ) => {
    const [ showMovieCardIcon, setshowMovieCardIcon ] = useState(false);
    const [ showMenu, setShowMenu ] = useState(false);

    const toggleMovieCardIcon = () => {
        setshowMovieCardIcon(!showMovieCardIcon)
    }
    
    const renderShowMenu = () => {
        setShowMenu(true);
    }

    const hideShowMenu = () => {
        setShowMenu(false);
    }

    return (
        <div 
            className="movie-card"
            onMouseEnter={toggleMovieCardIcon}
            onMouseLeave={toggleMovieCardIcon}
            >
            <div className="movie-img-container">
                <img className="card-img" src={movie.img} alt="alt text"></img>
                <button 
                    className={`movie-card-icon ${showMovieCardIcon === true && showMenu === false ? 'display-block' : 'display-none'}`}
                    onClick={renderShowMenu}
                >...
                </button>
                <div className={`movie-card-menu ${showMenu === true ? 'display-block': 'display-none'}`}>
                    <button onClick={hideShowMenu}>X</button>
                    <div className="movie-card-edit-delete">
                        <div className="edit" onClick={()=>renderMovieModal(movie)}>
                             Edit
                        </div>
                        <div className="delete">
                            Delete
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-content">
                <div>
                    <h5 className="card-title">{movie.title}</h5>
                    <h5 className="card-year">{movie.releaseYear}</h5>
                </div>
                <h5 className="card-genre">{movie.genre}</h5>
            </div>
        </div>
    );
}

// MovieCard.propTypes = {
//     title: PropTypes.string.isRequired,
//     genre: PropTypes.string.isRequired,
//     releaseYear: PropTypes.number.isRequired
// }

export default MovieCard;
