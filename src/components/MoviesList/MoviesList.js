import React, { useEffect } from 'react';
import { fetchMovies } from '../../redux/movie/movieActions';
import { useSelector, useDispatch, connect } from 'react-redux';
import './MoviesList.css';
import MovieCard from '../MovieCard/MovieCard';
import Modal from '../UI/Modal/Modal'
import MovieModalForm from '../MovieModalForm/MovieModalForm';
import DeleteMovieModal from '../DeleteMovieModal/DeleteMovieModal';
import MovieModalHeader from '../MovieModalHeader/MovieModalHeader';


const MoviesList = ( props ) => {

    const moviesData = useSelector(state => state.movie)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovies());
    },[]);

    const renderMovies = () => {
        return moviesData.movies.map((movie)=>{
            return <MovieCard 
                key={movie.id}
                movie={movie} />
        });
    }
    
    return (
        <div className="movie-results">
            <h2>{moviesData.movies.length} movies found</h2>
            <div className="movies-list">
                {renderMovies()}
            </div>
            {
                props.editMovieModal ? 
                    <Modal>
                        <MovieModalHeader title="edit movie" />
                        <MovieModalForm />
                    </Modal> :
                    null
            }
            {
                props.deleteMovieModal ? 
                    <Modal>
                        <MovieModalHeader title="Delete movie" />
                        <DeleteMovieModal />
                    </Modal> : 
                    null
            }
        </div>
    );
}

const mapStateToProps = state => {
    return {
        editMovieModal : state.movie.editMovieModal,
        deleteMovieModal : state.movie.deleteMovieModal
    }
}


export default connect(mapStateToProps)(MoviesList);
