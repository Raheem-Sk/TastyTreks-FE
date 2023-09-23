import { Products } from './../Models/products';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserLogin } from '../Models/user';
import { UserRegistration } from '../Models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  registerUser(userRegistration: UserRegistration): Observable<void> {
    console.log("working")
    const registrationUrl = `${this.baseUrl}/register`;
    return this.http.post<void>(registrationUrl, userRegistration);

  }

  loginUser(userLogin: UserLogin): Observable<any> {
    const loginUrl = `${this.baseUrl}/login`;
    return this.http.post(loginUrl, userLogin);
  }

  public getproducts(){
    return this.http.get("http://localhost:8080/product/allproducts");
    }

  public getproductbykey(key:string){
    return this.http.post("http://localhost:8080/product/search",key);

  }

  public getproductbycus(key:string){
    return this.http.post("http://localhost:8080/product/searchbycusine",key);

  }





}
