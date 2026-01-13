import { useState } from 'react'
import './App.css';
import AddMovie from './components/AddMovie';
import Filter from './components/Filter';
import MovieList from './components/MovieList';

 

function App() {
  const [movies,setMovies]=useState([]);
  const [filter,setFilter] =useState("All");

  //Add
  function addMovie(title,genre){
            const newMovie={
            id:Date.now().toString(),
            title:title,
            genre:genre,
            watched:false,
        };
        setMovies([...movies,newMovie]);
  }


  return (
    <>
    <h1>🎬 Movie Watchlist Manager</h1>
    <AddMovie></AddMovie>
    </>
  )
}

export default App;
