import React from 'react';
import './ToggleGenre.css';

const ToggleGenre = () => {
    const genres = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];
    const [genre, setGenre] = React.useState("All");

    const RenderButtons = () => {
        return genres.map((Genre)=> {
            return <button key={`genre-${Genre}`} className= {`genre-button ${genre === Genre ? 'active' : ''}`} onClick={() => handleClick(Genre)}>{Genre}</button>;
        });
    };

    const handleClick = (genre) => {
        setGenre(genre);
    };

    return(
        <div className="genre-buttons">
            {RenderButtons()}
        </div>

    );
}

export default ToggleGenre;
