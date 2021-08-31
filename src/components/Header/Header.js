import React, { useContext } from 'react';
import './Header.css';
import SearchBar from '../SearchBar/SearchBar';
import MovieInfo from '../MovieInfo/MovieInfo';
import ViewMovieContext from '../../contexts/ViewMovieContext';

const Header = ( props ) => {
    const movieInfo = useContext(ViewMovieContext);
    return (
        <div className="mainHeader">
            {movieInfo.viewMovieInfo === true ? <MovieInfo />: <SearchBar openMovieModal={props.handleClick} Search= {props.Search}/>}
        </div>
    );
}

export default Header;
