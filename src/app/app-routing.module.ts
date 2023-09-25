import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegistrationComponent } from './Components/user-registration/user-registration.component';
import { UserLoginComponent } from './Components/user-login/user-login.component';
import { AdminComponent } from './Components/admin/admin.component';
import { UserDashboardComponent } from './Components/user-dashboard/user-dashboard.component';
import { HeaderComponent } from './Components/header/header.component';
import { AdminDashboardComponent } from './Components/admindashboard/admindashboard.component';
import { AddProductComponent } from './Components/addproduct/addproduct.component';
import { UpdateProductComponent } from './Components/updateproduct/updateproduct.component';
import { CartComponent } from './Components/cart/cart.component';


const routes: Routes = [
  { path: 'register', component: UserRegistrationComponent },
  {path : 'userhome', component: UserDashboardComponent},
  { path: 'login', component: UserLoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: 'admindashboard' , component:AdminDashboardComponent},
  {path: 'addproduct' , component:AddProductComponent},
  {path: 'updateproduct/:id' , component:UpdateProductComponent},
  {path:'header', component: HeaderComponent},
  { path:'cart',component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
