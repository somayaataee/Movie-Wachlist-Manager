import { useState } from 'react'
import './App.css';
import Badge from './AddMovie';


 

function App() {
  const [movies,setMovies]=useState([]);
  const [title,setTitle] =useState("");
  const [genre,setGenre] =useState("Action");
  const [filter,setFilter] =useState("All");
  return (
    <>
    <h1>🎬 Movie Watchlist Manager</h1>
    </>
  )
}

export default App;
