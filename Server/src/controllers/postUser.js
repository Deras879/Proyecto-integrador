const { User } = require ("../DB_connection");



const postUser = async (req, res) => {
    const {email, password} = req.body;

    if(!email || !password){
       res.status(400).send("Faltan datos");
    }

try {
    
    const newUser = await User.create({email, password})

    res.status(201).json(newUser);
} catch (error) {
    res.status(500).json({error: error.message})
}

};

module.exports = postUser;