const users = require ("../utils/users");
 

const login = (req, res) => {
    const {email, password} = req.query;

    if(email && password){
        const user = users.find((us) => us.email === email && us.password === password)

        if(user){
            res.status(200).json({acces: true})
        }else{
            res.status(200).json({access: false})
        }
    }else{
        res.status(400).send("No hay Email o Password")
    }
}

module.exports = login