import { asyncFetchMovies, 
         asyncFetchMoviesBySearchTerm, 
         asyncSortMovies, 
         asyncFilterMoviesByGenre } from "../redux/movie/movieActions";

export const loadMovies = (store, req, match) => {
    if(match.params.searchTerm !== undefined){
        return store.dispatch(asyncFetchMoviesBySearchTerm(match.params.searchTerm));
    }
    else if(req.query.sortBy){
        return store.dispatch(asyncSortMovies(req.query.sortBy));
    }
    else if(req.query.filter){
        return store.dispatch(asyncFilterMoviesByGenre(req.query.filter));
    }
    else{
        return store.dispatch(asyncFetchMovies());
    }
}

