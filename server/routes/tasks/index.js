const express = require('express');

const router = express.Router();

const { Task } = require('../../models');

module.exports = () => {
  router.post('', async (req, res) => {
    const newTask = new Task();
    newTask.title = req.body.title;
    newTask.description = req.body.description;
    newTask.techStack = req.body.techStack;

    const savedTask = await newTask.save();

    if (savedTask) {
      res.status(201).send({ message: 'Task created!' });
    }
  });

  router.get('', async (req, res) => {
    const tasks = await Task.findAll();
    res.send(tasks);
  });

  router.delete('/:id', async (req, res) => {
    await Task.destroy({ where: { id: req.params.id } });
    res.status(200).send({ message: 'Task successfully deleted' });
  });

  return router;
};
