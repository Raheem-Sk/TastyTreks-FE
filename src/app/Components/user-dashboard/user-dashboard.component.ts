import { Component,OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';


@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  @Input() products : any;

  key:string=''
  constructor(private router:Router , private service:UserService){}

  ngOnInit(): void {
    let response = this.service.getproducts();
    response.subscribe((data:any)=>this.products=data);
  }

  searchbyname(key:string){
    console.log(key)
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
    let response = this.service.getproductbycus("china");
    response.subscribe((data:any)=>this.products=data);
  }
  public korea(){
    let response = this.service.getproductbycus("korea");
    response.subscribe((data:any)=>this.products=data);
  }
  public italy(){
    let response = this.service.getproductbycus("italy");
    response.subscribe((data:any)=>this.products=data);
  }

  public japan(){
    let response = this.service.getproductbycus("japan");
    response.subscribe((data:any)=>this.products=data);
  }


}
