const express = require("express");
const getCharById = require("../controllers/getCharById");
const login = require("../controllers/login");
const {postFav, deleteFav} = require("../controllers/handleFavorites");

const Routes = express.Router();

Routes.get("/character/:id",(req, res) => getCharById(req, res))

Routes.get("/login", (req, res) => login(req, res))
Routes.post("/fav", (req, res) => postFav(req, res))
Routes.delete("/fav/:id", (req, res) => deleteFav(req, res))


module.exports = Routes;