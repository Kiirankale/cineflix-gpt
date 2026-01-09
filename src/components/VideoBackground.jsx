import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTION } from "../utils/constants";
import { addMovieTrailer } from "../utils/moviesSlice";

const VideoBackground = ({ movieId }) => {
  const dispatch = useDispatch();

  const movieTrailer = useSelector(
    (store) => store.movies.movieTrailer
  );

  const getMovieVideo = async () => {
    try {
      const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;

      const data = await fetch(url, API_OPTION);
      const json = await data.json();

      // Filter only trailers
      const filteredVideo = json?.results?.filter(
        (video) => video.type === "Trailer" && video.site === "YouTube"
      );
      const movieTrailer = filteredVideo.length? filteredVideo[0]:json.results;
      dispatch(addMovieTrailer(movieTrailer))

     
    } catch (error) {
      console.error("Error fetching movie trailer:", error);
    }
  };

  useEffect(() => {
    if (movieId) {
      getMovieVideo();
    }
  }, [movieId]);

  return (
    <div className="w-full overflow-hidden ">
      {movieTrailer?.key && (
        <iframe
          className="w-screen aspect-video "
          src={`https://www.youtube.com/embed/${movieTrailer.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${movieTrailer.key}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
};

export default VideoBackground;
