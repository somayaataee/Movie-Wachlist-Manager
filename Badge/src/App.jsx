import { useState } from 'react'
import './App.css';
import AddMovie from './components/AddMovie';
import Filter from './components/Filter';
import MovieList from './components/MovieList';
import Summary from './components/Summary';

 

function App() {
  const [movies,setMovies]=useState([]);
  const [filter,setFilter] =useState("All");

  //Add
  function addMovie(title,genre){
            const newMovie={
            id:Date.now().toString(),
            title,
            genre,
            watched:false,
        };
        setMovies([...movies,newMovie]);
  }
  //toggle
  function toggle(id){
    setMovies(movies.map((m)=>m.id === id ? {...m, watched : !m.watched} :m));
  }

  //delete
  function Delete(id){
    return(
      setMovies(movies.filter((m)=> m.id !== id))
    );
  }

  //filter(Dreived state)
      const filteredrMovies = movies.filter((movie)=>{
        if(filter === "All") return true;
        if(filter === "watched") return movie.watched;
        if(filter === "unwatched") return !movie.watched;
    })
  return (
    <div className='app'>
    <h1>🎬 Movie Watchlist Manager</h1>
    <AddMovie onAdd={addMovie}/>
    <Filter filter={filter} setFilter={setFilter}/>
    <MovieList movies={filteredrMovies} onToggle={toggle} onDelete={Delete}/>
    <Summary movies={movies}/>
    </div>
  )
}

export default App;
