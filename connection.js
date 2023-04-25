const mongoose = require("mongoose");
const connectionParams = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};
const uri = `mongodb+srv://Tampai:Durga@2023@cluster0.tx8qfml.mongodb.net/?retryWrites=true&w=majority`;
const connexion = mongoose
  .connect(uri, connectionParams)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log("Error connecting to the database", err);
  });

module.exports = connexion;