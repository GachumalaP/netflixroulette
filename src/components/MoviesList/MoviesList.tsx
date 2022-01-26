import React, { useEffect } from 'react';
import { useSelector, connect } from 'react-redux';
import './MoviesList.css';
import MovieCard from '../MovieCard/MovieCard';
import Modal from '../UI/Modal/Modal'
import MovieModalForm from '../MovieModalForm/MovieModalForm';
import DeleteMovieModal from '../DeleteMovieModal/DeleteMovieModal';
import MovieModalHeader from '../MovieModalHeader/MovieModalHeader';
import { useLocation, useParams } from 'react-router-dom';
import { fetchMovieById, 
         filterAndSortMoviesBySearchTermGenre,
         filterAndSortMoviesByGenre,
         filterAndSortMoviesBySearchTerm,
         filterMoviesBySearchTermAndGenre,
         filterMoviesBySearchTerm,
         filterMoviesByGenre,
         sortMovies,
         fetchMovies } from '../../redux/movie/movieActions';

interface paramTypes {
    searchTerm: string
}

interface MovieListProps {
    editMovieModal?: boolean,
    deleteMovieModal?: boolean,
    fetchMovieById : (movieId : Number) => void,
    filterAndSortMoviesBySearchTermGenre: (sort: string, searchTerm: string, filter: string) => void,
    filterAndSortMoviesByGenre: (sortBy: string, filterBy: string) => void
    filterAndSortMoviesBySearchTerm: (searchTerm: string, sortBy: string) => void,
    filterMoviesBySearchTermAndGenre: (searchTerm: string, filterBy: string) => void,
    filterMoviesBySearchTerm: (searchTerm: string) => void,
    filterMoviesByGenre: (genre : string) => void,
    sortMovies: (sortBy: string) => void,
    fetchMovies: () => void
}

const MoviesList: React.FC<MovieListProps> = ( props ) => {
    var {searchTerm} = useParams<paramTypes>();

    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    } 

    const query = useQuery();
    const sortByParam = query.get('sortBy');
    const filterParam = query.get('genre');
    const movieIdParam = query.get('movieId');

    useEffect(()=>{
        if(searchTerm && sortByParam !== null && filterParam){
            props.filterAndSortMoviesBySearchTermGenre(sortByParam, searchTerm, filterParam);
        }
        else if(searchTerm && sortByParam !== null){
            props.filterAndSortMoviesBySearchTerm(searchTerm, sortByParam);

        }
        else if(filterParam !== null && sortByParam !== null){
            props.filterAndSortMoviesByGenre(sortByParam, filterParam);
        }
        else if(searchTerm && filterParam !== null){
            props.filterMoviesBySearchTermAndGenre(searchTerm, filterParam);
        }
        else if(searchTerm){
            props.filterMoviesBySearchTerm(searchTerm);
        }
        else if(sortByParam){
            props.sortMovies(sortByParam);
        }
        else if(filterParam){
            props.filterMoviesByGenre(filterParam);
        }
        else if(movieIdParam !== null)
        {
            props.fetchMovieById(Number(movieIdParam))
        }
        else {
            props.fetchMovies();
        }
    },[]);

    const moviesData = useSelector((state: any) => state.movie)

    const renderMovies = () => {
        return moviesData.movies.map((movie)=>{
            return <MovieCard 
                key={movie.id}
                movie={movie} />
        });
    }
    
    return (
        <div className="movie-results">
            <h2>{moviesData.movies.length} movies found</h2>
            <div className="movies-list">
                {renderMovies()}
            </div>
            {
                props.editMovieModal ? 
                    <Modal>
                        <MovieModalHeader title="edit movie" />
                        <MovieModalForm />
                    </Modal> :
                    null
            }
            {
                props.deleteMovieModal ? 
                    <Modal>
                        <MovieModalHeader title="Delete movie" />
                        <DeleteMovieModal />
                    </Modal> : 
                    null
            }
        </div>
    );
}

const mapStateToProps = state => {
    return {
        editMovieModal : state.movie.editMovieModal,
        deleteMovieModal : state.movie.deleteMovieModal
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchMovieById: (movieId) => dispatch(fetchMovieById(movieId)),
        filterAndSortMoviesBySearchTermGenre : (sort, searchTerm, filter) => dispatch(filterAndSortMoviesBySearchTermGenre(sort, searchTerm, filter)),
        filterAndSortMoviesByGenre: (sortBy, filterBy) => dispatch(filterAndSortMoviesByGenre(sortBy, filterBy)),
        filterAndSortMoviesBySearchTerm: (searchTerm, sortBy) => dispatch(filterAndSortMoviesBySearchTerm(searchTerm, sortBy)),
        filterMoviesBySearchTermAndGenre: (searchTerm, filterBy) => dispatch(filterMoviesBySearchTermAndGenre(searchTerm, filterBy)),
        filterMoviesBySearchTerm: (searchTerm) => dispatch(filterMoviesBySearchTerm(searchTerm)),
        filterMoviesByGenre: (filterBy) => dispatch(filterMoviesByGenre(filterBy)),
        sortMovies: (sortBy) => dispatch(sortMovies(sortBy)),
        fetchMovies: () => dispatch(fetchMovies())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
