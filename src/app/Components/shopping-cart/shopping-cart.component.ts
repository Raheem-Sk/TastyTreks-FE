// import { Component, OnInit } from '@angular/core';

// import { Cart } from 'src/app/Models/cart.model';

// import { CartService } from 'src/app/Services/cart.service';
// import { Router } from '@angular/router';






// @Component({
//   selector: 'app-shopping-cart',
//   templateUrl: './shopping-cart.component.html',
//   styleUrls: ['./shopping-cart.component.css']
// })
// export class ShoppingCartComponent  {
//   public cart: Cart = new Cart();
//   public products: Cart[];
//   public grandTotal: number = 0;


//   constructor(private cartService: CartService, private router: Router) {
//     this.products = [];
//   }





//   private getCartItemList() {
//     this.cartService.getCartItemList().subscribe((res: Cart[]) => {
//       this.products = res;
//       this.grandTotal = 0;
//       for (let i = 0; i < this.products.length; i++) {
//         this.grandTotal += this.products[i].price;
//       }
//       sessionStorage.setItem('grandTotal', "" + this.grandTotal);
//     });
//   }


//   deleteItem(id: any) {
//     this.cartService.deleteItem(id).subscribe(res => {
//       this.getCartItemList();
//     });
//   }


//   removeAllCart() {
//     this.cartService.deleteAllCart().subscribe(res => {
//       this.getCartItemList();
//     });
//   }


//   addOneCart(id: any, cart: Cart) {
//     this.cartService.addOneCart(id, cart).subscribe(res => {
//       this.getCartItemList();
//     });
//   }


//   lessOneCart(id: any, cart: Cart) {
//     this.cartService.lessOneCart(id, cart).subscribe(res => {
//       this.getCartItemList();
//     });
//   }
// }
