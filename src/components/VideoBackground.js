import React, { useEffect, useState } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../utils/movieSlice';
import useMoviesTrailer from '../hooks/useMoviesTrailer';

const VideoBackground = ({movieId}) => 
 {       console.log(movieId) ; 
     const trailerVideo= useSelector((store)=>store.movies?.trailerVideo) ;
 useMoviesTrailer(movieId) ; 

 return(
    <div className='w-screen'>
      <iframe
       className='w-screen aspect-video'
     
       src={"https://www.youtube.com/embed/"+ trailerVideo?.key+"?&autoplay=1&mute=1"}
      title="YouTube video player" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  
     ></iframe>

    </div>
  )
}

export default VideoBackground
