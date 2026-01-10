import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
    if (!movies) {
        return
    }




    return (
        <div className="p-4  text-white">
            <h1 className="font-bold text-3xl mb-4 ">{title}</h1>

            <div

                className="flex overflow-x-scroll scroll-smooth no-scrollbar"
            >
                {movies?.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        poster_path={movie.poster_path}
                    />
                ))}
            </div>
        </div>
    );
};

export default MovieList;
