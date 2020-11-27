import React from "react";

const Popup = ({ selected, closePopup }) => {
  return (
    <section className="popup">
      <div className="content">
        <h2>
          {selected.Title} - <span>{selected.Year}</span>
        </h2>
        <p className="rating">Rating : {selected.imdbRating}</p>
        <div className="plot">
          <img
            className="result-img"
            src={selected.Poster}
            alt={selected.Title}
          />
          <p>
            {selected.Plot}
            <p>Released Year : {selected.Year}</p>
            <p>
              IMDB Rating : <i class="far fa-star"></i>
              {selected.imdbRating}
            </p>
            <p>Genre : {selected.Genre}</p>
            <p>Runtime : {selected.Runtime}</p>
            <p>Director : {selected.Director}</p>
          </p>
        </div>
        <button className="close" onClick={closePopup}>
          Close
        </button>
      </div>
    </section>
  );
};

export default Popup;
