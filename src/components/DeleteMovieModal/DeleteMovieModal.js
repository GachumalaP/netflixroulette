import React from 'react';
import './DeleteMovieModal.css';

const DeleteMovieModal = () => {
    return (
        <div className="delete-movie-modal">
            Are you sure want to delete this movie?
            <button>Confirm</button>
        </div>
    );
}

export default DeleteMovieModal;