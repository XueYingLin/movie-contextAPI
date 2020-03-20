import React, { useContext } from 'react';
import { MovieContext } from './MovieContext'; //consume that we have access to the value

const Nav = () => {
    const [movies, setMovies] = useContext(MovieContext);//calling the MovieContext
    return (
        <div className="nav">
            <p>Nikki </p>
            <p>List of Movie: {movies.length} </p>
        </div>
    )
}

export default Nav;