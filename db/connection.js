import mongoose from "mongoose";

//SET CONNECTION LOCATION
let MONGODB_URI =
  process.env.PROD_MONGODB || "mongodb://127.0.0.1:27017/winesDevDatabase";

//create default index for faster queries
mongoose.set("useCreateIndex", true);

//for findByIdAndUpdate to return a reference to object at location
mongoose.set("returnOriginal", false);

//set up connection at MONGODB_URI, pass parameters as object, and check for errors
mongoose
  .connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .catch((error) => {
    console.error(`Error connecting to MongoDB: ${error.message}`);
  });

//message for disconnected event
mongoose.connection.on("disconnected", () => {
  console.log("MongoDB has disconnected!");
});

//message for error event
mongoose.connection.on("error", (error) => {
  console.error(`Error connecting to MongoDB: ${error}`);
});

//export mongoose connection for use in server
export default mongoose.connection;
