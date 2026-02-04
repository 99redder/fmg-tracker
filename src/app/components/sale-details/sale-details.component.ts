/*
======================================
; Title: sale-details.component.ts
; Author: Red
; Date Created: 12 July 2023
; Last Updated: 04 August 2023
; Description: This code supports functionality for the Sale Details Component
; Sources Used:
; BezKoder Angular 10 CRUD Application Tutorial https://www.bezkoder.com/angular-10-node-js-express-mysql/
;=====================================
*/

// imports
import { ActivatedRoute, Router } from '@angular/router';
import { AUTO_STYLE, animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Description } from 'src/app/description.class';
import { IDescription } from 'src/app/description.interface';
import { SaleService } from 'src/app/services/sale.service';

// sets the animation duration time
const DEFAULT_DURATION = 300;


@Component({
  selector: 'app-sale-details',
  templateUrl: './sale-details.component.html',
  styleUrls: ['./sale-details.component.css'],
  animations: [
    trigger('collapse', [
    state('false', style({ height: AUTO_STYLE, visibility: AUTO_STYLE })),
    state('true', style({ height: '0', visibility: 'hidden' })),
    transition('false => true', animate(DEFAULT_DURATION + 'ms ease-in')),
    transition('true => false', animate(DEFAULT_DURATION + 'ms ease-out'))
  ])
]
})
export class SaleDetailsComponent implements OnInit {

    // sets the add sale form to hidden at the start
    addDescriptionCollapsed = true;

    // Add a Description collapsible functions
    addDescriptionToggle() {
      this.addDescriptionCollapsed = !this.addDescriptionCollapsed;
    }
    addDescriptionExpand() {
      this.addDescriptionCollapsed = false;

    }
    addDescriptionCollapse() {
      this.addDescriptionCollapsed = true;
    }

  // defines the descriptions variables as the IDescription Class/Interface
  descriptions: Array<IDescription>;

  // setup variables
  currentSale = null;
  message = '';

  constructor(private saleService: SaleService, private route: ActivatedRoute, private router: Router) {

    // sets up descriptions to run the get descriptions function which populates the variable and allows us to call the variable and have the descriptions show up
    this.descriptions = new Description().getDescriptions();
  }

  ngOnInit(): void {
    this.message = '';
    this.getSale(this.route.snapshot.paramMap.get('id'));
  }

  // gets one Sale based on ID
  getSale(id): void {
    this.saleService.get(id)
      .subscribe(
        data => {
          this.currentSale = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  // updates a Sale's published (shipped/pending) status
  updatePublished(status): void {
    const data = {
      published: status
    };

    this.saleService.update(this.currentSale.id, data)
      .subscribe(
        response => {
          this.currentSale.published = status;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  updateSale(): void {
    this.saleService.update(this.currentSale.id, this.currentSale)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The sale was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteSale(): void {

    // dialog box that asks for confirmation before proceeding to the actual deletion
    if (!confirm('Are you sure you want to delete this Sale?')) {
      return
    }
    this.saleService.delete(this.currentSale.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/sales']);
        },
        error => {
          console.log(error);
        });
  }

    // item handler function that pushes the new Item Description to the descriptions array
    updateItemsHandler(description: IDescription) {
      this.descriptions.push(description);
      alert(description.description + " was added successfully! You can now select it from the Item Description drop down menu!")
    }
}
