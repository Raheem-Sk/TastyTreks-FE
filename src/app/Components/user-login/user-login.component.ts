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

  loginUser() {
    this.userService.loginUser(this.userLogin).subscribe(
      (response) => {

        this.router.navigate(['/userhome']);
        console.log('Login successful', response);

      },
      (error) => {
        
        this.message = 'Invalid Credentials'
        console.error('Login failed', error);

      }
    );
  }
}
