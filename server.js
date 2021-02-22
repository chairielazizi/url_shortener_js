const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/urlShortener", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//set our views to use the index.ejs
app.set("view engine", "ejs");

// make the route of server
app.get("/", (req, res) => {
  res.render("index");
});

//create endpoint
app.post("/shortURL", (req, res) => {});

app.listen(process.env.PORT || 5000);
