import { Component } from '@angular/core';

import { UserRegistration } from 'src/app/Models/user';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
})
export class UserRegistrationComponent {
  userRegistration: UserRegistration = new UserRegistration();

  constructor(private userService: UserService) {}

  registerUser() {
    this.userService.registerUser(this.userRegistration).subscribe(
      (response) => {

        console.log('Registration successful', response);
        console.log(response)
      },
      (error) => {

        console.error('Registration failed', error);
      }
    );
  }
}
