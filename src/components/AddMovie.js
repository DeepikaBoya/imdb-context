import { useState,useRef} from "react";





const  AddMovie=()=>
{

    const nameRef=useRef();
    const ratingRef=useRef();
    const validateRef=useRef();
  console.log("rerendered")
// const handleMovieNameChange=(e)=>
// {
// setMoviename(e.target.value);
// }
// const handleMovieRatingChange=(e)=>
// {
//     setMovieRating(e.target.value);
// }
const handleSubmit=()=>
    {
        //print form data on console
        console.log(nameRef.current.value)
        if(nameRef.current.value.length<3)
        {
            nameRef.current.style.border="1px solid red";
            validateRef.current.innerText="Please Enter min 3 char"
            validateRef.current.style.fontSize="11px";
            validateRef.current.style.color="red";

            

        }



    }
    return (
<div className="add-movie-form">
<h1>Add Movie</h1>
<div>
<input ref={nameRef} placeholder="Add new movie name" />

</div>
<div>
    <input ref={ratingRef} type="number" placeholder="Enter rating" />
</div>
<button onClick={handleSubmit}>Add</button>
<div ref={validateRef}></div></div>


    )

}

export default AddMovie;