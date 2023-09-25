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
import { PaymentGatewayComponent } from './Components/payment-gateway/payment-gateway.component';
import { UserupdateComponent } from './Components/userupdate/userupdate.component';
import { PasswordchangeComponent } from './Components/passwordchange/passwordchange.component';


const routes: Routes = [
  { path: 'register', component: UserRegistrationComponent },
  {path : 'userhome/:id', component: UserDashboardComponent},
  { path: 'login', component: UserLoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: 'admindashboard' , component:AdminDashboardComponent},
  {path: 'addproduct' , component:AddProductComponent},
  {path: 'updateproduct/:id' , component:UpdateProductComponent},
  {path:'header', component: HeaderComponent},
  {path:'pay/:gtotal/:id', component: PaymentGatewayComponent},
  {path: 'updateprofile/:id' , component:UserupdateComponent},
  {path: 'changepass/:id' , component:PasswordchangeComponent},



  { path:'cart/:id',component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
