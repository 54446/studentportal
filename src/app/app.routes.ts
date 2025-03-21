import { Routes } from '@angular/router';
import { RegisterLoginComponent } from './pages/register-login/register-login.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { path: '', component: RegisterLoginComponent },
    { path: 'home', component: HomeComponent}
];
