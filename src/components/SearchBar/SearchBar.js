import React from 'react';
import { connect } from 'react-redux';
import { fetchMovies, filterMoviesBySearchTerm } from '../../redux/movie/movieActions';
import styles from './SearchBar.module.css';

const SearchBar = ( props ) => {

    var searchTerm = React.createRef();

    const searchFunction = () => {
        var inputTerm = searchTerm.current.value;
        if(inputTerm === ""){
            props.fetchMovies();
        }
        else{
            props.filterMoviesBySearchTerm(inputTerm);
        }
    }

    return (
        <div className={styles.search_bar_container}>
            <h2 className={styles.search_title}>Find your movie</h2>
            <div className={styles.search_form}>
                <input className={styles.search_form_input} ref={searchTerm} placeholder="Type a message..." />
                <button className={styles.search_form_btn} onClick={searchFunction}>Search</button>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        movies: state.movie.movies
    }
}

const mapDispatchToProps = dispatch => {
    return {
        filterMoviesBySearchTerm : (searchTerm) => dispatch(filterMoviesBySearchTerm(searchTerm)),
        fetchMovies : () => dispatch(fetchMovies()) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
