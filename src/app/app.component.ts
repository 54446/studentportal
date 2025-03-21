import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegisterLoginComponent } from './pages/register-login/register-login.component';
import { HomeComponent } from "./pages/home/home.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RegisterLoginComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'student_portal';
}
