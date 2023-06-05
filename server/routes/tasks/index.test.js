const supertest = require("supertest");
const app = require("../../app");

const db = require("../../models");
const taskSeeds = require("../../seeders/20200524214718-create-task");

describe("/tasks POST", () => {
  const req = supertest(app);

  const newTask = {
    title: "Example task title",
    description: "Example task description",
    tech_stack: "Example task tech stack",
  };

  beforeEach(async () => {
    await taskSeeds.up(db.sequelize.queryInterface, db.Sequelize);
  });

  afterEach(async () => {
    await taskSeeds.down(db.sequelize.queryInterface, db.Sequelize);
  });

  it("should return a 201 after creating a task", async () => {
    const res = await req.post("/tasks").send(newTask);

    expect(res.status).toBe(201);
    expect(res.body).toEqual({ message: "Task created!" });
  });
});

describe("/tasks GET", () => {
  const req = supertest(app);

  const storedTask = [
    {
      title: "Example task to pair on",
      description: "random description for example task",
      tech_stack: "Node and React",
    },
  ];

  beforeEach(async () => {
    await taskSeeds.up(db.sequelize.queryInterface, db.Sequelize);
  });

  afterEach(async () => {
    await taskSeeds.down(db.sequelize.queryInterface, db.Sequelize);
  });

  it("should return a 200 with a list of all tasks created", async () => {
    const res = await req.get("/tasks");

    expect(res.status).toBe(200);
    expect(res.body.title).toEqual(storedTask.title);
    expect(res.body.description).toEqual(storedTask.description);
    expect(res.body.tech_stack).toEqual(storedTask.tech_stack);
  });
});
