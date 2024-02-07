// console.log("Hello World!");
// console.log(5 + 55);

// import express from "express";
// const app = express();
// import dotenv from "dotenv";
require("dotenv").config();
const express = require("express");
const app = express();

// app.get("/", (req, res) => {
//   res.send("<h1>Welocme to Homepage!</h1>");
// });

const githubData = {
  login: "kharsh560",
  id: 122051425,
  node_id: "U_kgDOB0ZbYQ",
  avatar_url: "https://avatars.githubusercontent.com/u/122051425?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/kharsh560",
  html_url: "https://github.com/kharsh560",
  followers_url: "https://api.github.com/users/kharsh560/followers",
  following_url:
    "https://api.github.com/users/kharsh560/following{/other_user}",
  gists_url: "https://api.github.com/users/kharsh560/gists{/gist_id}",
  starred_url: "https://api.github.com/users/kharsh560/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/kharsh560/subscriptions",
  organizations_url: "https://api.github.com/users/kharsh560/orgs",
  repos_url: "https://api.github.com/users/kharsh560/repos",
  events_url: "https://api.github.com/users/kharsh560/events{/privacy}",
  received_events_url: "https://api.github.com/users/kharsh560/received_events",
  type: "User",
  site_admin: false,
  name: "Kumar Harsh",
  company: null,
  blog: "",
  location: "Delhi, India",
  email: null,
  hireable: null,
  bio: "I am an undergrad at MAIT, Delhi, pursuing my B.Tech degree in CSE-AI&ML.",
  twitter_username: null,
  public_repos: 12,
  public_gists: 0,
  followers: 0,
  following: 1,
  created_at: "2023-01-05T19:19:49Z",
  updated_at: "2024-02-04T17:15:07Z",
};

app.get("/home", (req, res) => {
  res.send("<h1>Welocme to Homepage!</h1>");
});

app.get("/githubKharsh", (req, res) => {
  res.json(githubData);
});

app.listen(process.env.PORT, (req, res) => {
  console.log(`My app is listening on port ${process.env.PORT}`);
});
