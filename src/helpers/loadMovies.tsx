import { asyncFetchMovies, 
         asyncFetchMoviesBySearchTerm, 
         asyncSortMovies, 
         asyncFilterMoviesByGenre,
         asyncFilterMoviesBySearchTermAndGenre,
         asyncFilterAndSortMoviesBySearchTermGenre,
         asyncFilterAndSortMoviesBySearchTerm,
         asyncFilterAndSortMoviesByGenre } from "../redux/movie/movieActions";

export const loadMovies = (store, req, match) => {
    if(match.params.searchTerm !== undefined && req.query.filter && req.query.sortBy){
        return store.dispatch(asyncFilterAndSortMoviesBySearchTermGenre(req.query.sortBy, match.params.searchTerm, req.query.filter));
    }
    else if(match.params.searchTerm !== undefined && req.query.filter){
        return store.dispatch(asyncFilterMoviesBySearchTermAndGenre(match.params.searchTerm, req.query.filter));
    }
    else if (match.params.searchTerm !== undefined && req.query.sortBy){
        return store.dispatch(asyncFilterAndSortMoviesBySearchTerm(match.params.searchTerm, req.query.sortBy));
    }
    else if (req.query.sortBy && req.query.filter){
        return store.dispatch(asyncFilterAndSortMoviesByGenre(req.query.sortBy, req.query.filter));
    }
    else if(req.query.sortBy){
        return store.dispatch(asyncSortMovies(req.query.sortBy));
    }
    else if(req.query.filter){
        return store.dispatch(asyncFilterMoviesByGenre(req.query.filter));
    }
    else if(match.params.searchTerm !== undefined){
        return store.dispatch(asyncFetchMoviesBySearchTerm(match.params.searchTerm));
    }
    else{
        return store.dispatch(asyncFetchMovies());
    }
}
