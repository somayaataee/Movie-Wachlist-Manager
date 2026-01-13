export default function MovieList(){

    const filteredrMovies = ListMovies.filter((movie)=>{
        if(filter === "All") return true;
        if(filter === "watched") return movie.watch;
        if(filter === "unwatched") return !movie.watch
    })
    return(
        <>
        <h2>Movie List</h2>
        {filteredrMovies === 0 && (<p>No movies found. add one!</p>)}

        <ul>
            {filteredrMovies.map((movie)=>
            <li key={id}><strong>{movie.title}</strong><p>{movie.genre} | {""} {movie.watch ? "watched" 
                : "unwatched" } </p>
                
                  <button onClick={()=> deleteMovie(movie.id)}>Delete</button>
                  <button onClick={()=> toggeleMovie(movie.id)}>Toggel</button>
                </li>
            )}
        </ul> 
        </>
    )
}