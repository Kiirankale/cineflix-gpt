
import { useDispatch } from "react-redux";
import {addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTION } from "../utils/constants"

const useUpcomingMovies = () => {
    const dispatch = useDispatch()
    const getUpcomingMovies = async () => {
       // const url = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';
        const url = 'https://api.themoviedb.org/3/movie/upcoming?language=hi-IN&region=IN&page=1';



        const data = await fetch(url, API_OPTION)
        const json = await data.json()
        

        dispatch(addUpcomingMovies(json.results))








    }
    useEffect(() => {
        getUpcomingMovies()

    }, [])
}

export default useUpcomingMovies;