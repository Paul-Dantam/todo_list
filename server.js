const express = require("express");
const expressValidator = require("express-validator");
const bodyParser = require("body-parser");
const mustacheExpress = require("mustache-express");
const path = require("path");
const fs = require("fs");
const port = process.env.PORT || 8000;

const app = express();

app.engine("mustache", mustacheExpress());
app.set("views", "./views");
app.set("view engine", "mustache");

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());

app.get("/", (req, res) => {
  res.render("index", { todos: todos });
});

const todos = ["Wash the car"];

app.post("/", function(req, res) {
  todos.push(req.body.todo);
  res.redirect("/");
});
