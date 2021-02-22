const express = require("express");
const app = express();

//set our views to use the index.ejs
app.set("view engine", "ejs");

// make the route of server
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(process.env.PORT || 5000);
