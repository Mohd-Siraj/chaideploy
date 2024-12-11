require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;

const githubData = {
  id: 123456789,
  name: "chaideploy",
  full_name: "Mohd-Siraj/chaideploy",
  private: false,
  owner: {
    login: "Mohd-Siraj",
    id: 987654321,
    node_id: "MDQ6VXNlcjk4NzY1NDMyMQ==",
    avatar_url: "https://avatars.githubusercontent.com/u/987654321?v=4",
    html_url: "https://github.com/Mohd-Siraj",
  },
  html_url: "https://github.com/Mohd-Siraj/chaideploy",
  description: "A sample Express.js deployment project",
  fork: false,
  url: "https://api.github.com/repos/Mohd-Siraj/chaideploy",
  created_at: "2024-12-10T10:00:00Z",
  updated_at: "2024-12-11T12:00:00Z",
  pushed_at: "2024-12-11T12:30:00Z",
  homepage: null,
  size: 123,
  stargazers_count: 0,
  watchers_count: 0,
  language: "JavaScript",
  has_issues: true,
  has_projects: true,
  has_downloads: true,
  has_wiki: true,
  has_pages: false,
  forks_count: 0,
  archived: false,
  disabled: false,
  open_issues_count: 0,
  license: {
    key: "mit",
    name: "MIT License",
    spdx_id: "MIT",
    url: "https://api.github.com/licenses/mit",
    node_id: "MDc6TGljZW5zZTEz",
  },
  forks: 0,
  open_issues: 0,
  watchers: 0,
  default_branch: "main",
};


app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/twitter", (req, res) => {
  res.send("www.twitter.com!");
});
app.get("/github", (req, res) => {
  res.send(githubData)
})

app.get("/login", (req, res) => {
  res.send("This is login");
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
