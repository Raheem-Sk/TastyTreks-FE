import { Component } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
import { Products } from 'src/app/Models/products';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddProductComponent {
  product: Products = new Products();

  constructor(private productService: ProductService,private router:Router) { }

  onSubmit() {
    this.productService.addProduct(this.product).subscribe(
      (response) => {
        console.log('Product added successfully');
        // Optionally, navigate to a different page after adding the product.
      },
      (error) => {
        console.error('Error adding product', error);
      }
    );
    this.router.navigate(['/admindashboard']);

  }
}
