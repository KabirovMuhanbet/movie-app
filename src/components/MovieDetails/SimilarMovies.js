import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const SimilarMovies = ({ similarMovies }) => {
  return (
    <>
      <div className="row mt-3">
        <div className="col">
          <p style={{ color: "#5a606b", fontWeight: "bolder" }}>
            SIMILAR MOVIES
          </p>
        </div>
      </div>
      <div className="row mt-3">
        {similarMovies.slice(0, 4).map((movie) => (
          <div className="col-md-3 col-sm-6" key={movie.id}>
            <div className="card">
              <Link to={`/movie/${movie.id}`}>
                <img
                  className="img-fluid"
                  src={movie.poster}
                  alt={movie.title}
                ></img>
              </Link>
            </div>
            <div className="mt-3">
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
      </div>
    </>
  );
};

export default SimilarMovies;
