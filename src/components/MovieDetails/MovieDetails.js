import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import GenresList from "./GenresList.js";

import { 
  fetchMovieDetails, 
  fetchCast,
  fetchSimilarMovies
} from "../../services/index.js";
import CastList from "./CastList.js";
import Details from "./Details.js";
import Banner from "./Banner.js";
import SimilarMovies from "./SimilarMovies.js";


const MovieDetails = () => {
  let { id } = useParams();
  let genres = [];
  const [details, setDetails] = useState([]);
  const [cast, setCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);

  useEffect(() => {
    const fetchDetails = async () => {
      setDetails(await fetchMovieDetails(id));
      setCast(await fetchCast(id));
      setSimilarMovies(await fetchSimilarMovies(id));
    };
    fetchDetails();
  }, [id]);

  // push genres from details
  genres = details.genres;
  // console.log(genres);

  return (
    <div className="container">
      {/* details banner component */}
      <Banner details={details}/>

      {/* genres list component */}
      <GenresList genres={genres} />

      {/* details component */}
      <Details details={details}/>

      {/* cast list component */}
      <CastList cast={cast} />

      <SimilarMovies similarMovies={similarMovies}/>
    </div>
  );
};

export default MovieDetails;
