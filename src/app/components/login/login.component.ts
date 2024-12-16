import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink, ReactiveFormsModule],
})
export class LoginComponent {
  email = '';
  password: string = '';
  errorMessage:string = '';
  passwordFieldType: string = 'password';
  signinAs: any;

  onClick(loginForm: any): void {

    if (loginForm.valid) {
      this.errorMessage='';
      if (this.email === 'test@gmail.com' && this.password === 'password') {
        alert('Login Successful');
        loginForm.reset();
      } else {
        this.errorMessage = 'Invalid email or password';
        console.log('Login form submitted:', { email: this.email, password: this.password });
      }
    } else {
      this.errorMessage = 'Please fill out all required fields';
    }
  }

  ttogglePasswordVisibility(): void {
    this.passwordFieldType =
      this.passwordFieldType === 'password' ? 'text' : 'password';
  }
  
}
