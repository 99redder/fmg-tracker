/*
======================================
; Title: sales-list.component.ts
; Author: Red
; Date Created: 27 July 2023
; Last Updated: 02 August 2023
; Description: This code supports functionality for the Sales List Component
; Sources Used:
; Angular Forms Overview https://angular.io/guide/forms-overview
; Angular Validators https://angular.io/api/forms/Validators
; BezKoder Angular 10 CRUD Application Tutorial https://www.bezkoder.com/angular-10-node-js-express-mysql/
;=====================================
*/

// imports
import { AUTO_STYLE, animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SaleService } from 'src/app/services/sale.service';

// sets the animation duration time
const DEFAULT_DURATION = 300;

@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.css'],
  animations: [
    trigger('collapse', [
    state('false', style({ height: AUTO_STYLE, visibility: AUTO_STYLE })),
    state('true', style({ height: '0', visibility: 'hidden' })),
    transition('false => true', animate(DEFAULT_DURATION + 'ms ease-in')),
    transition('true => false', animate(DEFAULT_DURATION + 'ms ease-out'))
  ])
]
})
export class SalesListComponent implements OnInit {

  // creates the input submitted variable
  itemInputSubmitted: Boolean;


  // sets the add sale form to hidden at the start
  addASaleCollapsed = true;

  // Add a Sale collapsible functions
  addASaleToggle() {
    this.addASaleCollapsed = !this.addASaleCollapsed;
    this.refreshList();
  }
  addASaleExpand() {
    this.addASaleCollapsed = false;
    this.refreshList();
  }
  addASaleCollapse() {
    this.addASaleCollapsed = true;
    this.refreshList();
  }

  sales: any;
  currentSale = null;
  currentIndex = -1;
  itemDescription = '';

  // pagination variables
  page = 1;
  count = 0;
  pageSize = 10;
  pageSizes = [10, 25, 50];

  constructor(private fb: FormBuilder, private router: Router, private saleService: SaleService) { }

  ngOnInit(): void {
    this.retrieveSales();
  }

  getRequestParams(searchSale, page, pageSize): any {
    let params = {};

    if (searchSale) {
      params['itemDescription'] = searchSale;
    }

    if (page) {
      params['page'] = page - 1;
    }

    if (pageSize) {
      params ['size'] = pageSize;
    }

    return params;
  }

  retrieveSales(): void {
    const params = this.getRequestParams(this.itemDescription, this.page, this.pageSize);

    this.saleService.getAll(params)
      .subscribe(
        response => {
          const { sales, totalItems } = response;
          this.sales = sales;
          this.count = totalItems;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  handlePageChange(event): void {
    this.page = event;
    this.retrieveSales();
  }

  handlePageSizeChange(event): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.retrieveSales();
  }

  refreshList(): void {
    this.retrieveSales();
    this.currentSale = null;
    this.currentIndex = -1;
  }

  setActiveSale(sale, index): void {
    this.currentSale = sale;
    this.currentIndex = index;
  }

  removeAllSales(): void {
    this.saleService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveSales();
        },
        error => {
          console.log(error);
        });
  }

  searchItemDescription(): void {
    this.saleService.findByItemDescription(this.itemDescription)
      .subscribe(
        data => {
          this.sales = data;
          this.refreshList();
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
