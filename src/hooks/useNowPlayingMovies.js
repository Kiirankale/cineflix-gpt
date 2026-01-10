import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import {API_OPTION} from "../utils/constants"

const useNowPlayingMovies = () => {
    const dispatch = useDispatch()
    const getNowPlayingMovies = async () => {
        const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';


        const data = await fetch(url, API_OPTION)
        const json = await data.json()
        
        
      
        dispatch(addNowPlayingMovies(json.results))



    }
    useEffect(() => {
        getNowPlayingMovies()

    }, [])
}

export default useNowPlayingMovies;