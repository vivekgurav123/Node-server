const express = require("express");
const bodyParser = require("body-parser");
// const jsonwebtoken = require("jsonwebtoken");

const app = express();

app.use(bodyParser.json());

app.get("/users", (req, res) => {
  const users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
  ];

  res.send(users)
  console.log(res.send(users));
});

app.listen(4000, ()=>{
  console.log('Server is running at http://localhost:4000')
});