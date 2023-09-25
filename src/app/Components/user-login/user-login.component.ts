import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { UserLogin } from 'src/app/Models/user';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
})
export class UserLoginComponent {
  userLogin: UserLogin = new UserLogin();
  
  constructor(private userService: UserService , private router: Router) {}
  message:any = ''
  user:any
  loginUser() {
    this.userService.loginUser(this.userLogin).subscribe(
      (data: any) => {
        this.user = data;
        // localStorage.setItem('userObject', JSON.stringify(data));
        console.log('Login successful', this.user.userID);
        const id = this.user.userID;
        this.router.navigate(['/userhome',id]);
        
      },
      (error) => {
        
        this.message = 'Invalid Credentials'
        console.error('Login failed', error);

      }
    );
    
    console
  }

}
