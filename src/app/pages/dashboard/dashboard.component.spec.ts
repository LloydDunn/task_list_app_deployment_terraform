import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { TaskService } from 'src/app/services/task/task.service';
import { DashboardComponent } from './dashboard.component';


describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  const mockTaskService = {
    getTasks: jasmine.createSpy('getTasks'),
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      providers: [
        { provide: TaskService, useValue: mockTaskService },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#getTasks should retrieve a list of all existing tasks onInit', () => {
    const mockTasks = [{ task: 'task one' }, { task: 'task two' }];
    mockTaskService.getTasks.and.returnValue(of(mockTasks));

    fixture.detectChanges();

    expect(component.tasks).toEqual(mockTasks);
  });
});
