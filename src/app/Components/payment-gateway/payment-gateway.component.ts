import { User } from './../../Models/user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';
import { UserService } from 'src/app/Services/user.service';
import { WalletService } from 'src/app/Services/wallet.service';

@Component({
  selector: 'app-payment-gateway',
  templateUrl: './payment-gateway.component.html',
  styleUrls: ['./payment-gateway.component.css'],
})
export class PaymentGatewayComponent implements OnInit {
  walletBalance: any;
  paymentAmount: any;
  paymentStatus: string = '';
  user:any
  id:any

  constructor(private walletService: WalletService,private route:ActivatedRoute,private service:UserService,private router:Router) {}
  
  ngOnInit() {
    this.route.paramMap.subscribe(params =>{
      this.paymentAmount=params.get('gtotal');
      this.id=params.get('id');
      console.log(this.id)

      this.service.getuserbyid(this.id).subscribe(
        (data: any) => {
          this.user = data;
          this.walletBalance=this.user.wallet
          // console.log(data.wallet)
      


      })})





  }

  rechargeWallet(amount: number): void {
    this.walletService.rechargeWallet(amount);
    this.walletBalance = this.walletService.getBalance();
  }

  makePayment(): void {

  if(this.walletBalance>this.paymentAmount){
      this.walletBalance=this.walletBalance-this.paymentAmount;
         console.log(this.walletBalance);
          this.service.updatewallet(this.walletBalance,this.id).subscribe();
          this.paymentStatus = 'Payment Confirmed. Redirecting to Dashboard...';
          this.service.emptyCart().subscribe();
          setTimeout(() => {
          // window.location.href = '/userhome',this.id;
          this.router.navigate(['/userhome',this.id])
        }, 4000);


}
else { 
      // Insufficient balance
      this.paymentStatus = 'Insufficient balance for this payment.';
    }






















}
}