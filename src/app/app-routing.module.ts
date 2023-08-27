/*
======================================
; Title: app-routing.module.ts
; Author: Chris Gorham
; Date Created: 13 July 2023
; Last Updated: 27 August 2023
; Description: This code handles routing and paths
; Sources Used: N/A
;=====================================
*/

// imports
import { AddSaleComponent } from './components/add-sale/add-sale.component';
import { AdvertListComponent } from './components/advert-list/advert-list.component';
import { AdvertDetailsComponent } from './components/advert-details/advert-details.component';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { BaseLayoutComponent } from './components/base-layout/base-layout.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { Routes, RouterModule } from '@angular/router';
import { SaleDetailsComponent } from './components/sale-details/sale-details.component';
import { SalesListComponent } from './components/sales-list/sales-list.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignInGuard } from './sign-in.guard';
import { SuppliesListComponent } from './components/supplies-list/supplies-list.component';
import { SupplyDetailsComponent } from './components/supply-details/supply-details.component';


// defines the routes and paths
const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {path: '', component: HomeComponent},
      {path: 'advertising', component: AdvertListComponent},
      {path: 'sales', component: SalesListComponent },
      {path: 'supplies', component: SuppliesListComponent},
      {path: 'sales/:id', component: SaleDetailsComponent},
      {path: 'supplies/:id', component: SupplyDetailsComponent},
      {path: 'advertising/:id', component: AdvertDetailsComponent},
      {path: 'add', component: AddSaleComponent }
    ],
    canActivate: [SignInGuard]
  },
  {
    path: 'session',
    component: AuthLayoutComponent,
    children: [
      {path: 'not-found', component: NotFoundComponent},
      {path: 'sign-in', component: SignInComponent}
    ]
  },
  {
    // redirects to not-found for any link that doesn't match a route
    path: '**',
    redirectTo: 'sessions/not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



