import React, {useState} from 'react';
import './MoviesList.css';
import MovieCard from '../MovieCard/MovieCard';
import MovieModal from '../MovieModal/MovieModal';
import MovieModalForm from '../MovieModalForm/MovieModalForm';
import DeleteMovieModal from '../DeleteMovieModal/DeleteMovieModal';


const MoviesList = ( props ) => {

    const [showEditMovieModal, setShowEditMovieModal] = useState(false);
    const [showDeleteMovieModal, setShowDeleteMovieModal] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState({});
    
    const openEditMovieModal = (movie) => {
        setShowEditMovieModal(true);
        setSelectedMovie(movie);
    }

    const closeEditMovieModal = () => {
        setShowEditMovieModal(false);
    }

    const openDeleteMovieModal = () => {
        setShowDeleteMovieModal(true);
    }

    const closeDeleteMovieModal = () => {
        setShowDeleteMovieModal(false);
    }

    const renderMovies = () => {
        return props.movies.map((movie)=>{
            return <MovieCard 
                key={movie.id}
                movie={movie}
                openEditMovieModal={openEditMovieModal}
                openDeleteMovieModal = {openDeleteMovieModal} />
        });
    }
    
    return (
        <div className="movie-results">
            <h2>{props.movies.length} movies found</h2>
            <div className="movies-list">
                {renderMovies()}
            </div>
            <MovieModal 
                title="Edit Movie"
                closeMovieModal={closeEditMovieModal}
                movieModal={showEditMovieModal}
                movie={selectedMovie}>
                    <MovieModalForm movie={selectedMovie}/>
            </MovieModal>
            <MovieModal 
                title="Delete Movie"
                closeMovieModal={closeDeleteMovieModal}
                movieModal = {showDeleteMovieModal}>
                    <DeleteMovieModal />
            </MovieModal>
        </div>
    );
}

export default MoviesList;
