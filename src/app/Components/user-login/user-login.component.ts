import { Component } from '@angular/core';
import { UserLogin } from 'src/app/Models/user';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
})
export class UserLoginComponent {
  userLogin: UserLogin = new UserLogin();

  constructor(private userService: UserService) {}

  loginUser() {
    this.userService.loginUser(this.userLogin).subscribe(
      (response) => {

        console.log('Login successful', response);

      },
      (error) => {

        console.error('Login failed', error);

      }
    );
  }
}
