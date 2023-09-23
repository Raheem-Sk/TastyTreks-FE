import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Admin, LoginAdminData } from './admin.model'; // Import the model classes
import { Admin,LoginAdminData } from '../Models/admin';

@Injectable({
  providedIn: 'root',
})

export class AdminService {
  private baseUrl = 'http://localhost:8080/admin'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  registerAdmin(admin: Admin): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, admin);
  }

  loginAdmin(loginAdminData: LoginAdminData): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, loginAdminData);
  }
}
