import axios from "axios";
const gitToken = process.env.REACT_APP_LISTER_API_TOKEN;
const baseUrl = process.env.REACT_APP_API_URL;

export default axios.create({
  baseUrl: baseUrl,
  headers: {
    Accept: "application/vnd.github.v3+json",
    Authorization: `Token ${gitToken}`,
  },
});
