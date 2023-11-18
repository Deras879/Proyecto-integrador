const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
  const { name, origin, status, image, species, gender } = req.body;

  if (!name || !origin || !status || !image || !species || !gender) {
    return res.status(401).send("Faltan datos");
  }

  try {
    await Favorite.create({ name, origin, status, image, species, gender });

    const favs = await Favorite.findAll();

    res.status(200).json(favs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postFav;
