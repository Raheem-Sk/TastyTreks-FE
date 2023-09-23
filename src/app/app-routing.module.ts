import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegistrationComponent } from './Components/user-registration/user-registration.component';
import { UserLoginComponent } from './Components/user-login/user-login.component';
import { AdminComponent } from './Components/admin/admin.component';
import { AddProductComponent } from './Components/addproduct/addproduct.component';

const routes: Routes = [
  { path: 'register', component: UserRegistrationComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'addproduct', component: AddProductComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
