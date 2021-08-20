import React, {useState} from 'react';
import './MoviesList.css';
import MovieCard from '../MovieCard/MovieCard';
import MovieModal from '../MovieModal/MovieModal';


const MoviesList = () => {
    const movies = [
        {
            id: 1,
            title: "Pulp Fiction",
            genre: "Action & Adventure",
            releaseYear: 2004,
            img: "https://live.staticflickr.com/4149/4845614710_1a32b982c7.jpg"

        },
        {
            id: 2,
            title: "Bohemian Rhapsody",
            genre: "Drama, Biography, Music",
            releaseYear: 2003,
            img: "https://upload.wikimedia.org/wikipedia/commons/8/83/Bohemian_Rhapsody_cast_on_MTV_Movies.jpg"

        },
        {
            id: 3,
            title: "Kill Bill: Vol 2",
            genre: "Oscar winning Movie",
            releaseYear: 1994,
            img: "https://live.staticflickr.com/3465/3883459553_abe790efb9_b.jpg"

        },
        {
            id: 4,
            title: "Avengers: War of Infinity",
            genre: "Action & Adventure",
            releaseYear: 2004,
            img: "https://live.staticflickr.com/955/26946446927_c111df87f3_b.jpg"

        },
        {
            id: 5,
            title: "Pulp Fiction",
            genre: "Action & Adventure",
            releaseYear: 2004,
            img: "https://live.staticflickr.com/4149/4845614710_1a32b982c7.jpg"

        },
        {
            id: 6,
            title: "Bohemian Rhapsody",
            genre: "Drama, Biography, Music",
            releaseYear: 2003,
            img: "https://upload.wikimedia.org/wikipedia/commons/8/83/Bohemian_Rhapsody_cast_on_MTV_Movies.jpg"

        },
        {
            id: 7,
            title: "Kill Bill: Vol 2",
            genre: "Oscar winning Movie",
            releaseYear: 1994,
            img: "https://live.staticflickr.com/3465/3883459553_abe790efb9_b.jpg"

        },
        {
            id: 8,
            title: "Avengers: War of Infinity",
            genre: "Action & Adventure",
            releaseYear: 2004,
            img: "https://live.staticflickr.com/955/26946446927_c111df87f3_b.jpg"

        }
    ]

    const [showMovieModal, setShowMovieModal] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState({});
    const renderMovieModal = (movie) => {
        setShowMovieModal(!showMovieModal);
        // console.log(movie);
        setSelectedMovie(movie);
    }

    return (
        <div className="movie-results">
            <h2> 10 movies found</h2>
            <div className="movies-list">
                {movies.map(movie => (
                        <MovieCard 
                            key={movie.id} d
                            movie={movie}
                            renderMovieModal={renderMovieModal}
                        />
                    ))}
            </div>
            <MovieModal 
                title="Edit Movie"
                handleClose={renderMovieModal}
                showMovieModal={showMovieModal}
                movie={selectedMovie}
            />
        </div>
        
    );
}

export default MoviesList;
