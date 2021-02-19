import React from "react";

const SortCards = ({ sorted, users }) => {
  return (
    <div className="sort">
      <h3 className="sort_title">Sort by:</h3>
      <button className="sort_alpha" onClick={() => sorted(users, "name")}>
        Alphabetical
      </button>{" "}
      <button
        className="sort_stars"
        onClick={() => sorted(users, "stargazers_count")}
      >
        By Most Stars
      </button>
    </div>
  );
};

export default SortCards;
