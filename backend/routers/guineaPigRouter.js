const express = require("express");
const GuineaPigModel = require("../models/guineaPigModel");

const guineaPigRouter = express.Router();

guineaPigRouter
    .post("/", async function (req,res) {
        const newGuineaPig = await GuineaPigModel.create(req.body)
        res.json(newGuineaPig)
    })
    .get("/", async function (req, res) {
        const guineaPigs = await GuineaPigModel.find({});
        res.status(200).json(guineaPigs);
    })

module.exports = guineaPigRouter;    