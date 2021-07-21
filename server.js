import db from "./db/connection.js";
import express from "express";
import logger from "morgan";
import cors from "cors";
import routes from "./routes/index.js";
//initializing express
const app = express();

//defining production and local ports
const PORT = process.env.PORT || 3000;

//initializing cors
app.use(cors());

//initializing express and logger
app.use(express.json());
app.use(logger("dev"));

//attaching api to the parameter, so that CRUD requests are made to the url/api endpoint
app.use("/api", routes);

//once successful connection established to mongoDB
//express will start server to listen at PORT
db.on("connected", () => {
  console.log("Connected to mongoDB!");
  app.listen(PORT, () => {
    process.env.NODE_ENV === "production"
      ? console.log(
          `Express server application is running in production on: ${PORT} \n\n`
        )
      : console.log(
          `Express server running in development on: http://localhost:${PORT} \n\n`
        );
  });
});
