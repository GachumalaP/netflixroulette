import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchMovies, filterMoviesBySearchTerm } from '../../redux/movie/movieActions';
import styles from './SearchBar.module.css';
import { useParams, useHistory } from 'react-router-dom';

const SearchBar = ( props ) => {
    var searchTerm = React.createRef();

    var urlParams = useParams();
    var searchParam = urlParams.searchTerm;
    const history = useHistory();

    useEffect(() => {
        if(searchParam){
            props.filterMoviesBySearchTerm(urlParams.searchTerm);
        }
        else{
            props.fetchMovies();
        }
    }, [searchParam])



    const searchFunction = () => {
        var inputTerm = searchTerm.current.value;
        if(inputTerm === ""){
            history.push('/search')
            props.fetchMovies();
        }
        else{
            history.push(`/search/${inputTerm}`)
            props.filterMoviesBySearchTerm(inputTerm);
        }
    }

    return (
        <div className={styles.search_bar_container}>
            <h2 className={styles.search_title}>Find your movie</h2>
            <div className={styles.search_form}>
                <input 
                    className={styles.search_form_input} 
                    ref={searchTerm} 
                    defaultValue={searchParam !== null ? searchParam : ""} 
                    placeholder="What do you want to watch?"/>
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
