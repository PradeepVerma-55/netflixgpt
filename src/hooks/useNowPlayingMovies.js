import { useEffect, useState } from "react";
import { options } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const useNowPlayingMovies = () => {
  // Custom hook logic to fetch and return now playing movies

  const dispatch = useDispatch();

  useEffect(() => {
    // This will run when the component mounts
    getNowPlayingMovies();
  }, []);

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      options
    );
    const jsonData = await data.json();
    dispatch(addNowPlayingMovies(jsonData.results));
  };

  return {}; // Return the fetched now playing movies
};

export default useNowPlayingMovies;
