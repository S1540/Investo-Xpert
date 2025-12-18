const express = require("express");
const Admin = require("../models/AdminSchema");
const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const app = express();
app.use(cookieParser());
app.use(express.json());
// router.use(cookieParser());

router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const admin = new Admin({
      name,
      email,
      password: hashedPassword,
    });

    await admin.save();
    console.log(admin);

    const token = jwt.sign({ email }, "secret");
    res.cookie("token", token);

    res.status(201).json({
      success: true,
      message: "Admin created successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});

// login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const exsitUser = await Admin.findOne({ email });
    console.log(exsitUser);
    if (!exsitUser) {
      res.status(404).json({ message: "User not found" });
    }

    bcrypt.compare(password, exsitUser.password, (err, result) => {
      if (result) {
        const token = jwt.sign({ email: email }, "secret");
        res.cookie("token", token);
        console.log(token);
        res.status(200).json({
          message: "Login successful",
          success: true,
        });
      } else {
        res.status(400).json({
          message: "Email or password is incorrect",
          success: false,
        });
      }
    });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
