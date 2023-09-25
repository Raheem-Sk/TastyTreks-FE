import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { MenuComponent } from './Components/menu/menu.component';
import { PaymentGatewayComponent } from './Components/payment-gateway/payment-gateway.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { AdminComponent } from './Components/admin/admin.component';
import { UserRegistrationComponent } from './Components/user-registration/user-registration.component';
import { UserLoginComponent } from './Components/user-login/user-login.component';
import { AdminDashboardComponent } from './Components/admindashboard/admindashboard.component';
import { AddProductComponent } from './Components/addproduct/addproduct.component';
import { CommonModule } from '@angular/common';
import { UserDashboardComponent } from './Components/user-dashboard/user-dashboard.component';
import { UpdateProductComponent } from './Components/updateproduct/updateproduct.component';
import { CartComponent } from './Components/cart/cart.component';
import { UserupdateComponent } from './Components/userupdate/userupdate.component';
import { PasswordchangeComponent } from './Components/passwordchange/passwordchange.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    MenuComponent,
    PaymentGatewayComponent,
    HeaderComponent,
    FooterComponent,
    AdminComponent,
    UserRegistrationComponent,
    UserLoginComponent,
    AdminDashboardComponent,
    AddProductComponent,
    UserDashboardComponent,
    UpdateProductComponent,
    CartComponent,
    UserupdateComponent,
    PasswordchangeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
