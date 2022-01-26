import { initialState } from "../movieReducer";
import movieReducer from '../movieReducer';
import {fetchMoviesRequest, 
        fetchMoviesSuccess,
        fetchMoviesError,
        fetchMovieRequest,
        fetchMovieSuccess,
        fetchMovieError, 
        postMovieSuccess,
        editMovieSuccess,
        deleteMovieSuccess,
        hideMovieInfo,
        showAddMovieModal,
        showEditMovieModal,
        showDeleteMovieModal,
        hideMovieModal
    } from '../movieActions';
import {error, movies, movie, postMovie, editMovie, deleteMovieId} from '../mockdata'

describe('testing movie reducer', () => {
    it('should return initial state', ()=> {
        expect(movieReducer(initialState,{}))
        .toEqual(initialState);
    });

    it('should return loading', () => {
        expect(movieReducer(initialState,fetchMoviesRequest()))
        .toEqual({...initialState, loading: true});
    });
    it('should return list of movies', () => {
        expect(movieReducer(initialState,fetchMoviesSuccess(movies)))                       
        .toEqual({...initialState, loading: false, movies: movies});
    });
    it('should return error when fetch all movies fail', () => {
        expect(movieReducer(initialState,fetchMoviesError(error)))
        .toEqual({...initialState, loading: false, movies: [], error: error});
    });
    it('should return loading', () => {
        expect(movieReducer(initialState, fetchMovieRequest()))
        .toEqual({...initialState, loading: true, error: ''});
    });
    it('should return movie', () => {
        expect(movieReducer(initialState, fetchMovieSuccess(movie)))
        .toEqual({...initialState, loading: false, selectedMovie: movie, movieInfo: true, error:''});
    });
    it('should return error when fetch movie fails', () => {
        expect(movieReducer(initialState, fetchMovieError(error)))
        .toEqual({...initialState, loading: false, selectedMovie: {}, error: error });
    });
    it('should post movie', () => {
        expect(movieReducer(initialState, postMovieSuccess(postMovie)))
        .toEqual({...initialState, movies: [postMovie, ...initialState.movies], addMovieModal:false});
    });
    it('should update and return movie info', () => {
        expect(movieReducer(initialState, editMovieSuccess(editMovie)))
        .toEqual({...initialState, 
                  movies: initialState.movies.map( movie => 
                    {
                        if(movie.id === postMovie.id){
                            return postMovie
                        }
                        return movie
                    }), 
                editMovieModal: false});
    });
    it('should delete movie from movies', () => {
        expect(movieReducer(initialState, deleteMovieSuccess(deleteMovieId)))
        .toEqual({...initialState,
                  movies: initialState.movies.filter(movie => movie.id !== deleteMovieId),
                  deleteMovieModal: false
                });
    });
    it('should hide movie modal', () => {
        expect(movieReducer(initialState, hideMovieModal()))
        .toEqual({...initialState, addMovieModal: false, editMovieModal: false, deleteMovieModal: false});
    });
    it('should hide movie info', () => {
        expect(movieReducer(initialState, hideMovieInfo()))
        .toEqual({...initialState, movieInfo: false});
    });
    it('should show add movie modal', () => {
        expect(movieReducer(initialState, showAddMovieModal()))
        .toEqual({...initialState, addMovieModal: true, selectedMovie: {}});
    });
    it('should show edit movie modal', () => {
        expect(movieReducer(initialState, showEditMovieModal(editMovie)))
        .toEqual({...initialState, editMovieModal: true, selectedMovie: editMovie});
    });
    it('should show delete movie modal', () => {
        expect(movieReducer(initialState, showDeleteMovieModal(movie)))
        .toEqual({...initialState, deleteMovieModal: true});
    });
})
