export default function Badge({lable,value}){

    function handleAddMovie(e){
        e.preventDefault();

        if(title.trim() === "") return;

        const newMovie={
            id:Date.now().toString(),
            title:title,
            genre:genre,
            watched:false,
        };
        setMovie([...movie ,newMovie])
        setTitle("");
    }
    return(
        <>
        <h2>Add Movie</h2>

        <form onSubmit={handleAddMovie}>
            <input type="text" placeholder="Enter Movie title.." value={title} onChange={(e)=> setTitle(e.target.value)}/>

            <select value={genre} onChange={(e)=> setGenre(e.target.value)}>
                <option value="Action">Action</option>
                <option value="Drama">Drama</option>
                <option value="Comedy">Comedy</option>
            </select>
            <button type="submit">Add Movie</button>
        </form>
        </>
    )
}