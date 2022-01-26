import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchMovies, filterMoviesBySearchTerm } from '../../redux/movie/movieActions';
import styles from './SearchBar.module.css';
import { useParams, useHistory } from 'react-router-dom';

interface paramTypes {
    searchTerm: string
}

interface SearchBarProps {
    fetchMovies : () => void,
    filterMoviesBySearchTerm : (searchTerm: string) => void

}

export const SearchBar: React.FC<SearchBarProps> = ( props ) => {
    var {searchTerm} = useParams<paramTypes>();
    const history = useHistory();

    const [searchInput, setSearchInput] = useState('');

    useEffect(() => {
        if(searchTerm){
            setSearchInput(searchTerm); 
        }
        else{
            setSearchInput('');
        }
    },[searchTerm])

    const searchFunction = () => {
        if(searchInput === ""){
            props.fetchMovies();
            history.push('/search')
        }
        else{
            props.filterMoviesBySearchTerm(searchInput);
            history.push(`/search/${searchInput}`);
        }
    }

    return (
        <div className={styles.search_bar_container}>
            <h2 className={styles.search_title}>Find your movie</h2>
            <div className={styles.search_form}>
                <input
                    title="inputField"
                    className={styles.search_form_input} 
                    onChange={(e) => setSearchInput(e.target.value)}
                    value={searchInput} 
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
        filterMoviesBySearchTerm : (inputValue) => dispatch(filterMoviesBySearchTerm(inputValue)),
        fetchMovies : () => dispatch(fetchMovies()) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
