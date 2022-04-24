import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const SavedMovies = ({ myMovies, handleDelete }) => {

  return (
    <div className="row mt-3">
      {myMovies.length > 0 
      ? myMovies.map((movie, index) => (
        <div className="col-md-3 col-sm-6 mb-3" key={index}>
          <div className="card">
            <Link to={`/movie/${movie.id}`}>
              <img
                className="img-fluid"
                src={movie.poster}
                alt={movie.title}
              ></img>
            </Link>
            <button className="delete-btn"
              onClick={() => handleDelete(movie.id)}
            >
            delete</button>
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
      )) 
      : <h2>No movies</h2>
      }
    </div>
  );
};

export default SavedMovies;
