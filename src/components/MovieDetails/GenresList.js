import React from "react";

const GenresList = ({ genres }) => {
  if (!genres) return null;

  return (
    <>
      <div className="row mt-3">
        <div className="col">
          <p style={{ color: "#5a606b", fontWeight: "bolder" }}>GENRE</p>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <ul className="list-inline">
            {genres.map((genre) => (
              <li className="list-inline-item" key={genre.id}>
                <button type="button" className="btn btn-outline-info">
                  {genre.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default GenresList;
