import { useDispatch } from "react-redux";
import { addNowPlayingMovies, addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import {API_OPTION} from "../utils/constants"

const usePopularMovies = () => {
    const dispatch = useDispatch()
     const getPopularMovies = async () => {
         const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';


         const data = await fetch(url, API_OPTION)
        const json = await data.json()
        
        
        
        
      
        dispatch(addPopularMovies(json.results))



     }
     useEffect(() => {
         getPopularMovies()

     }, [])
}

export default usePopularMovies;