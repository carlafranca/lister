import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "./Header";
import SortCards from "./SortCards";
import CardList from "./CardList";
import { sortArr } from "../appUtils";
import useFetch from "../hooks/useFetch.js";

const App = () => {
  const [query, setQuery] = useState("");
  const [org, setOrg] = useState("");
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
    setOrg(query);
    setQuery("");
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <Header
        title="Github Repo Lister"
        onSubmit={handleSubmit}
        onChange={handleChange}
        orgName={query}
      />
      <Wrapper>
        {status === "rejected" ? (
          <MainTitle>The organization could not be found!</MainTitle>
        ) : status === "idle" ? (
          <>
            <MainTitle>Use the form above to list users repositories</MainTitle>
            <SubTitle>
              Only public Organizations repo will be displayed
            </SubTitle>
          </>
        ) : (
          <>
            <MainTitle>Listing repositories for the user "{org}" :</MainTitle>
            <SortCards users={sortedData} sorted={sort} />
            <CardList profiles={sortedData} />
          </>
        )}
      </Wrapper>
    </>
  );
};

export default App;

const Wrapper = styled.main`
  -webkit-font-smoothing: subpixel-antialiased;
  -webkit-font-smoothing: antialiased;

  max-width: 1024px;
  margin: auto;
`;

const MainTitle = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`;

const SubTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 400;
`;
