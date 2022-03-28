// Importing important packages
const express = require("express");

// Using express and routes
const app = express();
const whitelistRoute = express.Router();

let whitelistModel = require("../models/whitelist.model");

// To Get List
whitelistRoute.route("/").get(function (req, res) {
  whitelistModel.find(function (err, whitelist) {
    if (err) {
      console.log(err);
    } else {
      res.json(whitelist);
    }
  });
});

// To Add New
whitelistRoute.route("/update").post(async function (req, res) {
  try {
    await whitelistModel.deleteMany();
    req.body.forEach(async (data) => {
      vals = await whitelistModel.find({ address: data });
      if (vals.length === 0) {
        new whitelistModel({ address: data }).save();
      }
    });
  } catch (error) {
    res.status(400).send("Something Went Wrong");
  }
  res.status(200).json({ message: "Address Added Successfully" });
});

module.exports = whitelistRoute;
