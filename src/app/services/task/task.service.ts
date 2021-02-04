import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient) {}

  getTasks(): Observable<any> {
    return this.http.get<any>(`${environment.base}/tasks`);
  }

  createTask(taskData): Observable<any> {
    return this.http.post<any>(`${environment.base}/tasks`, taskData);
  }

  deleteTask(id: number): Observable<string> {
    return this.http.delete<string>(`${environment.base}/tasks/${id}`);
  }
}
