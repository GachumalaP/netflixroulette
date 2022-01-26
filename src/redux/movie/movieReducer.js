import { FETCH_MOVIES_REQUEST, 
         FETCH_MOVIES_SUCCESS,
         FETCH_MOVIES_ERROR,
         FETCH_MOVIE_REQUEST,
         FETCH_MOVIE_SUCCESS,
         FETCH_MOVIE_ERROR, 
         HIDE_MOVIE_INFO,
         SHOW_ADDMOVIE_MODAL,
         HIDE_MOVIE_MODAL,
         SHOW_EDITMOVIE_MODAL,
         SHOW_DELETEMOVIE_MODAL,
         POST_MOVIE_SUCCESS,
         EDIT_MOVIE_SUCCESS,
         DELETE_MOVIE_SUCCESS
    } 
    from "./movieActionTypes";

export const initialState = {
    loading: false,
    movies: [],
    selectedMovie: {},
    movieInfo: false,
    addMovieModal: false,
    editMovieModal: false,
    deleteMovieModal: false,
    error: ''
}

const movieReducer = (state=initialState, action) => {
    switch(action.type) {
        case FETCH_MOVIES_REQUEST : return {
            ...state,
            loading: true
        }
        case FETCH_MOVIES_SUCCESS : return {
            ...state,
            loading: false,
            movies: action.payload,
            error: ''
        }
        case FETCH_MOVIES_ERROR : return {
            ...state,
            loading: false,
            movies: [],
            error: action.payload
        }
        case FETCH_MOVIE_REQUEST : return {
            ...state,
            loading: true,
            error:''
        }
        case FETCH_MOVIE_SUCCESS : return {
            ...state,
            loading: false, 
            selectedMovie: action.payload,
            movieInfo: true,
            error: ''
        }
        case FETCH_MOVIE_ERROR : return {
            ...state,
            loading: false,
            selectedMovie: {},
            error: action.payload
        }
        case POST_MOVIE_SUCCESS : return {
            ...state,
            movies: [action.payload, ...state.movies],
            addMovieModal: false
        }
        case EDIT_MOVIE_SUCCESS : return {
            ...state,
            movies: state.movies.map((movie) => {
                if(movie.id === action.payload.id) {
                    return action.payload
                }
                return movie
            }),
            editMovieModal: false
        }
        case DELETE_MOVIE_SUCCESS : return {
            ...state, 
            movies: state.movies.filter(movie => movie.id !== action.payload),
            deleteMovieModal: false
        }
        case HIDE_MOVIE_INFO: return {
            ...state,
            movieInfo: false
        }
        case SHOW_ADDMOVIE_MODAL: return {
            ...state,
            addMovieModal: true,
            selectedMovie: {}
        }
        case SHOW_EDITMOVIE_MODAL : return {
            ...state,
            editMovieModal: true,
            selectedMovie: action.payload
        }
        case SHOW_DELETEMOVIE_MODAL : return {
            ...state,
            deleteMovieModal: true
        }
        case HIDE_MOVIE_MODAL: return {
            ...state,
            addMovieModal: false,
            editMovieModal: false,
            deleteMovieModal: false,
        }
        default: return state
    }
}

export default movieReducer;