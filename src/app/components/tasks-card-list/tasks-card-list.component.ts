import { Component, Input } from '@angular/core';
import { TaskService } from 'src/app/services/task/task.service';

@Component({
  selector: 'app-tasks-card-list',
  templateUrl: './tasks-card-list.component.html',
  styleUrls: ['./tasks-card-list.component.scss'],
})
export class TasksCardListComponent {
  @Input() tasks: any[];

  constructor(private taskService: TaskService) {}

  deleteTask(id: number) {
    this.taskService.deleteTask(id).subscribe((res) => {
      (window as any).location.reload();
      return res;
    });
  }
}
