const express = require("express");
const app = express();
const { Musician } = require("../models/index");
const { db } = require("../db/connection");

const port = 3000;

//TODO: Create a GET /musicians route to return all musicians
app.get("/musicians", async (request, response) => {
  const musicians = await Musician.findAll({});
  response.json(musicians);
});
app.get("/musicians/:id", async (req, res) => {
  const musicianId = req.params.id;
  const musician = await Musician.findByPk(musicianId);
  res.json(musician);
});

module.exports = app;
