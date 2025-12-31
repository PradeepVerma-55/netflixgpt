import SecondryContainer from "./SecondryContainer";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

export const MainContainer = () => {
  const movies = useSelector((store) => store.movie?.nowPlayingMovies);
  if (!movies || movies.length === 0) return null;
  const mainMovie = movies[0];
  console.log(mainMovie);
  const { original_title, overview, id } = mainMovie;
  console.log(id);
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movie_id={id} />
      <SecondryContainer /> 
    </div>
  );
};

export default MainContainer;
