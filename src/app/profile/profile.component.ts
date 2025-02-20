import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../services/taskService';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  tasks: any[] = []; //Tasklar İçin
  user: any; // User Bilgisi için
  newTask = { title: '', description: '', isCompleted: false };

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
    this.getUser();
  }

  createTask() {
    if (!this.newTask.title || !this.newTask.description) {
      alert('Title and Description are required!');
      return;
    }

    this.taskService.createTask(this.newTask).subscribe(() => {
      this.loadTasks(); // Görevler listesini yenile
      this.newTask = { title: '', description: '', isCompleted: false }; // Formu temizle
    });
  }

  editProfile() {
    // Profil düzenleme işlemi burada yapılabilir
    console.log('Profili Düzenle butonuna tıklanıyor');
  }

  loadTasks() {
    this.taskService.getTasks().subscribe(
      (data) => {
        console.log("✅ API'den gelen veri:", data);
        this.tasks = data;

        // 🔥 Angular değişiklikleri algılasın
        setTimeout(() => {}, 0);
      },
      (error) => {
        console.error('❌ Görevler yüklenirken hata oluştu', error);
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
        console.log('Kullanıcı bilgisi =>', data);
        this.user = data;
      },
      (error) => {
        console.error('User yüklenemedi !!', error);
      }
    );
  }
}
