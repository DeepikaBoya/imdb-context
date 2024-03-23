
import { useContext } from 'react';
import { useEffect, useState } from 'react'
import { genreids } from './MovieList'
import { FavouriteMovieContext } from "../context/FavouriteMovie";

const MovieFavourites = () => {

  const favouriteContextData=useContext(FavouriteMovieContext);
  console.log("favouriteContextData1",favouriteContextData);
  const {watchlist}=favouriteContextData;

  const [favourites, setfavourite] = useState([])
  const [genres, setGenres] = useState([])
  const [selectedGenreid, setSelectedGenreId] = useState();
  const [filteredFavourites,setFilteredFavourites]=useState([])
  useEffect(() => {
   
    const genresData = watchlist.map(data => data.genre_ids[0])
    setGenres(Array.from(new Set(genresData)))
    setfavourite(watchlist);
    setFilteredFavourites(watchlist)
  }, [watchlist])
  const handleGenreSelection=(e)=>
  {
    const id=e.target.dataset.id;
    setSelectedGenreId(id);

  }
  useEffect(()=>
  {
    setFilteredFavourites(()=>
{
    return favourites.filter(movie=>!selectedGenreid||movie.genre_ids[0]==selectedGenreid)

})
  },[selectedGenreid,favourites])

 const handleMovieSearch=(e)=>
  {
const text=e.target.value.toLowerCase().trim().replace(/\s+/g, '');
setFilteredFavourites(()=>
{
    return favourites.filter((movie)=>
    {
const titleMatch=movie.title.toLowerCase().replace(/\s+/g, '').includes(text);
const genreMatch=!selectedGenreid||movie.genre_ids[0]==selectedGenreid

return titleMatch && genreMatch;
    
    
    
  });

});
  }
  const handlePopularitySort=(e)=>
  {
    const sortingType=e.target.dataset.type;
    setFilteredFavourites(()=>
    {
        if(!sortingType)
        {
            return favourites;
        }
        return [...favourites].sort((a,b)=>
        {
            return sortingType==="Asc"
            ?a.popularity-b.popularity
            :b.popularity-a.popularity
        })
    })
  };
  
  
  
  
  
  
  const handleMovieDelete=(movieId)=>(e)=>
  {
    setfavourite((prevfavourites)=>
    {
        const movieIdx=prevfavourites.findIndex(fav=>fav.id==movieId)
        const finalfav=[...prevfavourites]
        finalfav.splice(movieIdx,1);
        localStorage.setItem("favourites",JSON.stringify(finalfav))
        return finalfav;
    })

  }

  return (
    <div>
      <h1>Favourites Movie</h1>
      <div className='favourite-wrapper'>
        <div className='left-section'>
          <div className='genre-wrapper'>
            <div
              className={`genre ${selectedGenreid === "" ? "selected" : ""}`}
              data-id=""
              onClick={handleGenreSelection}
            >
              All genre
            </div>
            {genres.map((genreId) => (
              <div
                className={`genre ${selectedGenreid == genreId ? "selected" : ""
            }`}
            data-id={genreId}
                onClick={handleGenreSelection}
             
             >
                {genreids[genreId]}
              </div>
            ))}
          </div>
        </div>

        <div className='right-section'>

            <input type="text" placeholder="search movie..." onChange={handleMovieSearch}/>
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Genre</th>
                <th>
                <span onClick={handlePopularitySort} data-type="" style={{ cursor: 'pointer' }}> popularity</span><span>    </span>
                    <span onClick={handlePopularitySort} data-type="Asc"     style={{ cursor: 'pointer' }}> ▲</span><span>     </span>
                    <span onClick={handlePopularitySort} data-type="desc"     style={{ cursor: 'pointer' }}>▼</span>

                    </th>
                <th>Rating</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
       
              {filteredFavourites.map(favourite => (
                <tr>
                  <th>
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${favourite.backdrop_path}`}
                      style={{ width: '80px' }}
                    ></img>
                  </th>
                  <th>{favourite.title}</th>
                  <th>{genreids[favourite.genre_ids[0]]}</th>
                  <th>{favourite.popularity}</th>
                  <th>{favourite.vote_average}</th>
                  <th>
                    <button onClick={handleMovieDelete(favourite.id)}>delete</button>
                  </th>
                </tr>
              
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
export default MovieFavourites
