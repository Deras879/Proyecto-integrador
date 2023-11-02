let myFavorites = [];

const postFav = (req, res) => {
    const favorito = req.body;

    if(favorito){
        myFavorites.push(favorito);
        res.status(200).json(myFavorites);
    }else{
        res.status(400).send("No hay favorito para agregar")
    }
}


const deleteFav = (req,res) => {
    const {id} = req.params;

    if(id){
        myFavorites.filter((fav) => fav.id !== Number(id));

        res.status(200).json(myFavorites);
    }else{
        res.status(400).send("No hay id a eliminar")
    }
}

module.exports = {postFav, deleteFav}