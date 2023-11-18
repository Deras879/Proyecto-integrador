const express = require("express");
const getCharById = require("../controllers/getCharById");
const login = require("../controllers/login");
const postUser = require("../controllers/postUser");
// const {postFav, deleteFav} = require("../controllers/handleFavorites");
const postFav = require("../controllers/postFav");
const deleteFav = require("../controllers/deleteFav");

const Routes = express.Router();

Routes.get("/character/:id", (req, res) => getCharById(req, res));

Routes.get("/login", (req, res) => login(req, res));
Routes.post("/fav", (req, res) => postFav(req, res));
Routes.delete("/fav/:id", (req, res) => deleteFav(req, res));

Routes.post("/login", (req, res) => postUser(req, res));

module.exports = Routes;
