
import { Products } from '../Models/products';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getAllProducts() {
    throw new Error('Method not implemented.');
  }
  public login = new BehaviorSubject<any>([]);
  private baseURL = "http://localhost:8080/product";
  private updateURl ="http://localhost:8080/product/update"
  private adminURL= "http://localhost:8080/AdminProducts";

  constructor(private httpClient: HttpClient) { }

  getLogin(){
    return this.login.asObservable();
  }


  getProductList():Observable<Products[]>{
    return this.httpClient.get<Products[]>(`${this.baseURL}/cust`);
  }


  public getProductById(id : any) : Observable<Products> {
    return this.httpClient.get<Products>(`${this.baseURL}/search/${id}`);
  }


  public getProductSearch(keyword:string):Observable<Products[]>{
    return this.httpClient.get<Products[]>(`${this.baseURL}/search/${keyword}`);
  }


  getChinese():Observable<Products[]>{
    return this.httpClient.get<Products[]>(`${this.baseURL}/chinese`);
  }


  getIndian():Observable<Products[]>{
    return this.httpClient.get<Products[]>(`${this.baseURL}/indian`);
  }


  getMexican():Observable<Products[]>{
    return this.httpClient.get<Products[]>(`${this.baseURL}/mexican`);
  }


  getItalian():Observable<Products[]>{
    return this.httpClient.get<Products[]>(`${this.baseURL}/italian`);
  }


  getFullProductList():Observable<Products[]>{
    return this.httpClient.get<Products[]>(`${this.baseURL}/Admin`);
  }


  addProduct(product:Products):Observable<Object>{
    return this.httpClient.post('http://localhost:8080/product/save',product);
  }


  updateProduct(id:any,product:Products):Observable<Object>{
    return this.httpClient.put<Products>(`${this.updateURl}/${id}`,product);
  }


  deleteProduct(id:number):Observable<Products>{
    return this.httpClient.delete<Products>("http://localhost:8080/product/search/"+id);
  }
}


