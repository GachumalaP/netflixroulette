import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchMovies, filterMoviesByGenre } from '../../redux/movie/movieActions';
import './ToggleGenre.css';
import { useLocation, useHistory } from 'react-router-dom';

interface ToggleGenreProps {
    filterMoviesByGenre: (genre: string) => void,
    fetchMovies : () => void
}

const ToggleGenre: React.FC<ToggleGenreProps> = ( props ) => {

    const genres = ['all', 'documentary', 'comedy', 'horror', 'crime'];
    const [genre, setGenre] = useState("all");

    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    }
    const history = useHistory();

    const query = useQuery();
    const genreQueryParam = query.get("genre");  

    useEffect(() => {
        if(genreQueryParam !== null) {
            setGenre(genreQueryParam);
        }
        else {
            setGenre(genre);
        }
    },[genre, genreQueryParam]);
    
    const handleClick = (genre) => {
        setGenre(genre);
        if(genre.toLowerCase() === 'all') {
            history.push('?genre=all');
            props.fetchMovies()
        }
        else {
            history.push(`?genre=${genre}`);
            props.filterMoviesByGenre(genre);
        }
    };

    const RenderButtons = () => {
        return genres.map((Genre)=> {
            return ( 
                <button key={`genre-${Genre}`} 
                        className= {`genre-button ${genre === Genre ? 'active' : ''}`} 
                        onClick={() => handleClick(Genre)}>
                            {Genre}
                </button>);
        });
    };

    return(
        <div className="genre-buttons">
            {RenderButtons()}
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
        filterMoviesByGenre : (genre) => dispatch(filterMoviesByGenre(genre)),
        fetchMovies: () => dispatch(fetchMovies())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToggleGenre);
