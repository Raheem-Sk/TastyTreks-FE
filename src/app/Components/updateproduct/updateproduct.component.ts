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
  product: Products = new Products(); // Initialize an instance of the Products model
  productId: number;

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // Get the product ID from the route parameters
    this.productId = +this.route.snapshot.paramMap.get('id');

    // Fetch the product data by ID
    this.productService.getProductById(this.productId).subscribe(
      (data) => {
        this.product = data;
      },
      (error) => {
        console.error('Error fetching product data', error);
      }
    );
  }

  onSubmit() {
    this.productService.updateProduct(this.productId, this.product).subscribe(
      (response) => {
        console.log('Product updated successfully', response);
        // // Optionally, navigate to a different page after updating the product.
        // this.router.navigate(['/products']); // Example: Navigate to the products list page
      },
      (error) => {
        console.error('Error updating product', error);
      }
    );
  }
}
