const express = require("express");
const router = express.Router();

router.get("/oem/count", (req, res) => {
  res.json({ count: 4 });
});

router.get("/oem/search", (req, res) => {
  res.json({
    modelName: "Honda City",
    year: 2015,
    listPrice: 1000000,
    colors: ["White", "Black"],
    mileage: 18,
    power: 117,
    maxSpeed: 180
  });
});

router.get("/cars", (req, res) => {
  res.json([
    {
      title: "Honda City 2015",
      price: 500000,
      color: "White",
      mileage: 18
    }
  ]);
});

module.exports = router;