import React, { useState } from 'react';
import Header from '../Header/Header';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer';
import MovieModal from '../MovieModal/MovieModal';

const HomePage = () => {
    const [movieModal, setMovieModal] = useState(false);

    const showMovieModal = () => {
        setMovieModal(true);
    }

    const hideMovieModal = () => {
        setMovieModal(false);
    }

    return (
        <>
            <Header showMovieModal={showMovieModal}/>
            <Movies />
            <div className="footer">
                <Footer> 
                    <p className="footer-heading"><b>Netflix</b>roulette</p>
                </Footer>
            </div>
            <MovieModal title="Add Movie" showMovieModal={movieModal} handleClose={hideMovieModal} />
        </>
    );
}

export default HomePage;