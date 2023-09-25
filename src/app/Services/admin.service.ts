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

  // private apiurl ='http://localhost:8080/product';

  constructor(private http: HttpClient) {}

  registerAdmin(admin: Admin): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, admin);
  }

  loginAdmin(loginAdminData: LoginAdminData): Observable<any> {
    console.log("adminn")
    return this.http.post(`${this.baseUrl}/login`, loginAdminData);
  }

  public adminproducts(){
    return this.http.get('http://localhost:8080/product/allproducts')
  }

public deleteproduct(id:number){
  return this.http.delete('http://localhost:8080/product/delete/'+id)
 
}




  }

