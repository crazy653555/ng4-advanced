import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule}from'@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardsComponent } from './cards/cards.component';
import { ChartsRoutingModule } from './charts/charts-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login.guard';
import { EnsureloginGuard } from './ensurelogin.guard';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';
import { BlockComponent } from './block/block.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CardsComponent,
    LayoutComponent,
    LoginComponent,
    Form1Component,
    Form2Component,
    BlockComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [LoginGuard, EnsureloginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
