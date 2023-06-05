import { TestBed } from "@angular/core/testing";

import { TaskService } from "./task.service";
import {
  HttpTestingController,
  HttpClientTestingModule,
} from "@angular/common/http/testing";

describe("TaskService", () => {
  let service: TaskService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    service = TestBed.inject(TaskService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("#getTasks should retrieve all tasks", () => {
    const mockTasks = {
      id: 18,
      title: "title ex t",
      description: "desc ex t",
      tech_stack: "tech ex t",
      created_at: "2020-05-25T22:33:07.160Z",
      updated_at: "2020-05-25T22:33:07.160Z",
    };

    service.getTasks().subscribe((tasks) => {
      expect(tasks).toEqual(mockTasks);
    });

    const req = httpTestingController.expectOne("http://localhost:80/tasks");
    expect(req.request.method).toEqual("GET");
    req.flush(mockTasks);
  });

  it("#createTask should send a new task to be created", () => {
    const mockNewTask = {
      title: "mockTitle",
      description: "mockDescription",
      tech_stack: "mocktech_stack",
    };

    service.createTask(mockNewTask).subscribe((res) => {
      expect(res).toEqual("Created!");
    });

    const req = httpTestingController.expectOne("http://localhost:80/tasks");
    expect(req.request.method).toEqual("POST");
    req.flush("Created!");
  });

  it("#deleteTask should send a taskId in the DELETE req url params", () => {
    service.deleteTask(1).subscribe((res) => {
      expect(res).toEqual("Task deleted!");
    });

    const req = httpTestingController.expectOne(
      `http://localhost:80/tasks/${1}`
    );
    expect(req.request.method).toEqual("DELETE");
    req.flush("Task deleted!");
  });
});
