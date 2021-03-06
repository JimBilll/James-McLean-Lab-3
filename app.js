const express = require("express");
//creating app
const app = express();
//send an HTTP response when receiving HTTP GET /
/*
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});
*/
//handling static HTML and EJS templates
app.use(express.static("public"));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index"); //no need for ejs extension
});

//route for contacts
app.get("/contacts", (req, res) => {
  res.render("contacts");
});

//route for catalogue
app.get("/catalog", (req, res) => {
  res.render("catalog");
});

//route for article
app.get("/article/:id", (req, res) => {
  res.render("article");
});

//route for register
app.get("/register", (req, res) => {
  res.render("register");
});

//route for login
app.get("/login", (req, res) => {
  res.render("login");
});

//pass requests to the router middleware
const router = require("./routes/apis");
app.use(router);

//make the app listen on port
const port = process.argv[2] || process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`Cart app listening at http://localhost:${port}`);
});
