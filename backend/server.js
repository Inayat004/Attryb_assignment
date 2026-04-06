const express = require("express");
const cors = require("cors");
const carRoutes = require("./routes/carRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", carRoutes);

app.get("/", (req, res) => {
  res.send("BUYCARS Backend Running");
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});