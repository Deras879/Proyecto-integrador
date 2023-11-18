// const http = require("http")
// const {getCharById} = require("./controllers/getCharById.js")
// // const characters = require("./utils/data");

// const server = http.createServer((req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     const {url} = req;

//     if(url.includes("/rickandmorty/character")){
//         const id = Number(url.split("/").pop());
//         getCharById(res, id);
//     }

//     //     res.writeHead(200, {'Content-Type': 'application/json'});
//     //     res.end(JSON.stringify(characters.find(character => character.id === id)));
//     // }

// }).listen(3001, "localhost")

const express = require("express");
const server = express();
const PORT = 3001;
const Routes = require("./routes/index");
const morgan = require("morgan");

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use(morgan("dev"));
server.use(express.json());

server.use("/rickandmorty", Routes);

module.exports = server;
