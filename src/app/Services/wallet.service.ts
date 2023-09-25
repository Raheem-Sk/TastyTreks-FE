import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root',
})
export class WalletService {
  private walletBalance:any; // Initial wallet balance

  constructor(private http:HttpClientModule,private userservice:UserService){}

  getBalance(): number {
    return this.walletBalance.subscribe((data:any)=>this.walletBalance=data.Wallet);
  }


  rechargeWallet(amount: number): void {
    this.walletBalance += amount;
  }


  deductFromWallet(amount: number): boolean {
    if (this.walletBalance >= amount) {
      this.walletBalance -= amount;
      return true; // Payment successful
    } else {
      return false; // Insufficient balance
    }
  }
}


