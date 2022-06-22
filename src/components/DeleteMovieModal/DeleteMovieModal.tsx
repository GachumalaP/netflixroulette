import React from 'react';
import { connect } from 'react-redux';
import { deleteMovie } from '../../redux/movie/movieActions';
import './DeleteMovieModal.css';
import {Movie} from '../../shared/Movie';

interface DeleteMovieProps {
    deleteMovie: (movieId: Number) =>  void,
    selectedMovie: Movie
}

const DeleteMovieModal: React.FC<DeleteMovieProps> = (props) => {
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