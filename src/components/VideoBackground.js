import React, { use } from 'react'
import { options } from '../utils/constants';
import { useSelector } from 'react-redux';
import useMovieTrailor from '../hooks/useMovieTrailor';

const VideoBackground = ({movie_id}) => {

  const trailerVideo = useSelector((store) => store.movie?.trailerVideo);
 console.log("Movie ID in VideoBackground:",movie_id);
 
  useMovieTrailor({movie_id});
 return (
    <div className=" w-screen">

      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      >
        
      </iframe>
    </div>
  );
}

export default VideoBackground;