import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = 'your_api_url_here'; 


  constructor(private http: HttpClient) {}




  getCartItemList(): Observable<any[]> {
    const url = `${this.apiUrl}/cart`;
    return this.http.get<any[]>(url);
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
}
