require('dotenv').config()
const express = require('express')
const app = express()
const port=4000
const githubData={
  "login": "G-Shashwatha",
  "id": 161593695,
  "node_id": "U_kgDOCaG5Xw",
  "avatar_url": "https://avatars.githubusercontent.com/u/161593695?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/G-Shashwatha",
  "html_url": "https://github.com/G-Shashwatha",
  "followers_url": "https://api.github.com/users/G-Shashwatha/followers",
  "following_url": "https://api.github.com/users/G-Shashwatha/following{/other_user}",
  "gists_url": "https://api.github.com/users/G-Shashwatha/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/G-Shashwatha/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/G-Shashwatha/subscriptions",
  "organizations_url": "https://api.github.com/users/G-Shashwatha/orgs",
  "repos_url": "https://api.github.com/users/G-Shashwatha/repos",
  "events_url": "https://api.github.com/users/G-Shashwatha/events{/privacy}",
  "received_events_url": "https://api.github.com/users/G-Shashwatha/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 3,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2024-02-28T11:30:31Z",
  "updated_at": "2025-01-20T13:15:24Z"
}
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
  res.send('hgfgu')
})
app.get('/github',(req,res)=>{
  res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
