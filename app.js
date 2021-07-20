import express from "express"
import logger from "morgan"
import cors from "cors"
import wineRoutes from "./routes/wines.js"

//initializing express
const app = express()

//initializing cors
app.use(cors())

//initializing express and logger
app.use(express.json())
app.use(logger("dev"))

//attaching api to the parameter, so that CRUD requests are made to the url/api endpoint
app.use("/api", wineRoutes)

export default app