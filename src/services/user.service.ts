import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8000/getregistered_users'; // Adjust port if needed

  constructor(private http: HttpClient) {}

  getRegisteredUsers(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
