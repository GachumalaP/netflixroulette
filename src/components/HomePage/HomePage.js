import React from 'react';
import { connect } from 'react-redux';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Movies from '../Movies/Movies';
import Modal from '../UI/Modal/Modal';
import MovieModalHeader from '../MovieModalHeader/MovieModalHeader';
import MovieModalForm from '../MovieModalForm/MovieModalForm';
import styles from './HomePage.module.css';
import MovieInfo from '../MovieInfo/MovieInfo';

const HomePage = (props) => {
    return (
        <div className={styles.home_page}>
                    {props.movieInfo ? <MovieInfo /> : <Header />}
                    <Movies />
                    <div className={styles.footer}>
                        <Footer>
                            <p className={styles.footer_heading}>
                                <b>Netflix</b>roulette
                            </p>
                        </Footer>
                    </div>
                    {props.addMovieModal ? 
                        <Modal>
                            <MovieModalHeader title="Add Movie"/>
                            <MovieModalForm />
                        </Modal> 
                        : null}
                </div>
    )
}

const mapStateToProps = state => {
    return {
        addMovieModal : state.movie.addMovieModal,
        movieInfo: state.movie.movieInfo
    }
}

export default connect(mapStateToProps)(HomePage);