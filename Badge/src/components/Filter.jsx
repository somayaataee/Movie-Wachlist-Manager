export default function Filter({filter,setFilter}){
    return(
        <div className="filters">
            <button className={filter === "All" ? "Active" : ""}
             onClick={()=> setFilter("All")}>All</button>

            <button className={filter === "watched" ? "Active" : ""}
            onClick={()=> setFilter("watched")}>Watched</button>

            <button className={filter === "unwatched" ? "Active" : ""}
             onClick={()=>setFilter("Active")}>Unwatched</button>
        </div>
    );}