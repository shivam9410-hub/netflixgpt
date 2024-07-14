import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addTrailerVideo } from '../utils/movieSlice';
const useMoviesTrailer = (movieid) => {
           console.log(movieid) ;
    const dispatch = useDispatch() ;
    const getMoviesVideos= async()=>{
    const data = await  fetch("https://api.themoviedb.org/3/movie/" +movieid +"/videos?language=en-US", API_OPTIONS);
       console.log(data); 
    const  json = await data.json() ; 
    const filterData = json.results.filter(video=>video.type==="Trailer");
    const trailer = filterData.length? filterData[0] :json.results[0];

     console.log(trailer) ;
     dispatch(addTrailerVideo(trailer));
}

 useEffect(()=>{
     getMoviesVideos() ; 
 } , []); 


  return (
    <div>
      
    </div>
  )
}

export default useMoviesTrailer
