import { Component, OnInit } from '@angular/core';
import { WalletService } from 'src/app/Services/wallet.service';

@Component({
  selector: 'app-payment-gateway',
  templateUrl: './payment-gateway.component.html',
  styleUrls: ['./payment-gateway.component.css'],
})
export class PaymentGatewayComponent implements OnInit {
  walletBalance: number = 0;
  paymentAmount: number = 0;
  paymentStatus: string = '';

  constructor(private walletService: WalletService) {}

  ngOnInit() {
    // Initialize wallet balance from the service
    this.walletBalance = this.walletService.getBalance();
  }

  rechargeWallet(amount: number): void {
    this.walletService.rechargeWallet(amount);
    this.walletBalance = this.walletService.getBalance();
  }

  makePayment(): void {
    if (this.walletService.deductFromWallet(this.paymentAmount)) {
      // Payment successful
      this.paymentStatus = 'Payment Confirmed. Redirecting to Dashboard...';
      setTimeout(() => {
        // Redirect to the user dashboard after a 4-second delay
        // Replace '/user-dashboard' with the actual route to your user dashboard
        window.location.href = '/user-dashboard';
      }, 4000);
    } else { 
      // Insufficient balance
      this.paymentStatus = 'Insufficient balance for this payment.';
    }
  }
}
