import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-register-login',
  standalone: true,
  templateUrl: './register-login.component.html',
  styleUrl: './register-login.component.scss'
})
export class RegisterLoginComponent implements AfterViewInit {

  private container!: HTMLElement | null;
  private registerBtn!: HTMLElement | null;
  private loginBtn!: HTMLElement | null;

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
}

