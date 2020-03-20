import React, { useState } from "react";
import Movie from './Movie';

const MovieList = () => {
    const [movies, setMovies] = useState([
        {
            name: 'Hary Potter',
            price: '$10',
            id: 123
        },
        { 
            name: 'Game of Throne',
            price: '$10',
            id: 124
        },
        {
            name: 'Inception',
            price: '$10',
            id: 125
        }
    ]);

    return (
        <div>
            {movies.map(movie => (
                <Movie name={movie.name} 
                price={movie.price} 
                key={movie.id} />
                
            ))}
        </div>

    );
}

export default MovieList;
