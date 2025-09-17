const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

 const PrimaryConnection =()=> {
  const primary = mongoose.createConnection(process.env.MONGO_URI);

  primary.once("open", () => console.log("DataBase connected successfully"));
  primary.on("error", () => console.log(err));
  return primary;
};

module.exports=PrimaryConnection;