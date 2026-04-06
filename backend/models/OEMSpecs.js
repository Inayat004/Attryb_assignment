const mongoose = require("mongoose");

const OEMSchema = new mongoose.Schema({
  modelName: String,
  year: Number,
  listPrice: Number,
  colors: [String],
  mileage: Number,
  power: Number,
  maxSpeed: Number
});

module.exports = mongoose.model("OEMSpecs", OEMSchema);