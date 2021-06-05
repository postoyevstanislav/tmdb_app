import React from 'react';
import {Button} from 'react-bootstrap'
import styles from './MovieInfo.module.css'

export const MovieInfo = ({currentMovie, closeMovieInfo}) => {
    return (
        <>
        <Button style={{margin: 10}} variant="outline-info" onClick={closeMovieInfo}>BACK</Button>
        <div className={styles.container}>
            <div className={styles.imgContainer}>
            
                <img src={`http://image.tmdb.org/t/p/original/${currentMovie.poster_path}`} alt="" />
            </div>

            <div className={styles.infoContainer}>
                <h1>{currentMovie.title}</h1>
                <h5>Release date: {(currentMovie.release_date).replaceAll('-', '.')}</h5>
                <p>{currentMovie.overview}</p>
                <p className={styles.rating}>{currentMovie.vote_average}/10</p>
            </div>

        </div>
        </>
    )
}
