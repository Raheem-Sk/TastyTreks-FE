import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-userupdate',
  templateUrl: './userupdate.component.html',
  styleUrls: ['./userupdate.component.css']
})
export class UserupdateComponent implements OnInit{
  constructor(private service:UserService,private route:ActivatedRoute,private router:Router){}
  user:any
  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
      const id=params.get('id');
    console.log(id)
    let response=this.service.getuserbyid(id).subscribe((data:any)=>this.user=data)
  })
  

}

updateuser(id:number){
  console.log(id)
  console.log(this.user.address)
  this.service.updateUser(id,this.user).subscribe(()=>this.router.navigate(['/userhome',id]))
}





}
