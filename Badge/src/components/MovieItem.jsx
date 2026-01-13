export default function MovieItem({movie,onToggle,onDelete}){
    return(
        <li className="movie">
            <div className="movie-info">
                    <strong>{movie.title}</strong>
                    <p>{movie.genre}</p>
                    <span className={`badge ${movie.watched ? "watched" : "unwatched"}`}>
                        {movie.watched ? "watched" : "unwatched"}
                    </span>
            </div>
            <div className="actions">
                  <button className="toggle" onClick={()=> onToggle(movie.id)}>Toggel</button>
                   <button className="delete" onClick={()=> onDelete(movie.id)}>Delete</button>
            </div>
        </li>
    );
}