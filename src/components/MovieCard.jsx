import React from 'react'
import { IMG_CDN } from '../utils/constants';

const MovieCard = ({ poster_path }) => {
    




    return (
        <div className='shrink-0 p-2'>
            <img src={IMG_CDN + poster_path} alt="movie poster" />

        </div>
    )
}

export default MovieCard
