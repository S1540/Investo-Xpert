const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const PORT = process.env.PORT || 5000;
const path = require("path");
const propertyRoutes = require("./routes/propertyRoutes");

dotenv.config();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.use("/api", propertyRoutes);
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "..", "frontend", "dist")));
  app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "frontend", "dist", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
