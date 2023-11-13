const server = require("./src/server");
const PORT = 3001;
const { conn } = require('./src/DB_connection');

conn.sync({force: true}).then(

    server.listen(PORT, () => {
        console.log(`server levantado en el puerto ${PORT}`);
    })
)

