import { useState } from "react";

export default function AddMovie({onAdd}){

      const [title,setTitle] =useState("");
      const [genre,setGenre] =useState("Action");

    function handleSubmit(e){
        e.preventDefault();
        if(title.trim() === "") return;

        onAdd(title,genre)
        setTitle("");
    }
    return(
        <>
        <div className="add-movie-form">
        <h2>Add Movie</h2>

        <form className="form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter Movie title.." value={title}
             onChange={(e)=> setTitle(e.target.value)}/>

            <select value={genre} onChange={(e)=> setGenre(e.target.value)}>
                <option value="Action">Action</option>
                <option value="Drama">Drama</option>
                <option value="Comedy">Comedy</option>
            </select>
            <button type="submit">Add Movie</button>
        </form>
        </div>
        </>
    )
}