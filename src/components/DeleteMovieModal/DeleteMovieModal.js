import React from 'react';
import { connect } from 'react-redux';
import { deleteMovie } from '../../redux/movie/movieActions';
import './DeleteMovieModal.css';

const DeleteMovieModal = (props) => {
    return (
        <div className="delete-movie-modal">
            Are you sure want to delete this movie?
            <button onClick={() => props.deleteMovie(props.selectedMovie.id)}>Confirm</button>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        selectedMovie: state.movie.selectedMovie
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        deleteMovie : (movieId) => dispatch(deleteMovie(movieId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteMovieModal);