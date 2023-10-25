const axios = require ("axios")

const getCharById = (res, id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(
        (response) => {
        const data = response.data
        const char = {id: data.id, name: data.name, gender: data.gender, species: data.species, origin: data.origin, image: data.image, status: data.status}
        res
        .writeHead(200, {"Content-Type": "application/json"})
        .end(JSON.stringify(char));
        },

        (error) => {
        res
        .writeHead(500, {"Content-Type": "text/plain"})
        .end(error.message);
    })
}

module.exports = { getCharById };