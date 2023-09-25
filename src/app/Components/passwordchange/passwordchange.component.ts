import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-passwordchange',
  templateUrl: './passwordchange.component.html',
  styleUrls: ['./passwordchange.component.css']
})
export class PasswordchangeComponent implements OnInit{
  password:any
  confirmpassword:any
  errmsg:string=""
  constructor(private service:UserService,private route:ActivatedRoute,private router:Router){}
  user:any
  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
      const id=params.get('id');
    console.log(id)
    let response=this.service.getuserbyid(id).subscribe((data:any)=>this.user=data)
  })
  
}


passwordchange(id:number){
  console.log(this.password)
  if(this.password === this.confirmpassword){
    console.log("its working")
    this.service.changepass(id,this.password).subscribe();
    this.router.navigate(['/userhome',id]);
  }
  else{
    this.errmsg="Password Doesn't matched"
  }

}



}
