import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TaskDialogCreateComponent } from './components/dialogs/task-dialog-create/task-dialog-create.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor(
    private dialog: MatDialog,
    private router: Router
  ) {}

  isHomeRoute() {    
    return this.router.url === '/';
  }

  openTaskDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';

    this.dialog.open(TaskDialogCreateComponent, dialogConfig);
  }
}
