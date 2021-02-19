import React, { useState, useEffect } from "react";
import Header from "./Header";
import SortCards from "./SortCards";
import CardList from "./CardList";
import { sortArr } from "../appUtils";
import useFetch from "../hooks/useFetch.js";

const App = () => {
  const [org, setOrg] = useState("");
  const [searchName, setSearchName] = useState("");
  const { status, data } = useFetch(org);
  const [sortedData, setSortedData] = useState(data);

  useEffect(() => {
    setSortedData(data);
  }, [data, status]);

  const sort = (list, sortProp) => {
    setSortedData(sortArr(list, sortProp));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrg(searchName);
    setSearchName("");
  };

  const handleChange = (e) => {
    setSearchName(e.target.value);
  };

  return (
    <>
      <Header
        title="Github Repo Lister"
        onSubmit={handleSubmit}
        onChange={handleChange}
        orgName={searchName}
      />
      <main className="main container">
        {status === "rejected" ? (
          <h2>The organization could not be found!</h2>
        ) : status === "idle" ? (
          <>
            <h2>Use the form above to list users repositories</h2>
            <h3>Only public Organizations repo will be displayed</h3>
          </>
        ) : (
          <>
            <h2>Listing repositories for the user "{searchName}" :</h2>
            <SortCards users={sortedData} sorted={sort} />
            <CardList profiles={sortedData} />
          </>
        )}
      </main>
    </>
  );
};

export default App;
