import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { DashboardBodyComponent } from './dashboard-body/dashboard-body.component';
import { DashboardOverviewComponent } from './dashboard-overview/dashboard-overview.component';
import { TableComponent } from './shared/table/table.component';
import { DialogBoxComponent } from './shared/dialog-box/dialog-box.component';
import { LoginComponent } from './forms/login/login.component';
import { SignupComponent } from './forms/signup/signup.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavigationComponent,
    DashboardHeaderComponent,
    DashboardBodyComponent,
    DashboardOverviewComponent,
    TableComponent,
    DialogBoxComponent,
    LoginComponent,
    SignupComponent,
    HeaderMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
