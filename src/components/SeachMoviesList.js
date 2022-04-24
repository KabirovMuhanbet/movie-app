import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const SearchMoviesList = ({ searchMovies }) => {

  return (
    <>
      {searchMovies.map((movie) => (
        <div className="col-md-3 col-sm-6 mb-3" key={movie.id}>
          <div className="card">
            <Link to={`/movie/${movie.id}`}>
              <img
                className="img-fluid"
                src={movie.poster}
                alt={movie.title}
              ></img>
            </Link>
          </div>
          <div className="mt-2">
            <p style={{ fontWeight: "bolder" }}>{movie.title}</p>
            <p>Rated: {movie.rating}</p>
            <ReactStars
              count={movie.rating}
              size={20}
              color1={"#f4c10f"}
            ></ReactStars>
          </div>
        </div>
      ))}
    </>
  );
};

export default SearchMoviesList;