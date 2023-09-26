import { Component } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';

import { Admin,LoginAdminData } from 'src/app/Models/admin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  // Initialize an instance of the Admin class
  admin: Admin = new Admin();
  // Initialize an instance of the LoginAdminData class
  loginAdminData: LoginAdminData = new LoginAdminData();

  showRegistration = false;
  showLogin = false;

  constructor(private adminService: AdminService,private router:Router) {}

  showRegistrationForm() {
    this.showRegistration = true;
    this.showLogin = false;
  }

  showLoginForm() {
    this.showRegistration = false;
    this.showLogin = true;
  }

  registerAdmin() {
    this. showLoginForm();
    this.adminService.registerAdmin(this.admin).subscribe(
      (response: any) => {
        console.log('Registration Successful',);
       
      },
      (error: any) => {
        console.error('Registration failed', error);
      }
    );
  }

  msg=''
  loginAdmin() {
    this.adminService.loginAdmin(this.loginAdminData).subscribe(
      (response: any) => {
        this.router.navigate(['/admindashboard']);
        console.log('Login Successful', response);
      },
      (error: any) => {
        this.msg='Invalid credentails'
        console.error('Login failed', error);
      }
    );
  }
}