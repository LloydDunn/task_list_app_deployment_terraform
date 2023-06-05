import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { TaskService } from "src/app/services/task/task.service";

@Component({
  selector: "app-task-dialog-create",
  templateUrl: "./task-dialog-create.component.html",
  styleUrls: ["./task-dialog-create.component.scss"],
})
export class TaskDialogCreateComponent implements OnInit {
  form: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<TaskDialogCreateComponent>,
    private fb: FormBuilder,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      title: new FormControl(),
      description: new FormControl(),
      tech_stack: new FormControl(),
    });
  }

  save() {
    this.dialogRef.close(this.form.value);

    this.taskService.createTask(this.form.value).subscribe((res) => {
      (window as any).location.reload();
      return res;
    });
  }

  close() {
    this.dialogRef.close();
  }
}
