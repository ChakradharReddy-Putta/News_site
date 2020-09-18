const express = require("express");
const path = require("path");

const app = express();

const routes = require("./routes/route");

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

app.listen(4000);
