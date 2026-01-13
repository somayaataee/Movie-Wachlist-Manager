import MovieItem from "./MovieItem";

export default function MovieList({movies,onToggle,onDelete}){
    if(movies.length === 0){
        return <p className="empty">No movies found. Add one!</p>
    }

    return(
        <>
        <h2>Movie List</h2>
        <ul className="list">
            {movies.map((movie)=>
            <MovieItem  key={movie.id} movie={movie} onToggle={onToggle} onDelete={onDelete}></MovieItem>   
            )}
        </ul> 
        </>
    )
}