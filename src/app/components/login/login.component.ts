import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule,CommonModule],
})
export class LoginComponent {
  email = '';
  password :string = '';
  errorMessage = '';

  onSubmit(): void {
    if (this.email === 'test@gmail.com' && this.password === 'password') {
      alert('Login Successful');
    } else {
      this.errorMessage = 'Invalid email or password';
    }
  }
}
