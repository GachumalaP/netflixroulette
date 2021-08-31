import React, { useState } from 'react';
import './ToggleGenre.css';

const ToggleGenre = ( props ) => {
    const genres = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];
    const [genre, setGenre] = useState("All");

    const RenderButtons = () => {
        return genres.map((Genre)=> {
            return <button key={`genre-${Genre}`} className= {`genre-button ${genre === Genre ? 'active' : ''}`} onClick={() => handleClick(Genre)}>{Genre}</button>;
        });
    };

    const handleClick = (genre) => {
        setGenre(genre);
        props.ToggleGenre(genre);
    };

    return(
        <div className="genre-buttons">
            {RenderButtons()}
        </div>

    );
}

export default ToggleGenre;
