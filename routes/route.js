const express = require("express");
const path = require("path");
const controller = require("../controller/login");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("login", { path: "/login" });
});

router.post("/loginpage", controller.login);

router.get("/index", (req, res, next) => {
  res.render("index", { path: "/index" });
});

router.get("/news", (req, res, next) => {
  res.render("news", { path: "/news" });
});
module.exports = router;
