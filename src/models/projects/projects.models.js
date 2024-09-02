const mongoose = require("mongoose");

const ProjectsSchema = new mongoose.Schema({
  name: String,
  description: String,
  photoUrl: String,
  crated_At: {
    type: Date,
    default: Date.now,
  },
  tags: [String],
  link: String,
});

module.exports = mongoose.model("Projects", ProjectsSchema);
