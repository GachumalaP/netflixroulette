import React from 'react';
import './MovieModal.css';

const MovieModal = ( props ) => {

  return (
    <div className={props.movieModal ? "movie-modal display-block" : "modal display-none"}>
      <div className="modal-content">
        <button className="close-modal-button" onClick={props.closeMovieModal}>X</button>
        <h2 className="modal-title">{props.title}</h2>
        {props.children}
      </div>
    </div>
  );
}


export default MovieModal;
