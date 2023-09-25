// import { Component, OnInit } from '@angular/core';
// import { CartService } from 'src/app/Services/cart.service';
// import { Cart } from 'src/app/Models/cart.model';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-cart',
//   templateUrl: './cart.component.html',
//   styleUrls: ['./cart.component.css']
// })
// export class CartComponent implements OnInit{
//   constructor(private service:CartService,private router:Router){}
//   cart:Cart []=[]

//   ngOnInit(): void {
//     let response=this.service.getCart();
//     response.subscribe((data:any)=>this.cart=data)
//   }

  
//   incrementQuantity(item: any) {
//     // Implement logic to increment item.quantity and update item.total
//     item.quantity++;
//     item.price = item.quantity * item.product.price;
//   }

//   decrementQuantity(item: any) {
//     // Implement logic to decrement item.quantity and update item.total
//     if (item.quantity > 1) {
//       item.quantity--;
//       item.price = item.quantity * item.product.price;
//     }
//   }

//   calculateGrandTotal(): number {
//     // Implement logic to calculate the grand total based on cartItems
//     return this.cart.reduce((total, item) => total + item.price, 0);
//   }

//   checkout(gtotal:number) {
//     // Implement logic to navigate to the payment gateway
//     this.router.navigate(['/pay',gtotal]);
//   }

//   emptyCart() {
//     // Implement logic to empty the cart
//     this.service.emptyCart().subscribe(()=>this.router.navigate(['/userhome']));
//   }
// }

///////////////////////////////////////////////////////////////////////////////////////


import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { Cart } from 'src/app/Models/cart.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  constructor(private service:CartService,private router:Router,private route:ActivatedRoute){}
  cart:Cart []=[]
  id:any
  ngOnInit(): void {
    let response=this.service.getCart();
    response.subscribe((data:any)=>this.cart=data)
    
  }
   
  
  incrementQuantity(item: any) {
    // Implement logic to increment item.quantity and update item.total
    
    item.quantity++;
    item.price = item.quantity * item.product.price;
  }

  decrementQuantity(item: any) {
    // Implement logic to decrement item.quantity and update item.total
    if (item.quantity > 1) {
      item.quantity--;
      item.price = item.quantity * item.product.price;
    }
  }

  calculateGrandTotal(): number {
    // Implement logic to calculate the grand total based on cartItems
    return this.cart.reduce((total, item) => total + item.price, 0);
  }

  checkout(gtotal:number) {
    // Implement logic to navigate to the payment gateway
      this.route.paramMap.subscribe(params =>{
      this.id=params.get('id');
      this.router.navigate(['pay/',gtotal,this.id]);
     } )
  }

  emptyCart() {
  
    this.route.paramMap.subscribe(params =>{
    this.id=params.get('id');
    this.service.emptyCart().subscribe();
    this.router.navigate(['/userhome',this.id])

  })}
}
