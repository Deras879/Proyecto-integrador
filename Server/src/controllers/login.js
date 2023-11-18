// const users = require ("../utils/users");
const { User } = require("../DB_connection");

// const login = (req, res) => {
//     const {email, password} = req.query;

//     if(email && password){
//         const user = users.find((us) => us.email === email && us.password === password)

//         if(user){
//             res.status(200).json({access: true})
//         }else{
//             res.status(200).json({access: false})
//         }
//     }else{
//         res.status(400).send("No hay Email o Password")
//     }
// }

const login = async (req, res) => {
  const { email, password } = req.query;
  if (!email || !password) {
    res.status(400).send("Faltan datos");
  }

  try {
    const user = await User.findAll({ where: { email } });

    if (!user[0]) {
      res.status(404).send("Usuario no encontrado");
    } else {
      if (user[0].password !== password) {
        res.status(403).send("Contraseña o usuario invalidos");
      } else {
        res.status(200).json({ access: true });
      }
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = login;
