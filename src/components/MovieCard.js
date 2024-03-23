import { useContext } from "react";
import { Link } from "react-router-dom";
import { FavouriteMovieContext } from "../context/FavouriteMovie";
const MovieCard =({movie})=>
{

  const favouriteContextData=useContext(FavouriteMovieContext);
  const {watchlist,updateWatchlist}=favouriteContextData;
  console.log("favouriteContextData",favouriteContextData);

  const isMovieAdded=watchlist.find(watchlistMovie=> watchlistMovie.id==movie.id)
  const addTowatchlist=(e)=>
  {
    const movieId=Number(e.target.dataset.id)
    // console.log(movieId)
    updateWatchlist((prevWatchlist)=>

    {
      
      const isMovieInWatchlist = prevWatchlist.some((watchlistMovie) => watchlistMovie.id === movieId);

      // const updatedWatchlist=isMovieInWatchlist? prevWatchlist.filter((id)=>id!==movieId):[...prevWatchlist,movieId]
      const favourites=isMovieInWatchlist? prevWatchlist.filter((movie)=>movie.id!==movieId):[...prevWatchlist,movie]
return favourites;
      
    });

  };

    return (

        <div className="movie-card">
          <div>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
            
           <Link to={`/movie-detail/${movie.id}`} ><h5>{movie.title}</h5></Link>
           <button data-id={movie.id} onClick={addTowatchlist}>

            {isMovieAdded ? "Remove from watchlist" :"Add to watchlist"}</button>
          </div>

        </div>


    )
}
export default  MovieCard;