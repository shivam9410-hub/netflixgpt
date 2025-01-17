import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addNowPlayingMovies } from '../utils/movieSlice';
const useNowPlayingMovies = () => {

    const dispatch = useDispatch() ; 
    const getNowPlayingMovies=async ()=>{
    const response  = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
     const data = await response.json(); 
       console.log(data); 
    
      dispatch(addNowPlayingMovies(data.results)) ; 
    
    }
    useEffect(()=>{getNowPlayingMovies()},[])

  return (
    <div>
      
    </div>
  )
}

export default useNowPlayingMovies
