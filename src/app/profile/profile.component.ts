import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TaskService } from '../services/taskService';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  tasks: any[] = []; //Tasklar İçin
  user: any; // User Bilgisi için

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  editProfile() {
    // Profil düzenleme işlemi burada yapılabilir
    console.log('Profili Düzenle butonuna tıklanıyor');
  }

  loadTasks() {
    this.taskService.getTasks().subscribe(
      (data) => {
        this.tasks = data;
      },
      (error) => {
        console.error('Görevler yüklenirken hata oluştu', error);
      }
    );
  }

  editTask(task: any) {
    const updatedTask = { ...task, status: 'Tamamlandı' };
    this.taskService.updateTask(updatedTask).subscribe(() => {
      task.status = 'Tamamlandı';
    });
  }

  deleteTask(taskId: number) {
    this.taskService.deleteTask(taskId).subscribe(() => {
      this.tasks = this.tasks.filter((task) => task.id !== taskId);
    });
  }

  getUser() {
    this.taskService.getUser().subscribe(
      (data) => {
        this.user = data;
      },
      (error) => {
        console.error('User yüklenemedi !!', error);
      }
    );
  }
}
