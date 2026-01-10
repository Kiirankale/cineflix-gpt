
import { useDispatch } from "react-redux";
import {addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTION } from "../utils/constants"

const useTopRatedMovies = () => {
    const dispatch = useDispatch()
    const getTopRatedMovies = async () => {
        const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';


        const data = await fetch(url, API_OPTION)
        const json = await data.json()
        

        dispatch(addTopRatedMovies(json.results))








    }
    useEffect(() => {
        getTopRatedMovies()

    }, [])
}

export default useTopRatedMovies;