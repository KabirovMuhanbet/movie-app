import React, { useState, useEffect } from "react";
import GenresList from "./GenresList";
import MoviesList from "./MoviesList";
import SearchMoviesList from "./SeachMoviesList";
import { fetchMovies, fetchGenre, fetchSearchMovies } from "../services/index";
import Search from "./Search";
import Pagination from "./Pagination";

const Home = ({handleSave}) => {
  const [genres, setGenres] = useState([]);
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [searchMovies, setSerchMovies] = useState([]);
  
  useEffect(() => {
    const fetchMoviesData = async () => {
      setGenres(await fetchGenre());
      setMovies(await fetchMovies(12, currentPage));
    };
    fetchMoviesData();
  }, []);

  const handleGenreClick = async (genre_id) => {
    setMovies(await fetchMovies(genre_id, currentPage));
    setSerchMovies([]);
  };

  const handleSubmit = async (e) => {
      e.preventDefault()
      setSerchMovies(await fetchSearchMovies(searchValue))
      setSerchMovies(await fetchSearchMovies(searchValue))
  }

  const handlePageClick = async (num) => {
    let page = num.selected + 1;
    setCurrentPage(page);
    setMovies(await fetchMovies(12, page))
  }

  const pages = movies[0]?.pages;
  return (
    <>
      <Search setSearchValue={setSearchValue} searchValue={searchValue} handleSubmit={handleSubmit}/>
      <h4 className="title">Genres</h4>
      <GenresList genres={genres} handleGenreClick={handleGenreClick} />
      <div className="row mt-3">
        {searchMovies.length > 0 
        ? <SearchMoviesList searchMovies={searchMovies} />
        : <MoviesList movies={movies} handleSave={handleSave}/>
        }
        <Pagination pages={pages} handlePageClick={handlePageClick}/>
      </div>
    </>
  );
};

export default Home;
