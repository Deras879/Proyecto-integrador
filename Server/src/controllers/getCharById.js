const axios = require ("axios")
const URL = "https://rickandmortyapi.com/api/character/"


// const getCharById = (res, id) => {
//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(
//         (response) => {
//         const data = response.data
//         const char = {id: data.id, name: data.name, gender: data.gender, species: data.species, origin: data.origin, image: data.image, status: data.status}
//         res
//         .writeHead(200, {"Content-Type": "application/json"})
//         .end(JSON.stringify(char));
//         },

//         (error) => {
//         res
//         .writeHead(500, {"Content-Type": "text/plain"})
//         .end(error.message);
//     })
// }



const getCharById = (req, res) => {
    const {id} = req.params;
    axios(URL + id)
    .then(({data}) => {
        const {name, id, status, species, origin, image, gender} = data
       return  char = {
            id,
            name,
            status,
            species,
            origin,
            image,
            gender
        }
    })
    .then((data)=> {
        if(data){
            res.status(200).json(data)
        }else{
            res.status(400).send("Error 404, Not found")
        }
    })
    .catch((err) => {
        res.status(500).send(err.message)
    })
}

module.exports = getCharById;