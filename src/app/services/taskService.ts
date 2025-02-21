import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'https://localhost:7007/api/task'; // API adresini güncelle

  constructor(private http: HttpClient) {}

  // Kullanıcının görevlerini getir
  getTasks(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  // Yeni görev ekleme
  addTask(task: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, task);
  }

  // Görev güncelleme
  updateTask(task: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${task.id}`, task);
  }

  // Görev silme
  deleteTask(taskId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${taskId}`);
  }

  getUser(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/user`);
  }

  createTask(task: any): Observable<any> {
    return this.http.post(this.apiUrl, task);
  }

  // Task'ları filtreleyerek almak için method
  getFilteredTasks(filter: any, userId: string): Observable<any[]> {
    const filterWithUserId = { ...filter, userId: userId };
    console.log('Sending filter via POST', filterWithUserId);
    return this.http.post<any[]>(`${this.apiUrl}/filter`, filterWithUserId);
  }
}
