const http = require("http")
const characters = require("./utils/data");

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const {url} = req;

    if(url.includes("/rickandmorty/character")){
        const id = Number(url.split("/").pop());    

        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(characters.find(character => character.id === id)));
    }

}).listen(3001, "localhost")