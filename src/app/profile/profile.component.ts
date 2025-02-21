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
  filter = {
    title: '',
    isCompleted: undefined as boolean | undefined,
  };

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
    this.getUser();
  }

  // Filtreli task'ları çekme
  getFilterTasks(): void {
    //userId'yi al yoksa tüm tasklar geliyor !!!!
    const userId = this.user?.id;

    if (!userId) {
      console.error('Kullanıcı ID alınamadı');
      return;
    }

    this.taskService.getFilteredTasks(this.filter, userId).subscribe({
      next: (data) => {
        this.tasks = data;
      },
      error: (err) => {
        console.error('Error fetching tasks:', err);
      },
    });
  }

  // Filtreyi temizleme
  clearFilter(): void {
    this.filter = { title: '', isCompleted: undefined };
    this.getFilterTasks();
  }

  createTask() {
    console.log('📌 Gönderilecek veri:', this.newTask); // DEBUG için kontrol et

    if (!this.newTask.title?.trim() || !this.newTask.description?.trim()) {
      alert('Title and Description are required!');
      return;
    }

    const taskPayload = {
      title: this.newTask.title.trim(),
      description: this.newTask.description.trim(),
      isCompleted: !!this.newTask.isCompleted, // Boolean olarak netleştir
    };

    console.log("🚀 Backend'e gönderilen JSON:", taskPayload); // DEBUG için

    this.taskService.createTask(taskPayload).subscribe(
      () => {
        this.loadTasks();
        this.newTask = { title: '', description: '', isCompleted: false };
      },
      (error) => {
        console.error('❌ API Hatası:', error);
      }
    );
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
