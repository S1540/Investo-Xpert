const mongoose = require("mongoose");
const dotenv = require("dotenv");
// const multer = require("multer");
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB Connected Successfully");
  })
  .catch((err) => {
    console.log(err);
  });

const propertySchema = mongoose.Schema({
  propertyName: String,
  location: String,
  price: String,
  size: String,
  bedrooms: Number,
  bathrooms: Number,
  status: String,
  description: String,
  forSale: Boolean,
  forRent: Boolean,
  image: String,
});
const Property = mongoose.model("Property", propertySchema);
module.exports = Property;

// const storage = multer.diskStorage({
//   destination(req, file, cb) {
//     cb(null, "uploads/");
//   },
//   filename(req, file, cb) {
//     cb(null, `${Date.now()}-${file.originalname}`);
//   },
// });
// const upload = multer({ storage });
// exports.upload = upload;
