import Heading from "./heading";
import MovieFavourites from "./MovieFavourites"
import MovieList from "./MovieList";
import MovieDetail from "./MovieDetail";
import AddMovie  from "./AddMovie";
import Header from "./Header";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import {
    BrowserRouter,
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import { HashRouter } from "react-router-dom";
  import FavouriteMovieProvider from "../context/FavouriteMovie";
//imperative way
//   const router=createBrowserRouter([
//     {
//         path:"/",
//         element:
//         (
//             <>
//             <Header/>
//             <MovieList/>
//             </>
    
    
//         )
//     },

//     {
//         path:"/movie-detail/:movieId",
//         element:
//         (
//             <>
//               <Header/>
//             <MovieDetail/>
//             </>
    
    
//         )
//     },
//     {
//         path:"/add-movie",
//         element:
//         (
//             <>
//               <Header/>
//             <AddMovie/>
//             </>
    
    
//         )
//     }


   
        
    


//     ])

// const MovieApp =()=>
// {
//     return (

//         <RouterProvider router={router}/>
//     );
// }
//Declarative ay
const MovieApp=()=>
{
    return (

        <FavouriteMovieProvider>
   <HashRouter>
        <Header/>
        <Routes>        
        <Route path="/" element={<MovieList />} />
        <Route path="/movie-detail/:movieId" element={<MovieDetail />} />
        <Route path="/favourites" element={<MovieFavourites/>} />

        
        <Route path="/add-movie" element={<AddMovie/>} />
        </Routes>
        </HashRouter>

        </FavouriteMovieProvider>
     


       
    )
}
export default MovieApp