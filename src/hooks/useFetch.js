import { useEffect, useState } from "react";
import { sortArr } from "../appUtils";
const gitToken = process.env.REACT_APP_LISTER_API_TOKEN;
const baseUrl = process.env.REACT_APP_API_URL;

const useFetch = (orgName) => {
  const [status, setStatus] = useState("idle");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!orgName) return;

    const fetchData = () => {
      fetch(`${baseUrl}/orgs/${orgName}/repos?type=public`, {
        headers: {
          Accept: "application/vnd.github.v3+json",
          Authorization: `Token ${gitToken}`,
        },
      })
        .then((res) => {
          if (res.ok) return res.json();
          return setStatus("rejected");
        })
        .then((result) => {
          getReposWithStars(result);
        })
        .catch((err) => {
          setStatus("rejected");
        });
    };

    const getReposWithStars = (result) => {
      const promises = result.map((repo) => {
        return fetch(`${baseUrl}/repos/${orgName}/${repo.name}`, {
          headers: {
            Accept: "application/vnd.github.v3+json",
            Authorization: `Token ${gitToken}`,
          },
        })
          .then((reponse) => {
            return reponse.json();
          })
          .catch((error) => {
            setStatus("rejected");
          });
      });

      Promise.all(promises)
        .then((res) => {
          if (res.length === 0) return setStatus("rejected");

          const sort = sortArr(res, "stargazers_count");
          setStatus("resolved");
          setData(sort);
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
