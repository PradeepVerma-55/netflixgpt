import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { options } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";

function useMovieTrailor({ movie_id }) {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movie?.trailerVideo);

  console.log("Movie ID in useMovieTrailor:", trailerVideo);

  const getTrailerVideo = async ({ movie_id }) => {
    if (!movie_id) return;
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movie_id +
        "/videos?language=en-US",
      options
    );
    const jsonData = await data.json();
    console.log("All Videos:", jsonData.results);
    const filterData = (jsonData.results || []).filter(
      (video) => video.type === "Trailer"
    );

    const trailer = filterData.length > 0 ? filterData[0] : jsonData.results[0];
    console.log("Trailer Video - Before dispatch:", trailer);
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    if (!trailerVideo && movie_id) {
      
      getTrailerVideo({ movie_id });
    }
  }, [movie_id, trailerVideo]);
}

export default useMovieTrailor;
