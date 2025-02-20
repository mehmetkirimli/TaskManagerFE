import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private API_URL = 'https://localhost:5001/api/tasks'; // Backend adresi

  constructor(private http: HttpClient) {}

  // Görevleri listeleme
  getTasks(token: string): Observable<any> {
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    return this.http.get(this.API_URL, { headers });
  }

  // Yeni görev ekleme
  addTask(task: any, token: string): Observable<any> {
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    return this.http.post(this.API_URL, task, { headers });
  }
}
