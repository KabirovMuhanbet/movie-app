import React from "react";

const Banner = ({ details }) => {
  return (
    <div className="col text-center mb-5" style={{ width: "100%", height: "80vh" }}>
      <img
        className="details-img"
        src={`http://image.tmdb.org/t/p/original/${details.backdrop_path}`}
        alt={details.title}
      ></img>
      <h4>{details.title}</h4>
    </div>
  );
};

export default Banner;
