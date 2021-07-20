import app from "./app.js"
import db from "./db/connection.js"

//defining production and local ports

const PORT = process.env.PORT || 3000;

//once successful connection established to mongoDB
//express will start server to listen at PORT 
db.on("connected", () => {
    console.log("Connected to mongoDB!")
    app.listen(PORT, () => {
        console.log(`Express server application is running on ${PORT}`)
    })
})