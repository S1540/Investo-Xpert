const router = require("express").Router();
const Property = require("../models/PropertySchema");
const multer = require("multer");

// multer setupp
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + " " + file.originalname);
  },
});

const upload = multer({ storage: storage });

// routes
router.get("/", async (req, res) => {
  try {
    const properties = await Property.find();
    res.status(200).json(properties);
    console.log(properties);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});

// single property.
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const property = await Property.findById(id);
    res.status(200).json(property);
    console.log(property);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});

router.post("/post", upload.single("image"), async (req, res) => {
  try {
    const {
      propertyName,
      location,
      price,
      size,
      bedrooms,
      bathrooms,
      status,
      description,
      forSale,
      forRent,
    } = req.body;

    const newProperty = new Property({
      propertyName,
      location,
      price,
      size,
      bedrooms,
      bathrooms,
      status,
      description,
      forSale,
      forRent,
      image: req.file.path,
    });
    const savedProperty = await newProperty.save();
    res.status(200).json(savedProperty);
    console.log(savedProperty);
  } catch (err) {
    res.status(500).json({ message: "Server Error", err });
  }
});
// delete property

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const property = await Property.findByIdAndDelete(id);
    res.status(200).json(property);
    // console.log(property);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});

module.exports = router;
