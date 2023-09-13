const express = require("express");
const GuineaPigModel = require('./guineaPigModel');
const guineaPigRouter = express.Router();

guineaPigRouter
  .post("/", async function (req, res) {
    const newGuineaPig = await GuineaPigModel.create(req.body)
    res.json(newGuineaPig);
  });

module.exports = guineaPigRouter;
