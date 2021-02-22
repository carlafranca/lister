import { useEffect, useState } from "react";

const gitToken = process.env.REACT_APP_LISTER_API_TOKEN;
const baseUrl = process.env.REACT_APP_API_URL;

const useFetch = (orgName) => {
  const [status, setStatus] = useState("idle");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!orgName) return;

    //Get Org repos, this payload doesn't have the stargazers_count
    const fetchData = async () => {
      const reponse = await fetch(
        `${baseUrl}/orgs/${orgName}/repos?type=public`,
        {
          headers: {
            Accept: "application/vnd.github.v3+json",
            Authorization: `Token ${gitToken}`,
          },
        }
      );
      if (!reponse.ok) return setStatus("rejected");
      const orgRepos = await reponse.json();
      getReposWithStars(orgRepos);
    };

    fetchData().catch((error) => error.message);

    //Get Repos with stargazers_count
    const getReposWithStars = (result) => {
      const promises = result.map((repo) => {
        return fetch(`${baseUrl}/repos/${orgName}/${repo.name}`, {
          headers: {
            Accept: "application/vnd.github.v3+json",
            Authorization: `Token ${gitToken}`,
          },
        }).then((reponse) => {
          if (!reponse.ok) return setStatus("rejected");
          return reponse.json();
        });
      });

      Promise.all(promises)
        .then((repos) => {
          if (repos.length === 0) return setStatus("rejected");
          setStatus("resolved");
          setData(repos);
        })
        .catch((error) => {
          setStatus("rejected");
        });
    };
    fetchData();
  }, [orgName]);

  return { status, data };
};

export default useFetch;
