/*
======================================
; Title: app.module.ts
; Author: Chris Gorham
; Date Created: 13 July 2023
; Last Updated: 04 August 2023
; Description: This code supports app module functionality
; Sources Used: N/A
;=====================================
*/

// imports
import { AddSaleComponent } from './components/add-sale/add-sale.component';
import { AddSaleDialogComponent } from './components/add-sale-dialog/add-sale-dialog.component';
import { AddSupplyComponent } from './components/add-supply/add-supply.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { BaseLayoutComponent } from './components/base-layout/base-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { DescriptionCreateComponent } from './components/description-create/description-create.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { SaleDetailsComponent } from './components/sale-details/sale-details.component';
import { SalesListComponent } from './components/sales-list/sales-list.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { StatsComponent } from './components/stats/stats.component';
import { SuppliesListComponent } from './components/supplies-list/supplies-list.component';
import { SupplyDetailsComponent } from './components/supply-details/supply-details.component';
import { TaxesComponent } from './components/taxes/taxes.component';
import { AddAdvertComponent } from './components/add-advert/add-advert.component';
import { AdvertDetailsComponent } from './components/advert-details/advert-details.component';
import { AdvertListComponent } from './components/advert-list/advert-list.component';





@NgModule({
  declarations: [
    AppComponent,
    AddSaleComponent,
    SaleDetailsComponent,
    SalesListComponent,
    HomeComponent,
    TaxesComponent,
    BaseLayoutComponent,
    AuthLayoutComponent,
    StatsComponent,
    SignInComponent,
    SupplyDetailsComponent,
    AddSupplyComponent,
    SuppliesListComponent,
    DescriptionCreateComponent,
    AddSaleDialogComponent,
    AddAdvertComponent,
    AdvertDetailsComponent,
    AdvertListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatListModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
