"use strict";
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define(
    "Task",
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      tech_stack: DataTypes.STRING,
    },
    {
      timestamps: true,
      underscored: true,
    }
  );
  return Task;
};
