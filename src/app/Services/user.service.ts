// import { Products } from './../Models/products';
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
    return this.http.post<any>(registrationUrl, userRegistration);

  }

  loginUser(userLogin: UserLogin): Observable<any> {
    const loginUrl = `${this.baseUrl}/login`;
    return this.http.post(loginUrl, userLogin);
  }

  getuserbyid(id: any) {
    const loginUrl = `${this.baseUrl}/user/`+id;
    console.log(id);
    return this.http.get(loginUrl);
  }

  updatewallet(walletBalance: number,id:number) {
    console.log(id);

    return this.http.put("http://localhost:8080/wallet/"+id,walletBalance);
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

  public productById(id:number){
    return this.http.get("http://localhost:8080/product/search/"+id);
  }
  public addtocart(data:any){
    console.log(data.id)
    return this.http.post("http://localhost:8080/Cart/Add",data);
    }

public emptyCart(){
  return this.http.delete('http://localhost:8080/Cart/deleteAll');
}
public updateUser(id:number,user:any){
  return this.http.put('http://localhost:8080/update/'+id,user);
}
public changepass(id:number,password:any){
  return this.http.put('http://localhost:8080/changepassword/'+id,password);
}

}
