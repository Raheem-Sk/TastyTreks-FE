import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css'] // You can define the CSS styling here
})
export class AdminDashboardComponent implements OnInit {

  // Define your variables and implement your logic here

  constructor(private service:AdminService,private router:Router) {}
  adminproducts:any
  ngOnInit(): void {
    // Initialize data or make API calls here
    let response = this.service.adminproducts();
    response.subscribe((data:any)=>this.adminproducts=data);
  }


  deleteProduct(id: number) {
    // Implement delete logic here
    // this.service.deleteproduct(id).subscribe((data:any)=>this.ngOnInit());
    let response=this.service.deleteproduct(id);
    response.subscribe((data:any)=>this.router.navigate(['/admindashboard']))
    
  
  }
  
  updateProduct(id:number) {
    // Implement update product logic here
    this.router.navigate(['/updateproduct',id])

    
  }
}
