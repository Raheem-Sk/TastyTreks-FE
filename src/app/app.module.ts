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
// import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { PaymentGatewayComponent } from './Components/payment-gateway/payment-gateway.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { AdminComponent } from './Components/admin/admin.component';
import { UserRegistrationComponent } from './Components/user-registration/user-registration.component';
import { UserLoginComponent } from './Components/user-login/user-login.component';
import { UserDashboardComponent } from './Components/user-dashboard/user-dashboard.component';
// import { AdminDashboardComponent } from './Components/admindashboard/admindashboard.component';

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
    UserDashboardComponent,
    // ShoppingCartComponent,

    // AdmindashboardComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
