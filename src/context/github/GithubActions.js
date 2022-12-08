import axios from "axios";
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const request = axios.create({
  baseURL: GITHUB_URL,
  headers: {
    Authorization: `token ${GITHUB_TOKEN}`,
  },
});

export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });
  const resp = await request.get(`/search/users?${params}`);

  const { items } = resp.data;
  return items;
};

export const getUserAndRepos = async (login) => {
  const params = new URLSearchParams({
    sort: "created",
    per_page: 10,
  });
  const [repos, user] = await Promise.all([
    request.get(`/users/${login}/repos?q=${params}`),
    request.get(`/users/${login}`),
  ]);
  console.log(user.data);
  return { user: user.data, repos: repos.data };
};
