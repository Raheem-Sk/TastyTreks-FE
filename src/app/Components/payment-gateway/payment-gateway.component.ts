import { Component } from '@angular/core';
import { WalletService } from '../shopping-cart/shopping-cart.component';

@Component({
  selector: 'app-payment-gateway',
  templateUrl: './payment-gateway.component.html',
  styleUrls: ['./payment-gateway.component.css']

})
export class PaymentGatewayComponent {
  walletBalance: number = 0;
  paymentAmount: number = 0;
  paymentStatus: string = '';


  constructor(private WalletService: WalletService) {
    this.walletBalance = this.WalletService.getBalance();
  }


  rechargeWallet(amount: number): void {
    this.WalletService.rechargeWallet(amount);
    this.walletBalance += amount;
  }


  makePayment(): void {
    if (this.WalletService.deductFromWallet(this.paymentAmount)) {
      // Simulate payment confirmation (replace with actual payment gateway integration)
      this.confirmPayment();
    } else {
      this.paymentStatus = 'Insufficient balance.';
    }
  }


  confirmPayment(): void {
    this.paymentStatus = 'Payment confirmed and order placed successfully.';
  }
}
