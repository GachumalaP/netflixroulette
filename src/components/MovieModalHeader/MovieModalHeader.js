import React from 'react';
import { connect } from 'react-redux';
import { hideMovieModal } from '../../redux/movie/movieActions';
import styles from './MovieModalHeader.module.css';

const MovieModalHeader = ( props ) => {
    return (
        <div>
            <button className={styles.close_modal_button} onClick={props.hideMovieModal}>X</button>
            <h2 className={styles.modal_title}>{props.title}</h2>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        movie : state.movie.movies
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        hideMovieModal : () => dispatch(hideMovieModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieModalHeader);