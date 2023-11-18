const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
  const { id, name, origin, status, image, species, gender } = req.body;

  if (!name || !origin || !status || !image || !species || !gender || !id) {
    return res.status(401).send("Faltan datos");
  }

  try {
    const fav = await Favorite.findAll({ where: { name, status } });

    if (fav[0]) {
      return res.status(400).send("El personaje ya es un favorito");
    }
    await Favorite.create({ id, name, origin, status, image, species, gender });

    const favs = await Favorite.findAll();

    res.status(200).json(favs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postFav;
