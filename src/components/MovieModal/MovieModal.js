import React from 'react';
import './MovieModal.css';

const AddMovieModal = ({ showMovieModal, handleClose, title, movie }) => {
  // console.log(movie)
  return (
    <div className={showMovieModal ? "addmovie-modal display-block" : "modal display-none"}>
      <div className="addmovie-form">
        <button onClick={handleClose}>X</button>
        <h2>{title}</h2>
        <div className="row">
          <div className="col">
            <div className="form-group">
              <label>First Name</label>
              <input type="text" />
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label>Release Date</label>
              <input type="date" />
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
              <input type="text" />
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
      </div>
    </div>
  );
}

//still working on this component 
export default AddMovieModal;
