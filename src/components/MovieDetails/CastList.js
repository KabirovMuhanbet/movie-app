import React from "react";

const CastList = ({ cast }) => {
  if (!cast) return null;

  return (
    <>
      <div className="row mt-3">
        <div className="col">
          <p style={{ color: "#5a606b", fontWeight: "bolder" }}>CAST</p>
        </div>
      </div>
      <div className="row mt-3">
        {cast.slice(0, 4).map((actor) => (
          <div className="col-md-3 text-center" key={actor.id}>
            <img
              className="img-fluid mx-auto d-block"
              src={actor.img}
              alt={actor.name}
            ></img>
            <p className="font-weight-bold text-center">{actor.name}</p>
            <p
              className="font-weight-light text-center"
              style={{ color: "#5a606b" }}
            >
              {actor.character}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default CastList;
