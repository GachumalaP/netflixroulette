import React from 'react';
import { connect } from 'react-redux';
import { showAddMovieModal } from '../../redux/movie/movieActions';
import styles from'./NavBar.module.css';

interface NavBarProps {
    title: string,
    showAddMovieModal: () => void
}

const NavBar: React.FC<NavBarProps> = ( props ) => {

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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
