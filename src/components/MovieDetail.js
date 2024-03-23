import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

const MovieDetail=()=>
{
    const [MovieDetail,setMovieDetail]=useState({})
    const params=useParams();
    console.log(params)

    useEffect(()=>
    {
        fetch(`https://api.themoviedb.org/3/movie/${params.movieId}?api_key=33e59f6041e14718207a95125cdc94c2`)
        .then((res)=>res.json())
        .then((data)=>setMovieDetail(data))
    },[])
    return (


        <>

        <h1>Movie Details</h1>
        <hr></hr>
        <h2>{MovieDetail.title}</h2>
        <img src={`https://image.tmdb.org/t/p/w500/${MovieDetail.backdrop_path}`} />
        <p>{MovieDetail.overview}</p>
        </>
    )
}

export  default MovieDetail;