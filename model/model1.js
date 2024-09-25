// Connect to MongoDB

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/mvc-crud")
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.error("Error:", err);
  });

const nameSchema = new mongoose.Schema({
  name: String,
  password:  String

});

module.exports = mongoose.model("Name", nameSchema);