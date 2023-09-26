import { User } from './../../Models/user';
import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { UserLoginComponent } from '../user-login/user-login.component';


@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  products : any
  user:any
  cartproduct:any

  key:string=''
  constructor(private router:Router , private service:UserService,private route:ActivatedRoute){
  }


  ngOnInit(): void {
    let response = this.service.getproducts();
    response.subscribe((data:any)=>this.products=data);
    
  }
  sortAscending() {
    this.products.sort((a:any, b:any) => a.price - b.price);
    console.log("price");
  }

  sortDescending() {
    this.products.sort((a:any, b:any)=> b.price - a.price);
  }

  // Function to sort items by name
  sortItemsByName() {
    this.products.sort((a:any, b:any) => a.name.localeCompare(b.name));
  }

  searchbyname(key:string){
    let response = this.service.getproductbykey(key);
    response.subscribe((data:any)=>this.products=data);
  }

  public Back(){
    let response = this.service.getproducts();
    response.subscribe((data:any)=>this.products=data);
  }

  public india(){
    let response = this.service.getproductbycus("indian");
    response.subscribe((data:any)=>this.products=data);
  }

  public china(){
    let response = this.service.getproductbycus("chinese");
    response.subscribe((data:any)=>this.products=data);
  }
  public korea(){
    let response = this.service.getproductbycus("korean");
    response.subscribe((data:any)=>this.products=data);
  }
  public italy(){
    let response = this.service.getproductbycus("italian");
    response.subscribe((data:any)=>this.products=data);
  }

  public japan(){
    let response = this.service.getproductbycus("japanese");
    response.subscribe((data:any)=>this.products=data);
  }

number:number=0;
  public addtocart(id:number){
    let response=this.service.productById(id);
    response.subscribe((data:any)=>this.service.addtocart(data).subscribe(()=>this.number+=1));
}

logout(){
  this.service.emptyCart().subscribe();
  this.router.navigate(['/login']);
}
updateprofile(){
  this.route.paramMap.subscribe(params =>{
    const id=params.get('id');
  console.log(id)
  this.router.navigate(['/updateprofile',id])
  


  })}
  changepassword(){
    this.route.paramMap.subscribe(params =>{
      const id=params.get('id');
    console.log(id)
    this.router.navigate(['/changepass',id])
  })
}
gotocart(){
  this.route.paramMap.subscribe(params =>{
    const id=params.get('id');
  console.log(id)
  this.router.navigate(['/cart',id])

})}
 
}
