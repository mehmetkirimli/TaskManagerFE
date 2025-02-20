import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  user = {
    username: 'Mehmet KIRIMLI',
    email: 'mehmet@example.com',
  };

  tasks = [
    { id: 1, name: 'Task 1', status: 'Complete' },
    { id: 2, name: 'Task 2', status: 'IsProgress' },
  ];

  constructor() {}

  ngOnInit(): void {
    // Kullanıcı verilerini bir API'den çekebilirsiniz (örneğin, JWT ile doğrulandıktan sonra)
  }

  editProfile() {
    // Profil düzenleme işlemi burada yapılabilir
    console.log('Profili Düzenle butonuna tıklanıyor');
  }
}
