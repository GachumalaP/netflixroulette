import axios from "axios";
import { FETCH_MOVIES_REQUEST, 
         FETCH_MOVIES_SUCCESS, 
         FETCH_MOVIES_ERROR,
         FETCH_MOVIE_REQUEST,
         FETCH_MOVIE_SUCCESS,
         FETCH_MOVIE_ERROR,
         HIDE_MOVIE_INFO,
         SHOW_ADDMOVIE_MODAL,
         SHOW_EDITMOVIE_MODAL,
         SHOW_DELETEMOVIE_MODAL,
         HIDE_MOVIE_MODAL,
         POST_MOVIE_SUCCESS,
         EDIT_MOVIE_SUCCESS,
         DELETE_MOVIE_SUCCESS
        } 
    from "./movieActionTypes";


const fetchMoviesRequest = () => {
    return {
        type: FETCH_MOVIES_REQUEST
    }
}

const fetchMoviesSuccess = (movies) => {
    return {
        type: FETCH_MOVIES_SUCCESS,
        payload: movies
    }
}

const fetchMoviesError = (error) => {
    return {
        type: FETCH_MOVIES_ERROR,
        payload: error
    }
}

const fetchMovieRequest = () => {
    return {
        type: FETCH_MOVIE_REQUEST
    }
}

const fetchMovieSuccess = (movie) => {
    return {
        type: FETCH_MOVIE_SUCCESS,
        payload: movie
    }
}

const fetchMovieError = error => {
    return {
        type: FETCH_MOVIE_ERROR,
        payload: error
    }
}

const postMovieSuccess = (movie) => {
    return {
        type: POST_MOVIE_SUCCESS,
        payload: movie
    }
}

const editMovieSuccess = movie => {
    return {
        type: EDIT_MOVIE_SUCCESS,
        payload: movie
    }
}

const deleteMovieSuccess = movieId => {
    return {
        type: DELETE_MOVIE_SUCCESS,
        payload: movieId
    }
}

export const hideMovieInfo = () => {
    return {
        type: HIDE_MOVIE_INFO
    }
}

export const showAddMovieModal = () => {
    return {
        type: SHOW_ADDMOVIE_MODAL
    }
}

export const showEditMovieModal = (movie) => {
    return {
        type: SHOW_EDITMOVIE_MODAL,
        payload: movie
    }
}

export const showDeleteMovieModal = (movie) => {
    return {
        type: SHOW_DELETEMOVIE_MODAL,
        payload: movie
    }
}

export const hideMovieModal = () => {
    return {
        type: HIDE_MOVIE_MODAL
    }
}


export const fetchMovies = () => {
    return (dispatch) => {
        dispatch(fetchMoviesRequest());
        axios.get('http://localhost:4000/movies')
            .then(response => {
                const moviesData = response.data.data;
                dispatch(fetchMoviesSuccess(moviesData));
            })
            .catch(error => {
                const errorMessage = error.message;
                dispatch(fetchMoviesError(errorMessage));
            });
    }
}

export const fetchMovieById = (id) => {
    return (dispatch) => {
        dispatch(fetchMovieRequest());
        axios.get(`http://localhost:4000/movies/${id}`)
            .then(response => {
                const selectedMovie = response.data;
                dispatch(fetchMovieSuccess(selectedMovie));
            })
            .catch(error => {
                const errorMessage = error.message;
                dispatch(fetchMovieError(errorMessage));
            });
    }
}

export const filterMoviesByGenre = (genre) => {
    return (dispatch) => {
        dispatch(fetchMoviesRequest());
        axios.get(`http://localhost:4000/movies?filter=${genre}`)
            .then(response => {
                const filteredMovies = response.data.data;
                dispatch(fetchMoviesSuccess(filteredMovies));
            })
            .catch(error => {
                const errorMessage = error.message;
                dispatch(fetchMoviesError(errorMessage));
            });
    }
}

export const filterMoviesBySearchTerm = (searchTerm) => {
    return (dispatch) => {
        dispatch(fetchMoviesRequest()) ;
        axios.get(`http://localhost:4000/movies?search=${searchTerm}&searchBy=title`)
            .then(response => {
                const filteredMovies = response.data.data;
                dispatch(fetchMoviesSuccess(filteredMovies));
            })
            .catch(error => {
                const errorMessage = error.message;
                dispatch(fetchMoviesError(errorMessage));
            });
    }
}

export const sortMovies = (sortByValue) => {
    return (dispatch) => {
        dispatch(fetchMoviesRequest());
        axios.get(`http://localhost:4000/movies?sortBy=${sortByValue}&sortOrder=desc`)
            .then(response => {
                const sortedMovies = response.data.data;
                dispatch(fetchMoviesSuccess(sortedMovies));
            })
            .catch(error => {
                const errorMessage = error.message;
                dispatch(fetchMoviesError(errorMessage));
            });
    }
}

export const postMovie = movieObj => {
    return (dispatch) => {
        axios.post('http://localhost:4000/movies', movieObj)
            .then(response => {
                const addedMovie = response.data
                dispatch(postMovieSuccess(addedMovie))
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export const editMovie = movieObj => {
    return (dispatch) => {
        axios.put('http://localhost:4000/movies', movieObj)
            .then(response => {
                const editedMovie = response.data;
                dispatch(editMovieSuccess(editedMovie));
            })
            .catch(error => {   
                console.log(error)
            })
    }

}

export const deleteMovie = movieId => {
    return (dispatch) => {
        axios.delete(`http://localhost:4000/movies/${movieId}`)
            .then(response => {
                dispatch(deleteMovieSuccess(movieId))
            })
            .catch(error => {
                console.log(error);
            })
    }
}