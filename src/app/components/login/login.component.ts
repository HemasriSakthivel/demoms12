import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class LoginComponent {
  email = '';
  password: string = '';
  errorMessage = '';
  passwordFieldType: string = 'password';
  submitted: boolean = false; 

  onClick(loginForm: any): void {
    this.submitted = true;  

    if (loginForm.valid) {
      if (this.email === 'test@gmail.com' && this.password === 'password') {
        alert('Login Successful');
      } else {
        this.errorMessage = 'Invalid email or password';
        console.log('Login form submitted:', { email: this.email, password: this.password });
      }
    } else {
      this.errorMessage = 'Please fill out all required fields';
    }
  }

  togglePasswordVisibility(): void {
    this.passwordFieldType =
      this.passwordFieldType === 'password' ? 'text' : 'password';
  }
}
