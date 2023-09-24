import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';
import { Products } from 'src/app/Models/product';
// import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateProductComponent implements OnInit {
  product: any // Initialize an instance of the Products model
  

  constructor(private service: ProductService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
      this.route.paramMap.subscribe(params =>{
        const id=params.get('id');
        console.log(id)
  
        this.service.getProductById(id).subscribe((data:any)=>this.product=data)
        console.log(this.product.name)

      })
    
  }

  onSubmit(id:any) {
    
    this.service.updateProduct(id, this.product).subscribe(
      (response) => {
        console.log('Product updated successfully', response);
        // // Optionally, navigate to a different page after updating the product.
        // this.router.navigate(['/products']); // Example: Navigate to the products list page
      },
      (error) => {
        console.error('Error updating product', error);

        
      }
      
    );
    this.router.navigate(['/admindashboard']);
}
}
