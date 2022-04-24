import React, {useState, useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import {
  Home,
  MovieDetails
} from "./components/index";
import SavedMovies from "./components/SavedMovies";

const App = () => {
  const [myMovies, setMyMovies] = useState([]);
  let saved = [];

  useEffect(() => {
    saved = JSON.parse(localStorage.getItem('movie')) || [];
    setMyMovies(saved);
  }, [])

  const handleSave = async (movie) => {
    let uniq = {};
    saved = JSON.parse(localStorage.getItem('movie')) || [];
    saved.push(movie);
    let res = await saved.filter(item => !uniq[item.id] && (uniq[item.id] = true));
    setMyMovies(res);
    localStorage.setItem('movie', JSON.stringify(res));
  }

   const handleDelete = async (id) => {
     saved = JSON.parse(localStorage.getItem('movie')) || [];
     let res = await saved.filter(el => el.id !== id)
     setMyMovies(res)
     localStorage.setItem('movie', JSON.stringify(res));
  }

  return (
    <div className="container">
    <Header myMovies={myMovies}/>
      <Routes>
        <Route path="/" element={<Home handleSave={handleSave} />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/saved" element={<SavedMovies myMovies={myMovies} handleDelete={handleDelete}/>} />
      </Routes>
    </div>
  );
};

export default App;
