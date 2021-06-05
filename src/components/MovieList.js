import React from 'react';
import {Movie} from './Movie'


export const MovieList = ({movies, handleMovieInfo}) => {
    return (
         
        <>
            {
                movies.map(movie => {
                    return (
                        <Movie key={movie.id} id={movie.id} 
                        image={movie.poster_path === null ? 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg' : `http://image.tmdb.org/t/p/w185/${movie.poster_path}`} 
                        title={movie.title} overview={movie.overview} handleMovieInfo={handleMovieInfo}/>
                    )
                })
            }
        </>   
        
    )
}
