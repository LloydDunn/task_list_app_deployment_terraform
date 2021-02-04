import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { TasksCardListComponent } from './tasks-card-list.component';
import { TaskService } from 'src/app/services/task/task.service';
import { of } from 'rxjs';

describe('TasksCardListComponent', () => {
  let component: TasksCardListComponent;
  let fixture: ComponentFixture<TasksCardListComponent>;

  const mockTaskService = {
    deleteTask: jasmine.createSpy('deleteTask')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TasksCardListComponent],
      imports: [MatGridListModule, MatCardModule],
      providers: [ { provide: TaskService, useValue: mockTaskService } ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#deleteTask should call task service to delete task', () => {
    mockTaskService.deleteTask.and.returnValue(of('Task deleted!'));
    component.tasks = [{ id: 1 }];

    component.deleteTask(component.tasks[0].id);

    expect(mockTaskService.deleteTask).toHaveBeenCalledWith(1);
  });
});
