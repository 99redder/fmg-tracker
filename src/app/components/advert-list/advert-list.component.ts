
/*
======================================
; Title: advert-list.component.ts
; Author: Chris Gorham
; Date Created: 05 August 2023
; Last Updated: 13 August 2023
; Description: This code supports functionality for the Advert List Component
; Sources Used:
; Angular Forms Overview https://angular.io/guide/forms-overview
; Angular Validators https://angular.io/api/forms/Validators
; BezKoder Angular 10 CRUD Application Tutorial https://www.bezkoder.com/angular-10-node-js-express-mysql/
;=====================================
*/

// imports
import { AdvertService } from 'src/app/services/advert.service';
import { AUTO_STYLE, animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

// sets the animation duration time
const DEFAULT_DURATION = 300;


@Component({
  selector: 'app-advert-list',
  templateUrl: './advert-list.component.html',
  styleUrls: ['./advert-list.component.css'],
  animations: [
    trigger('collapse', [
    state('false', style({ height: AUTO_STYLE, visibility: AUTO_STYLE })),
    state('true', style({ height: '0', visibility: 'hidden' })),
    transition('false => true', animate(DEFAULT_DURATION + 'ms ease-in')),
    transition('true => false', animate(DEFAULT_DURATION + 'ms ease-out'))
])
  ]
})
export class AdvertListComponent implements OnInit {

    // sets the add supply form to hidden at the start
    addAdvertCollapsed = true;

    // Add an Advert collapsible functions; refreshList() added to update the list when the toggle is clicked
    addAdvertToggle() {
      this.addAdvertCollapsed = !this.addAdvertCollapsed;
      this.refreshList();
    }
    addAdvertExpand() {
      this.addAdvertCollapsed = false;
      this.refreshList();
    }
    addAdvertCollapse() {
      this.addAdvertCollapsed = true;
      this.refreshList();
    }

    // defines variables needed for various functions
    advertising: any;
    currentAdvert = null;
    currentIndex = -1;
    advertDescription = '';

    // pagination variables
    page = 1;
    count = 0;
    pageSize = 10;
    pageSizes = [10, 25, 50];

  constructor(private advertService: AdvertService) { }

  ngOnInit(): void {
    this.retrieveAdvertising();
  }

  getRequestParams(searchAdvert, page, pageSize): any {
    let params = {};

    if (searchAdvert) {
      params['advertDescription'] = searchAdvert;
    }

    if (page) {
      params['page'] = page - 1;
    }

    if (pageSize) {
      params ['size'] = pageSize;
    }

    return params;
  }

  retrieveAdvertising(): void {
    const params = this.getRequestParams(this.advertDescription, this.page, this.pageSize);

    this.advertService.getAll(params)
      .subscribe(
        response => {
          const { advertising, totalItems } = response;
          this.advertising = advertising;
          this.count = totalItems;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  handlePageChange(event): void {
    this.page = event;
    this.retrieveAdvertising();
  }

  handlePageSizeChange(event): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.retrieveAdvertising();
  }

  refreshList(): void {
    this.retrieveAdvertising();
    this.currentAdvert = null;
    this.currentIndex = -1;
  }

  setActiveAdvert(advert, index): void {
    this.currentAdvert = advert;
    this.currentIndex = index;
  }

  removeAllAdvertising(): void {
    this.advertService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveAdvertising();
        },
        error => {
          console.log(error);
        });
  }

  searchAdvertDescription(): void {
    this.advertService.findByItemName(this.advertDescription)
      .subscribe(
        data => {
          this.advertising = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }


}
