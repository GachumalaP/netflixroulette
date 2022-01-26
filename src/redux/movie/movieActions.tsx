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


export const fetchMoviesRequest = () => {
    return {
        type: FETCH_MOVIES_REQUEST
    }
}

export const fetchMoviesSuccess = (movies) => {
    return {
        type: FETCH_MOVIES_SUCCESS,
        payload: movies
    }
}

export const fetchMoviesError = (error) => {
    return {
        type: FETCH_MOVIES_ERROR,
        payload: error
    }
}

export const fetchMovieRequest = () => {
    return {
        type: FETCH_MOVIE_REQUEST
    }
}

export const fetchMovieSuccess = (movie) => {
    return {
        type: FETCH_MOVIE_SUCCESS,
        payload: movie
    }
}

export const fetchMovieError = error => {
    return {
        type: FETCH_MOVIE_ERROR,
        payload: error
    }
}

export const postMovieSuccess = (movie) => {
    return {
        type: POST_MOVIE_SUCCESS,
        payload: movie
    }
}

export const editMovieSuccess = movie => {
    return {
        type: EDIT_MOVIE_SUCCESS,
        payload: movie
    }
}

export const deleteMovieSuccess = movieId => {
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

export const showDeleteMovieModal = () => {
    return {
        type: SHOW_DELETEMOVIE_MODAL,
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

export function asyncFetchMovies() {
    return async (dispatch) => {
        const res = await axios.get('http://localhost:4000/movies');
        const moviesData = res.data.data;
        dispatch(fetchMoviesSuccess(moviesData));
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

export const asyncFilterMoviesByGenre = (genre) => {
    return async (dispatch) => {
        dispatch(fetchMoviesRequest());
        const res = await axios.get(`http://localhost:4000/movies?filter=${genre}`);
        const filteredMovies = res.data.data;
        dispatch(fetchMoviesSuccess(filteredMovies));
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

export const asyncFetchMoviesBySearchTerm = (searchTerm) => {
    return async (dispatch) => {
        dispatch(fetchMoviesRequest())
        const res = await axios.get(`http://localhost:4000/movies?search=${searchTerm}&searchBy=title`);
        const filteredMovies = res.data.data;
        dispatch(fetchMoviesSuccess(filteredMovies));
    }
}

export const filterMoviesBySearchTermAndGenre = (searchTerm, genre) => {
    return(dispatch) => {
        dispatch(fetchMoviesRequest());
        axios.get(`http://localhost:4000/movies?search=${searchTerm}&searchBy=title&filter=${genre}`)
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

export const asyncFilterMoviesBySearchTermAndGenre = (searchTerm, filterByGenre) => {
    return async (dispatch) => {
        dispatch(fetchMoviesRequest())
        const res = await axios.get(`http://localhost:4000/movies?search=${searchTerm}&searchBy=title&filter=${filterByGenre}`);
        const filteredMovies = res.data.data;
        dispatch(fetchMoviesSuccess(filteredMovies));
    }
}

export const filterAndSortMoviesBySearchTerm = (searchTerm, sortByValue) => {
    return (dispatch) => {
        dispatch(fetchMoviesRequest());
        axios.get(`http://localhost:4000/movies?sortBy=${sortByValue}&sortOrder=desc&search=${searchTerm}&searchBy=title`)
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

export const asyncFilterAndSortMoviesBySearchTerm = (searchTerm, sortByValue) => {
    return async (dispatch) => {
        dispatch(fetchMoviesRequest());
        const res = await axios.get(`http://localhost:4000/movies?sortBy=${sortByValue}&sortOrder=desc&search=${searchTerm}&searchBy=title`);
        const filteredMovies = res.data.data;
        dispatch(fetchMoviesSuccess(filteredMovies));
    }
}
 
export const filterAndSortMoviesByGenre = (sortByValue, filterByGenre) => {
    return (dispatch) => {
        dispatch(fetchMoviesRequest());
        axios.get(`http://localhost:4000/movies?sortBy=${sortByValue}&sortOrder=desc&filter=${filterByGenre}`)
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

export const asyncFilterAndSortMoviesByGenre = (sortByValue, filterByGenre) => {
    return async (dispatch) => {
        dispatch(fetchMoviesRequest());
        const res = await axios.get(`http://localhost:4000/movies?sortBy=${sortByValue}&sortOrder=desc&filter=${filterByGenre}`);
        const filteredMovies = res.data.data;
        dispatch(fetchMoviesSuccess(filteredMovies));
    }
}

// filter and sort movies by sortBy, searchTerm, genre
export const filterAndSortMoviesBySearchTermGenre = (sortByValue, searchTerm, filterByGenre) => {
    return (dispatch) => {
        dispatch(fetchMoviesRequest());
        axios.get(`http://localhost:4000/movies?sortBy=${sortByValue}&sortOrder=desc&search=${searchTerm}&searchBy=title&filter=${filterByGenre}`)
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
 
//async fn for filter and sort movies by searchTerm, genre, sortBy 
export const asyncFilterAndSortMoviesBySearchTermGenre = (sortByValue, searchTerm, filterByGenre) => {
    return async (dispatch) => {
        dispatch(fetchMoviesRequest());
        const res = await axios.get(`http://localhost:4000/movies?sortBy=${sortByValue}&sortOrder=desc&search=${searchTerm}&searchBy=title&filter=${filterByGenre}`);
        const filteredMovies = res.data.data;
        dispatch(fetchMoviesSuccess(filteredMovies));
    }
}

//sort movies
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

// async fn for sort movies 
export const asyncSortMovies = (sortByValue) => {
    return async (dispatch) => {
        dispatch(fetchMoviesRequest());
        const res = await axios.get(`http://localhost:4000/movies?sortBy=${sortByValue}&sortOrder=desc`);
        const sortedMovies = res.data.data;
        dispatch(fetchMoviesSuccess(sortedMovies));
    }
}

//post movie 
export const postMovie = movieObj => {
    return (dispatch) => {
        axios.post('http://localhost:4000/movies', movieObj)
            .then(response => {
                const addedMovie = response.data
                dispatch(postMovieSuccess(addedMovie))
            })
            .catch(error => {
                console.log(error)
            });
    }
}

//edit movie 
export const editMovie = movieObj => {
    return (dispatch) => {
        axios.put('http://localhost:4000/movies', movieObj)
            .then(response => {
                const editedMovie = response.data;
                dispatch(editMovieSuccess(editedMovie));
            })
            .catch(error => {   
                console.log(error)
            });
    }
}

//delete movie 
export const deleteMovie = movieId => {
    return (dispatch) => {
        axios.delete(`http://localhost:4000/movies/${movieId}`)
            .then(response => {
                dispatch(deleteMovieSuccess(movieId))
            })
            .catch(error => {
                console.log(error);
            });
    }
}