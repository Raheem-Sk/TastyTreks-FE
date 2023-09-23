import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegistrationComponent } from './Components/user-registration/user-registration.component';
import { UserLoginComponent } from './Components/user-login/user-login.component';
import { AdminComponent } from './Components/admin/admin.component';
import { UserDashboardComponent } from './Components/user-dashboard/user-dashboard.component';
import { HeaderComponent } from './Components/header/header.component';


const routes: Routes = [
  { path: 'register', component: UserRegistrationComponent },
  {path : 'userhome', component: UserDashboardComponent},
  { path: 'login', component: UserLoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: '', redirectTo: 'header', pathMatch: 'full' },
  {path:'header', component: HeaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
