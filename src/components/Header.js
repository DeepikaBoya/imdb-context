import { Link } from "react-router-dom";
import { useState } from "react";



const Header=()=>
{
   
  


    return(


        <div className="header">
            {/* <a href="/">   <span>Movie List</span> </a>
            <a href="/movie-detail"><span>Movie Detail</span></a>
            <a href="/add-movie" ><span>Add Movie</span></a>
 */}

<div className="header-logo">IMDb</div>
<div className="header-search" >
        <input
          type="text"
          placeholder="Search movies..."
         
        />
        <button type="submit">Search</button>
      </div>
      <div className="header-nav">

 <Link to="/" className="header-nav-item">   <span>Home</span> </Link>
            {/* <Link to="/movie-detail"><span>Movie Detail</span></Link> */}
            <Link to="/favourites" className="header-nav-item" ><span>favourites</span></Link>
            <Link to="/add-movie" className="header-nav-item"><span>Add Movie</span></Link>
            </div>





        </div>
    )
}

export default Header;