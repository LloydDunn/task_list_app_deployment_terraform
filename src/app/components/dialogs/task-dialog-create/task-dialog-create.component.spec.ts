import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TaskDialogCreateComponent } from "./task-dialog-create.component";
import { FormBuilder } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { TaskService } from "src/app/services/task/task.service";
import { of } from "rxjs";

describe("TaskDialogCreateComponent", () => {
  let component: TaskDialogCreateComponent;
  let fixture: ComponentFixture<TaskDialogCreateComponent>;

  const mockDialogRef = {
    close: jasmine.createSpy("close"),
  };

  const mockTaskService = {
    createTask: jasmine.createSpy("createTask"),
  };

  const fbMock: FormBuilder = new FormBuilder();

  const formVal = {
    title: "mockTitle",
    description: "mockDesc",
    tech_stack: "mockTech",
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TaskDialogCreateComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: FormBuilder, useValue: fbMock },
        { provide: MatDialogRef, useValue: mockDialogRef },
        { provide: TaskService, useValue: mockTaskService },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskDialogCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("#close func should close dialogRef", () => {
    component.close();

    expect(mockDialogRef.close).toHaveBeenCalled();
  });

  it("#save should call dialogRef.close and taskService.createTask with form val", () => {
    component.form = fbMock.group(formVal);
    mockTaskService.createTask.and.returnValue(of("Task created!"));

    component.save();

    expect(mockDialogRef.close).toHaveBeenCalledWith(formVal);
    expect(mockTaskService.createTask).toHaveBeenCalledWith(formVal);
  });
});
