import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchMovies, sortMovies } from '../../redux/movie/movieActions';
import './SortMovies.css';
import { useLocation, useHistory } from 'react-router-dom';

interface SortMovieProps {
    sortMovies: (sortType: string) =>  void,
    fetchMovies: () => void
}

const SortMovies: React.FC<SortMovieProps> = ( props ) => {

    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    }

    const history = useHistory();

    const query = useQuery();
    const sortByQueryParam = query.get("sortBy");

    useEffect(()=>{
        if(sortByQueryParam !== null){
            props.sortMovies(sortByQueryParam);
        }

    },[sortByQueryParam])

    const selectSortBy = (sortType) => {
        if(sortType === "")
        {
            props.fetchMovies();
        }
        else{
            history.push(`?sortBy=${sortType}`);
            props.sortMovies(sortType);
        }
    }

    return (
        <div className="sort-movies">
            <label className="label">Sort by:</label>
            <select className="select" value={sortByQueryParam ? sortByQueryParam : ""} onChange={(e) => selectSortBy(e.target.value)}>
                <option value="">--</option>
                <option value="release_date">Release year</option>
                <option value="vote_average">rating</option>
            </select>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        movies : state.movie.movies
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sortMovies : (sortValue) => dispatch(sortMovies(sortValue)),
        fetchMovies : () => dispatch(fetchMovies())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SortMovies);
