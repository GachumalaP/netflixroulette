import React, {useState} from 'react';
import '../MovieModal/MovieModal.css';
import './MovieModalForm.css';

const MovieModalForm = ( props ) => {

    const [isSelectGenreOpen, setisSelectGenreOpen] = useState(false);

    const renderClickSelectGenre = () => {
      setisSelectGenreOpen(!isSelectGenreOpen);
      console.log(isSelectGenreOpen)
    }

    
    return (
        <div className="movie-form">
            <div className="row">
              <div className="col">
               <div className="form-group">
                  <label>Movie Name</label>
                  <input type="text" defaultValue={props.movie.title}/>
                </div>
              </div>
              <div className="col">
                <div className="form-group">
                  <label>Release Date</label>
                  <input type="date" defaultValue={props.movie.releaseYear}/>
                </div>
              </div>
              <div className="col">
                <div className="form-group">
                  <label>Movie Url</label>
                  <input type="text" placeholder="http://"/>
                </div>
              </div>
              <div className="col">
                <div className="form-group">
                  <label>Rating</label>
                  <input type="text" />
                </div>
              </div>
              <div className="col">
                <div className="form-group">
                  <label>Genre</label>
                  <div className="select-genre-container">
                    <div 
                      className="select-genre"
                      onClick={renderClickSelectGenre}
                    >
                      <div className="select-genre-icon"> {`${isSelectGenreOpen === true ? '-' : '+'}`} </div>
                    </div>
                    <div 
                      className={`select-genre-options ${isSelectGenreOpen === true  ? 'display-grid' 
                      : 'display-none'}`}>
                        <label>
                          <input type="checkbox" /> Comedy
                        </label>
                        <label>
                          <input type="checkbox" /> Comedy
                        </label>
                        <label>
                          <input type="checkbox" /> Comedy
                        </label>
                        <label>
                          <input type="checkbox" /> Comedy
                        </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="form-group">
                  <label>Runtime</label>
                  <input type="text" />
                </div>
              </div>
              <div className="col">
                <div className="form-group">
                  <label>Overview</label>
                  <textarea></textarea>
                </div>
              </div>
            </div>
            <div className="modal-form-buttons">
              <div className="col">
                <div className="form-group">
                  <button>Reset</button>
                  <button>Submit</button>
                </div>
              </div>
            </div>
        </div>
    );
}

MovieModalForm.defaultProps = {
    movie: {
      id: '',
      title: '',
      genre: '',
      releaseYear: '',
      img: '' 
    }
}

export default MovieModalForm;