import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import  MainContainer from './MainContainer'
import SecondryContainer from './SecondryContainer'
import usePopularMovie from '../hooks/usePopularMovie'

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovie();

  return (
    <div>
       <Header />
       <MainContainer />

    </div>
  )
}

export default Browse