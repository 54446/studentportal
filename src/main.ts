import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { RegisterLoginComponent } from './app/pages/register-login/register-login.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; // ✅ Use provideHttpClient()

bootstrapApplication(RegisterLoginComponent, {
  providers: [provideRouter([]), provideHttpClient(), ] // ✅ Fix here
}).catch(err => console.error(err));
