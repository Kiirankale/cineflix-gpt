import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies)




  return (
    movies && <div className='bg-black' >
      <div className='-mt-50 z-20 relative pl-2 ' >
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />

        <MovieList title={"Up Coming"} movies={movies.upcomingMovies} />

      </div>


    </div>
  )
}

export default SecondaryContainer
