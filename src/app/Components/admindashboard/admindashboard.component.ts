import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css'] // You can define the CSS styling here
})
export class AdminDashboardComponent implements OnInit {

  sortedProd: any[] = [];

  // Define your variables and implement your logic here

  constructor(private service:AdminService) {}
  adminproducts:any
  ngOnInit(): void {
    // Initialize data or make API calls here
    let response = this.service.adminproducts();
    response.subscribe((data:any)=>this.adminproducts=data);
  }


  adminLogout() {
    // Implement the logout functionality here
  }

  clickAddProduct() {
    // Implement the logic for adding a product here
  }

  sortData(event: any) {
    // Implement sorting logic here
  }

  onEdit(product: any) {
    // Implement editing logic here
  }

  deleteProduct(product: any) {
    // Implement delete logic here
  }

  addProduct() {
    // Implement add product logic here
  }

  updateProduct() {
    // Implement update product logic here
  }
}
