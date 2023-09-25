import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = ''; 


  constructor(private http: HttpClient) {}




  public getCart() {
    return this.http.get('http://localhost:8080/Cart/ShowProducts');
  }



  addOneCart(id: any, cart: any): Observable<any> {
    const url = `${this.apiUrl}/cart/${id}`;
    return this.http.post<any>(url, cart);
  }



  lessOneCart(id: any, cart: any): Observable<any> {
    const url = `${this.apiUrl}/cart/${id}`;
    return this.http.put<any>(url, cart);
  }



  deleteItem(id: any): Observable<any> {
    const url = `${this.apiUrl}/cart/${id}`;
    return this.http.delete<any>(url);
  }



  deleteAllCart(): Observable<any> {
    const url = `${this.apiUrl}/cart`;
    return this.http.delete<any>(url);
  }

  public emptyCart(){
    return this.http.delete('http://localhost:8080/Cart/deleteAll');
  }
}
