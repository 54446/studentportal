import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-register-login',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './register-login.component.html',
  styleUrl: './register-login.component.scss'
})
export class RegisterLoginComponent implements AfterViewInit {
  private container!: HTMLElement | null;
  private registerBtn!: HTMLElement | null;
  private loginBtn!: HTMLElement | null;

  learner = {
    Names: '',
    Surname: '',
    Email: '',
    Username: '',
    PasswordHash: '',
  };

  constructor(private router: Router, private http: HttpClient) {}

  ngAfterViewInit(): void {
    this.container = document.querySelector('.container');
    this.registerBtn = document.querySelector('.register-btn');
    this.loginBtn = document.querySelector('.login-btn');

    if (this.registerBtn && this.container) {
      this.registerBtn.addEventListener('click', () => {
        this.container?.classList.add('active');
      });
    }

    if (this.loginBtn && this.container) {
      this.loginBtn.addEventListener('click', () => {
        this.container?.classList.remove('active');
      });
    }
  }

  onRegister(): void {
    const apiUrl = 'http://localhost:8000/add_users'; // Replace with your API URL

    this.http.post(apiUrl, this.learner).subscribe(
      (response) => {
        alert('User registered successfully');
        this.container?.classList.remove('active'); // Switch to login view after successful registration
      },
      (error) => {
        alert('Error registering user');
      }
    );
  }

  onLogin(): void {
    this.router.navigate(['/home']); // Redirect to home page
  }
}
