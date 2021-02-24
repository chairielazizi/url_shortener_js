const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ShortURL = require("./models/shortURL");

mongoose.connect("mongodb://localhost:27017/urlShortener", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//set our views to use the index.ejs
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

// make the route of server
app.get("/", async (req, res) => {
  const shortUrls = await ShortURL.find(); //get all the urls instead just our table
  res.render("index", { shortUrls: shortUrls });
});

//create endpoint
app.post("/shortURL", async (req, res) => {
  await ShortURL.create({ full: req.body.fullURL });
  res.redirect("/");
});

app.listen(process.env.PORT || 5000);
