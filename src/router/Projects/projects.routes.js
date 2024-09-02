const express = require("express");
const route = express.Router();
const projectsModels = require("../../models/projects/projects.models");

route.get("/", async (req, res) => {
  const projetcs = await projectsModels.find();
  res.send(projetcs);
});

route.post("/", async (req, res) => {
  const body = req.body;
  try {
    await projectsModels.create(body);
    res.send({ message: "Project created" });
  } catch (error) {
    console.log("error", error);
    res.status(500).send({ message: "Internal server error" });
  }
});

route.put("/:id", async (req, res) => {
  const id = req.params.id;
  const body = req.body;

  try {
    await projectsModels.findOneAndUpdate({ _id: id }, body);
    res.send({ message: "Project updated" });
  } catch (error) {
    console.log("error", error);
    res.status(500).send({ message: "Internal server error" });
  }
});

route.delete("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    await projectsModels.findOneAndDelete({ _id: id });
    res.send({ message: "Project deleted" });
  } catch (error) {
    console.log("error", error);
    res.status(500).send({ message: "Internal server error" });
  }
});

module.exports = route;
