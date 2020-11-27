import React from "react";
import Result from "./Result";

const Results = ({ results, openPopup }) => {
  return (
    <section className="results resultMovie">
      {results.map((result) => (
        <Result key={result.imdbID} result={result} openPopup={openPopup} />
      ))}
    </section>
  );
};

export default Results;
