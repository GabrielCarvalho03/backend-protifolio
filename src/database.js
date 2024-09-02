const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://products:products@portifolio.txiou.mongodb.net/portifolio?retryWrites=true&w=majority&appName=portifolio"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });
