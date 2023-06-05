"use strict";
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define(
    "Task",
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      tech_stack: DataTypes.STRING,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
    },
    {}
  );
  return Task;
};
