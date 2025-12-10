const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const propertyRoutes = require("./routes/propertyRoutes");

dotenv.config();

app.use(cors());
app.use(express.json()); // Only for normal JSON
app.use("/uploads", express.static("uploads")); // Image serve

app.use("/api", propertyRoutes);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
