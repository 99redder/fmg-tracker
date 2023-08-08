/*
======================================
; Title: supplies-list.component.ts
; Author: Chris Gorham
; Date Created: 27 July 2023
; Last Updated: 02 August 2023
; Description: This code supports functionality for the Supplies List Component
; Sources Used:
; Angular Forms Overview https://angular.io/guide/forms-overview
; Angular Validators https://angular.io/api/forms/Validators
; BezKoder Angular 10 CRUD Application Tutorial https://www.bezkoder.com/angular-10-node-js-express-mysql/
;=====================================
*/

// imports
import { Component, OnInit } from '@angular/core';
import { SupplyService } from 'src/app/services/supply.service';
import { AUTO_STYLE, animate, state, style, transition, trigger } from '@angular/animations';

// sets the animation duration time
const DEFAULT_DURATION = 300;

@Component({
  selector: 'app-supplies-list',
  templateUrl: './supplies-list.component.html',
  styleUrls: ['./supplies-list.component.css'],
  animations: [
    trigger('collapse', [
    state('false', style({ height: AUTO_STYLE, visibility: AUTO_STYLE })),
    state('true', style({ height: '0', visibility: 'hidden' })),
    transition('false => true', animate(DEFAULT_DURATION + 'ms ease-in')),
    transition('true => false', animate(DEFAULT_DURATION + 'ms ease-out'))
])
  ]
})
export class SuppliesListComponent implements OnInit {

  // sets the add supply form to hidden at the start
  addASupplyCollapsed = true;

  // Add a Sale collapsible functions
  addASupplyToggle() {
    this.addASupplyCollapsed = !this.addASupplyCollapsed;
  }
  addASupplyExpand() {
    this.addASupplyCollapsed = false;
  }
  addASupplyCollapse() {
    this.addASupplyCollapsed = true;
  }

  // defines variables needed for various functions
  supplies: any;
  currentSupply = null;
  currentIndex = -1;
  itemName = '';

  // pagination variables
  page = 1;
  count = 0;
  pageSize = 10;
  pageSizes = [10, 25, 50];

  constructor(private supplyService: SupplyService) { }

  // pull all Supplies on load
  ngOnInit(): void {
    this.retrieveSupplies();
  }

  getRequestParams(searchSupply, page, pageSize): any {
    let params = {};

    if (searchSupply) {
      params['itemDescription'] = searchSupply;
    }

    if (page) {
      params['page'] = page - 1;
    }

    if (pageSize) {
      params ['size'] = pageSize;
    }

    return params;
  }

  retrieveSupplies(): void {
    const params = this.getRequestParams(this.itemName, this.page, this.pageSize);

    this.supplyService.getAll(params)
      .subscribe(
        response => {
          const { supplies, totalItems } = response;
          this.supplies = supplies;
          this.count = totalItems;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  handlePageChange(event): void {
    this.page = event;
    this.retrieveSupplies();
  }

  handlePageSizeChange(event): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.retrieveSupplies();
  }

  refreshList(): void {
    this.retrieveSupplies();
    this.currentSupply = null;
    this.currentIndex = -1;
  }

  setActiveSupply(supply, index): void {
    this.currentSupply = supply;
    this.currentIndex = index;
  }

  removeAllSupplies(): void {
    this.supplyService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveSupplies();
        },
        error => {
          console.log(error);
        });
  }

  searchItemName(): void {
    this.supplyService.findByItemName(this.itemName)
      .subscribe(
        data => {
          this.supplies = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }


}

