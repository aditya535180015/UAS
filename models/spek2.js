const mongoose = require("mongoose");

const imageAndUserSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
  detail: {
    description: String,
    raw: {
      nama: String,
      specification: String,
    },
  },
  views: "Number",
  createdAt: {
    type: Date,
    default: Date.now,
  },
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("ImageAndUser", imageAndUserSchema);
