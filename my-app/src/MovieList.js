import React, { useState, useContext } from "react";
import Movie from './Movie';
import { MovieContext } from './MovieContext'; //consume that we have access to the value

const MovieList = () => {
    const [movies, setMovies] = useContext(MovieContext);//calling the MovieContext

    return (
        <div>
           {movies.map(movie => (
               <Movie name={movie.name} price={movie.price} key={movie.id} />
           ))}
        </div>

    );
}

export default MovieList;
