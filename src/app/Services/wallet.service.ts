import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class WalletService {
  private walletBalance: number = 100; // Initial wallet balance


  getBalance(): number {
    return this.walletBalance;
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


