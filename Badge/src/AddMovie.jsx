export default function Badge({lable,value}){
    return(
        <>
        <h2>Add Movie</h2>

        <form onSubmit={handleAddMovie}>
            <input type="text" placeholder="Enter Movie title.." value={title} onChange={(e)=> setTitle(e.target.value)}/>

            <select value={genre} onChange={(e)=> setGenre(e.target.value)}>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
            </select>
        </form>
        </>
    )
}