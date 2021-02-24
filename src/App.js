import React, { useState } from "react";
import styled from "styled-components";
import git from "./api/git";
import useSort from "./hooks/useSort";
import Header from "./components/Header";
import CardList from "./components/CardList";
import SortCards from "./components/SortCards";

function App() {
  const [status, setStatus] = useState("idle");
  const [org, setOrg] = useState("");
  const [isSorted, setIsSorted] = useSort({});

  const sort = (sortProp, sortType) => {
    //Sort by type (alpha, init)
    setIsSorted(isSorted, sortProp, sortType);
  };

  const getOrgRepos = (term) => {
    return git.get(`https://api.github.com/orgs/${term}/repos?type=public`);
  };

  //Get right set of data per repo
  const getRepoData = (org, repos) => {
    let promises = [];
    let repoData = [];

    repos.forEach((repo) => {
      promises.push(
        git
          .get(`https://api.github.com/repos/${org}/${repo.name}`)
          .then((res) => {
            let results = res.data;
            repoData = repoData.concat(results);
          })
      );
    });

    Promise.all(promises)
      .then(() => {
        //Sort default
        setIsSorted(repoData, "stargazers_count", "int");
        setStatus("success");
      })
      .catch((error) => setStatus("rejected"));
  };

  const handleSubmit = (term) => {
    setOrg(term);
    getOrgRepos(term)
      .then(({ data }) => {
        getRepoData(term, data);
      })
      .catch((error) => {
        setStatus("rejected");
      });
  };

  return (
    <>
      <Header title="Github Repo Lister" onSubmit={handleSubmit} />
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
            <SortCards sorted={sort} />
            <CardList profiles={isSorted} />
          </>
        )}
      </Wrapper>
    </>
  );
}

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
