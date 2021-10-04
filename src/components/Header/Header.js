import styles from './Header.module.css';
import SearchBar from '../SearchBar/SearchBar';
import MovieInfo from '../MovieInfo/MovieInfo';
import NavBar from '../NavBar/NavBar';
import { useSelector } from 'react-redux';

const Header = () => {
    const movieInfo = useSelector(state => state.movie.movieInfo);
    return (
        <div className={styles.main_header}>
            <div className={styles.header_content}>
                <NavBar title="+ ADD MOVIE"/>
                {movieInfo === true ? <MovieInfo />: <SearchBar />}
            </div> 
        </div>
    );
}

export default Header;
