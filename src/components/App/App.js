import './App.css';
import React, { useState } from 'react';
import Header from '../Header/Header';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer';
import MovieModal from '../MovieModal/MovieModal';
import MovieModalForm from '../MovieModalForm/MovieModalForm';
import ViewMovieContext from '../../contexts/ViewMovieContext';

function App() {
  const [movieModal, setMovieModal] = useState(false);

  const [viewMovieInfo, setViewMovieInfo] = useState(false);

  const [selectedMovie, setSelectedMovie] = useState({});

  const showMovieModal = () => {
      setMovieModal(true);
  }

  const hideMovieModal = () => {
      setMovieModal(false);
  }

  const showMovieInfo = (movie) => {
      setSelectedMovie(movie);
      setViewMovieInfo(true);
  }

  const hideMovieInfo = () => {
      setViewMovieInfo(false);
  }

  const moviesData = [
      {
          id: 1,
          title: "Pulp Fiction",
          genre: "Action & Adventure",
          releaseYear: 2004,
          length: 164,
          img: "https://s3-alpha-sig.figma.com/img/89fa/22b0/9af0f226591250d0c0dc45e952d8c0a6?Expires=1630886400&Signature=TnLPPQsOP79g6KPwdKqIqB6GvWEcEBBmXuPfscpkoytY2UeXtTtlDPYGvPd2rZZ-7tY1QwPrrmuTc0r2cTuhNR9MbwEh4-PJqFwo7Pv1zI8cQsGZp2vqHiKafYgoPwgzJl5xeFrzSNjGEbOggU8303iPOsrhwyF0JCK5AqNRnELkNx2RZcPq9-pKZATmu8Xu4gmeymKqr4bOqXWLpkojatiaNDZsbdZ5yZBZwx9pKeY7-EC7A~~WDqAkyj~tg7m30laOWshca6QGmpj4iKM2rYyle7VYTNct2W1puypXHlsoceO9iWEK7tqVMcgYN587S2Z4TTaytIeEkNlpmBIDbw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
      },
      {
          id: 2,
          title: "Bohemian Rhapsody",
          genre: "Drama, Biography, Music",
          releaseYear: 2003,
          length: 152,
          img: "https://s3-alpha-sig.figma.com/img/aa4f/8cf6/f7fefb9582bc23c7847baf1f5f863fb0?Expires=1630886400&Signature=AWcv~8GJfwypFjEw6FX-i-wBVSy1cJVZ7UVJcJWzWMRJNJ0cRKksZzlOtSwjz80hyXsJ~MDlq8HDdA~WYEbHv~t84WL7Tq8i4MSH-PY58koDmwabbRhPlUcKVnS4XAU9ZeOcRFvvLKHib7B~Cc6AaOjK8C5iwLHTwaZRp2sUtV6QiyrnJRSfEsbA7yzr9uv6HksWsEG1Z025PileMv0jr2HFxiN29mt112U4wyOaPLo6vaKUDdeYqTQjOYEg3f~Jmb8Kbq~a4GEsT1gHjT8HXMo2dbZ9x8zY9JOdj1gh1l1d3Q7UhYtm84zNgd8ykCmMiyL-CBjjFr2NIC2YRxZzsQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
      },
      {
          id: 3,
          title: "Kill Bill: Vol 2",
          genre: "Comedy",
          releaseYear: 1994,
          length: 100,
          img: "https://s3-alpha-sig.figma.com/img/d1aa/af35/28ac5bd1a8440253c319d472993bdd34?Expires=1630886400&Signature=ChodUndJMJG0ccl~OfcBk5B7QjTkDGBp9q8ByX9n4bGIxza~qxOxvtcECyAg9iMUehMAg538tubVim6ZKzKWIV8btjKEls5JtstJcy0UPEX9dNuhQbPsmT2zWO1~CHhQ1j14fNp1IbipkiCBL0A9D12tZB3g7IGW0Vh6qaukSWGf40KviHYEIuzN-KCg44fDSoBhQpWNnmXvMorA-DePWMYYKKdP1tVIFydpKzRR6uWXA2MnIGqQ0Mvqu7GstQTFISSp~c95aqgLbeoorEC-YlU--Twg4OzYKzGzWtmVVtGN88VoIQiSRd7hRfr5lBj99qwQ50w8GEAKIrNHH46-8w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"

      },
      {
          id: 4,
          title: "Avengers: War of Infinity",
          genre: "Action & Adventure",
          releaseYear: 2004,
          length: 90,
          img: "https://s3-alpha-sig.figma.com/img/8a50/2031/548f3138d22415951b158abd0da40193?Expires=1630886400&Signature=fsIErnopa7BYiepIzPQUjL~XRfIoZeTjVR2ys7c1NWNRSLz~o5v1FNBMR2v69SNn9HBN6sVgzBunTuH1xXFZ6mVySrVS4ZKLTvdFYCBlzAvX94mFNQ87p1NH5rZpI8DER3uiPGhEG5iVQZu3gLpPko8zpqLJe6r5OfRQRekpP0lgQm3qDJg3j-aK0i~UOV0JfFbWAD3H5AIb~8oTo4-9cG3WazODjUIQAFV7uD1rtXvs3MLY6Ktr~ETSTZrZNmbOdpKICxfDrSc24uQkiVJkKz3C61XFN4SKwihaT3owh0SbxdbbaziaDbvpdnnAOVxIDGO3PSxx8vgl50u~dpkGOg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
      },
      {
          id: 5,
          title: "Inception",
          genre: "Crime & Adventure",
          releaseYear: 2004,
          length: 180,
          img: "https://s3-alpha-sig.figma.com/img/d701/811a/217633f55a6713086b98c86f110c5d75?Expires=1630886400&Signature=HmylqdPMtkhCuqCm23NcDesF48zIGTar84aPmWegdtD2rs20A~I2NUk9ETtI2hfLnvpeKDQm0-ZfVTfQuWCQW0KHgnq1PaR33U62NBTtueCD~kdjXldJ7Vyu-qi5zvLbqqASb7mWl~8Vvx5gdi319Pv5-kLLUS9hK0IF0JtBp~dMSEDxsCAAsi9mMiSuFGmmTl~Eu38o9GGwObA~aKoWw~64iAeRsShx4IlLqr6rY77GwNQzlwu75gPzKu23Dzmkf6p~Em6eAPen22S3-K468B0GxgghnYM4j6s6n0h1oYfWXIk3XE45sdr~eZ725ItxtkAWfpghHcQ3dpqDInUPeQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
      },
      {
          id: 6,
          title: "Reservoir dogs",
          genre: "Action, Adventure, Horror",
          releaseYear: 2003,
          length: 45,
          img: "https://s3-alpha-sig.figma.com/img/a9c3/baee/3587f8824fd52cff0545fe7965d1db1a?Expires=1630886400&Signature=FRKEmflD-30~8FtK2bmZlZf3gXinyJGxn9toZWBsDq0VsykBiABZuRQ8Uvv1eVsIlFak-uQDkfd0-yYvtp6wCO3BNH0iDk7lAU7ILVrPkVyBizdkZyygYt8ItELn7ssZmtYRUTvaynnfN0uRBgSLgwENIscd2iEyMcn1hxYtdVXtkd~IgCSL4t8m3CJoEajlsAFuu-pcIPe-Gf3OsoRcpXuRB2UT6-X0PLad3yWpegWxjnEBekrY1c3h2QbVYORU08h12PqDpHTXTAv09Y-XqpPXvlSP42P9EaFWHIPLKZ7pgJKPwBqgnx1SCfbWU3bE~l2jTJ2U1mEN6GMPtPJVhg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
      }
  ]

  //defining states for movies and filtered movies 

  const [moviesList, setMoviesList] = useState(moviesData);

  //search movies
  const Search = (searchTerm) => {
      const filteredMovies = moviesData.filter((movie) => {
          return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
      });
      setMoviesList(filteredMovies);
  }

  //Toggling genres 
  const ToggleGenre = (genre) => {
      if(genre === "All") 
      {
          setMoviesList(moviesData);
      }
      else
      {
          const filteredMovies = moviesData.filter((movie) => {
              return movie.genre.toLowerCase().includes(genre.toLowerCase());
          });
          console.log(filteredMovies);
          setMoviesList(filteredMovies);
      } 
  }

  //sort movies 
  const sortMovies = type => {
      const types = {
          releaseYear: "releaseYear",
          length: "length"
      };
      const sortProperty = types[type];
      const sorted = [...moviesData].sort(
          (a,b) => b[sortProperty] - a[sortProperty]
      );
      setMoviesList(sorted);
  };


  return (
      <div className="App">
          <ViewMovieContext.Provider 
              value={
                  {
                      selectedMovie,
                      viewMovieInfo,
                      showMovieInfo,
                      hideMovieInfo
                  }
              }
          >
              <Header handleClick={showMovieModal} Search={Search}/>
              <Movies movies= {moviesList} ToggleGenre={ToggleGenre} SortMovies={sortMovies}/>
              <div className="footer">
                  <Footer> 
                      <p className="footer-heading"><b>Netflix</b>roulette</p>
                  </Footer>
              </div>
          </ViewMovieContext.Provider>
          <MovieModal title="Add Movie" movieModal={movieModal} closeMovieModal={hideMovieModal}>
              <MovieModalForm />
          </MovieModal>

      </div>
  );
}

export default App;
