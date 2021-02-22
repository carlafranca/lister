import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Header from "./Header";
import SortCards from "./SortCards";
import CardList from "./CardList";
import useFetch from "../hooks/useFetch.js";

import useSort from "../hooks/useSort";

const App = () => {
  const [org, setOrg] = useState("");
  const { status, data } = useFetch(org);
  const [isSorted, setIsSorted] = useSort();

  const orgRef = useRef(null);

  useEffect(() => {
    if (data.length === 0) return;

    setIsSorted({
      type: "int",
      payload: { list: data, sortProp: "stargazers_count" },
    });
  }, [data]);

  const sort = (list, sortProp, sortType) => {
    setIsSorted({ type: sortType, payload: { list, sortProp } });
    //setSortedData(isSorted);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrg(orgRef.current.value);
    orgRef.current.value = null;
  };

  return (
    <>
      <Header
        title="Github Repo Lister"
        onSubmit={handleSubmit}
        orgName={org}
        orgRef={orgRef}
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
            <SortCards users={isSorted} sorted={sort} />
            <CardList profiles={isSorted} />
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
