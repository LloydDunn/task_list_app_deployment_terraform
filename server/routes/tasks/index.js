const express = require("express");

const router = express.Router();

const { tasks: Task } = require("../../models");

module.exports = () => {
  router.post("", async (req, res) => {
    const newTask = new Task();
    newTask.title = req.body.title;
    newTask.description = req.body.description;
    newTask.tech_stack = req.body.tech_stack;

    try {
      await newTask.save();
    } catch (e) {
      throw e;
    }

    res.status(201).send({ message: "Task created!" });
  });

  router.get("", async (req, res) => {
    let tasks;

    try {
      tasks = await Task.findAll();
    } catch (e) {
      throw e;
    }

    res.send(tasks);
  });

  router.delete("/:id", async (req, res) => {
    try {
      await Task.destroy({ where: { id: req.params.id } });
    } catch (e) {
      throw e;
    }

    res.status(200).send({ message: "Task successfully deleted" });
  });

  return router;
};
