export default function Summary({movies}){

    const total = movies.length;
    const watched = movies.filter((m)=> m.watched).length;
    const unwatched = total - watched;
    return(
        <div className="summary">
            <p>Total :{total}</p>
            <p>watched :{watched}</p>
            <p>Unwatched :{unwatched}</p>
        </div>
    );
}