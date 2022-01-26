import React from 'react';
import { connect } from 'react-redux';
import { hideMovieInfo, showAddMovieModal } from '../../redux/movie/movieActions';
import styles from'./NavBar.module.css';

const NavBar = ( props ) => {

    return (
        <div className={styles.navbar}>
            <p className={styles.navbar_title}><b>netflix</b>Roulette</p>
            <button className={styles.navbar_btn} onClick={props.showAddMovieModal}>{props.title}</button>
         </div>
    );
}

const mapStateToProps = state => {
    return {
        addMovieModal : state.movie.addMovieModal
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        showAddMovieModal : () => dispatch(showAddMovieModal()),
        hideMovieInfo : () => dispatch(hideMovieInfo())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
