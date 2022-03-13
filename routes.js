const express = require('express');
const todos = require("./todos");
const bodyParser = require('body-parser')

const router = express.Router();

router.get("/", function(req, res) {
  res.send("Welcome to the Webhooks API");
});

router.post("/github-webhooks-endpoint", function(req,res){
  console.log(req.payload);
  res.send("Github webhook Successfully received");
});
