const mongoose = require("mongoose");

const CarSchema = new mongoose.Schema({
  image: String,
  title: String,
  description: [String],
  price: Number,
  color: String,
  mileage: Number,
  kmsOnOdometer: Number,
  majorScratches: String,
  originalPaint: Boolean,
  accidentsReported: Number,
  previousBuyers: Number,
  registrationPlace: String
});

module.exports = mongoose.model("CarInventory", CarSchema);