'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define(
    'Task',
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      techStack: DataTypes.STRING,
    },
    {}
  );
  return Task;
};
