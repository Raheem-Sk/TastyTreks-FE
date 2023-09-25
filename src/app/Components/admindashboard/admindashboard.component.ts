// import { Component, OnInit } from '@angular/core';
// import { AdminService } from 'src/app/Services/admin.service';
// import { Router } from '@angular/router';
// import { UserService } from 'src/app/Services/user.service';

// @Component({
//   selector: 'app-admindashboard',
//   templateUrl: './admindashboard.component.html',
//   styleUrls: ['./admindashboard.component.css'] // You can define the CSS styling here
// })
// export class AdminDashboardComponent implements OnInit {

//   // Define your variables and implement your logic here

//   constructor(private service:AdminService,private router:Router,private service2:UserService) {}

//   adminproducts:any
  
//   ngOnInit(): void {
//     let response = this.service.adminproducts();
//     response.subscribe((data:any)=>this.adminproducts=data);
//     this.Back()
//   }
  

//   deleteProduct(id: number) {
//     // Implement delete logic here
//     // this.service.deleteproduct(id).subscribe((data:any)=>this.ngOnInit());
//     let response=this.service.deleteproduct(id);
//     response.subscribe((data:any)=>this.ngOnInit())
//   }
  
//   updateProduct(id:number) {
//     // Implement update product logic here
//     this.router.navigate(['/updateproduct',id]);
//   }

  
//   public india(){
//     let response = this.service2.getproductbycus("indian");
//     response.subscribe((data:any)=>this.adminproducts=data);
//   }

 
//   public china(){
//     let response = this.service2.getproductbycus("chinese");
//     response.subscribe((data:any)=>this.adminproducts=data);
//   }
//   public korea(){
//     let response = this.service2.getproductbycus("korean");
//     response.subscribe((data:any)=>this.adminproducts=data);
//   }
//   public italy(){
//     let response = this.service2.getproductbycus("italian");
//     response.subscribe((data:any)=>this.adminproducts=data);
//   }

//   public japan(){
//     let response = this.service2.getproductbycus("japanese");
//     response.subscribe((data:any)=>this.adminproducts=data);
//   }
//   public Back(){
//     let response = this.service2.getproducts();
//     response.subscribe((data:any)=>this.adminproducts=data);
//   }
// }



///////////////////////////////////////////////////////////////////////////////////////////////////

import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css'] // You can define the CSS styling here
})
export class AdminDashboardComponent implements OnInit {

  // Define your variables and implement your logic here

  constructor(private service:AdminService,private router:Router,private service2:UserService) {}

  adminproducts:any
  
  ngOnInit(): void {
    let response = this.service.adminproducts();
    response.subscribe((data:any)=>this.adminproducts=data);
    this.Back()
  }
  

  deleteProduct(id: number) {
    // Implement delete logic here
    // this.service.deleteproduct(id).subscribe((data:any)=>this.ngOnInit());
    let response=this.service.deleteproduct(id);
    response.subscribe((data:any)=>this.ngOnInit())
  }
  
  updateProduct(id:number) {
    // Implement update product logic here
    this.router.navigate(['/updateproduct',id]);
  }

  sortAscending() {
    this.adminproducts.sort((a:any, b:any) => a.price - b.price);
    console.log("price");
  }

  sortDescending() {
    this.adminproducts.sort((a:any, b:any)=> b.price - a.price);
  }

  // Function to sort items by name
  sortItemsByName() {
    this.adminproducts.sort((a:any, b:any) => a.name.localeCompare(b.name));
  }

  public india(){
    let response = this.service2.getproductbycus("indian");
    response.subscribe((data:any)=>this.adminproducts=data);
  }

 
  public china(){
    let response = this.service2.getproductbycus("chinese");
    response.subscribe((data:any)=>this.adminproducts=data);
  }
  public korea(){
    let response = this.service2.getproductbycus("korean");
    response.subscribe((data:any)=>this.adminproducts=data);
  }
  public italy(){
    let response = this.service2.getproductbycus("italian");
    response.subscribe((data:any)=>this.adminproducts=data);
  }

  public japan(){
    let response = this.service2.getproductbycus("japanese");
    response.subscribe((data:any)=>this.adminproducts=data);
  }
  public Back(){
    let response = this.service2.getproducts();
    response.subscribe((data:any)=>this.adminproducts=data);
  }

  key:string='';
  searchbyname(key:string){
    let response = this.service2.getproductbykey(key);
    response.subscribe((data:any)=>this.adminproducts=data);
  }
}