import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserRegistration } from 'src/app/Models/user';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
})
export class UserRegistrationComponent {
  userRegistration: UserRegistration = new UserRegistration();

  constructor(private userService: UserService,private router:Router) {}

  registerUser() {
    this.userService.registerUser(this.userRegistration).subscribe(
      (response) => {
        this.router.navigate(['/login'])
        console.log('Registration successful', response);
      },
      (error) => {

        console.error('Registration failed', error);
      }
    );
  }
}
