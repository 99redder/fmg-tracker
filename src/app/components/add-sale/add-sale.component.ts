/*
======================================
; Title: add-sale.component.ts
; Author: Red
; Date Created: 12 July 2023
; Last Updated: 14 August 2023
; Description: This code supports functionality for the Add Sale Component
; Sources Used:
; Angular Forms Overview https://angular.io/guide/forms-overview
; Angular Validators https://angular.io/api/forms/Validators
; BezKoder Angular 10 CRUD Application Tutorial https://www.bezkoder.com/angular-10-node-js-express-mysql/
;=====================================
*/

// imports
import { AUTO_STYLE, animate, state, style, transition, trigger } from '@angular/animations';
import { AddSaleDialogComponent } from '../add-sale-dialog/add-sale-dialog.component';
import { Component, OnInit } from '@angular/core';
import { Description } from 'src/app/description.class';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IDescription } from 'src/app/description.interface';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SaleService } from 'src/app/services/sale.service';


// sets the animation duration time
const DEFAULT_DURATION = 300;


@Component({
  selector: 'app-add-sale',
  templateUrl: './add-sale.component.html',
  styleUrls: ['./add-sale.component.css'],
  animations: [
    trigger('collapse', [
    state('false', style({ height: AUTO_STYLE, visibility: AUTO_STYLE })),
    state('true', style({ height: '0', visibility: 'hidden' })),
    transition('false => true', animate(DEFAULT_DURATION + 'ms ease-in')),
    transition('true => false', animate(DEFAULT_DURATION + 'ms ease-out'))
  ])
]
})
export class AddSaleComponent implements OnInit {

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

  // Forms variables
  errorMessage: string;
  addSaleForm: FormGroup;



  // defines the field requirements for adding a Sale
  sale = {
    itemDescription: '',
    salesDate: '',
    salesPrice: '',
    etsyTransactionFee: '',
    etsyMarketingFee: '',
    etsyProcessingFee: '',
    etsyListingFee: '',
    etsyShippingFee: '',
    shippingCost: '',
    customBoxCost: '',
    oldMaterialOffset: '',
    notes: '',
    published: false
  };
  submitted = false;

  constructor(private matDialog: MatDialog, private router: Router, private fb: FormBuilder, private saleService: SaleService) {

    // sets up descriptions to run the get descriptions function which populates the variable and allows us to call the variable and have the descriptions show up
    this.descriptions = new Description().getDescriptions();
   }

  ngOnInit(): void {
    // add sale form validators and pattern checks
    this.addSaleForm = this.fb.group({
      itemDescription: ['', Validators.compose([Validators.required])],
      salesDate: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9-]*$')])],
      salesPrice: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9.]*$')])],
      etsyTransactionFee: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9.]*$')])],
      etsyMarketingFee: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9.]*$')])],
      etsyProcessingFee: ['', Validators.compose([Validators.required,Validators.pattern('^[0-9.]*$')])],
      etsyListingFee: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9.]*$')])],
      etsyShippingFee: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9.]*$')])],
      shippingCost: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9.]*$')])],
      oldMaterialOffset: ['', Validators.compose([Validators.required,Validators.pattern('^[0-9.]*$')])],
      customBoxCost: ['', Validators.compose([Validators.required,Validators.pattern('^[0-9.]*$')])],
      notes: ['', Validators.compose([Validators.pattern('[A-Za-z0-9.,-:;()$ ]*$')])]
    })
  }

  get form() { return this.addSaleForm.controls };


  // pulls the data from the fields to save the Sale
  saveSale(): void {
    // puts all the fields into one variable to be pushed
    const data = {
      itemDescription: this.sale.itemDescription,
      salesDate: this.sale.salesDate,
      salesPrice: this.sale.salesPrice,
      etsyTransactionFee: this.sale.etsyTransactionFee,
      etsyMarketingFee: this.sale.etsyMarketingFee,
      etsyProcessingFee: this.sale.etsyProcessingFee,
      etsyListingFee: this.sale.etsyListingFee,
      etsyShippingFee: this.sale.etsyShippingFee,
      shippingCost: this.sale.shippingCost,
      customBoxCost: this.sale.customBoxCost,
      oldMaterialOffset: this.sale.oldMaterialOffset,
      notes: this.sale.notes,
    };
    // pushes the data variable with all the Sale data
    this.saleService.create(data)
      .subscribe(
        response => {
          console.log(response);
          // submitted = true then false to let the add sale form show then this.newSale() to clear the form data and this.ngOnInit() to clear the validators (they would all be showing an error immediately if you don't do this)
          this.submitted = true;
          this.openAddSaleDialog();
          this.submitted = false;
          this.newSale();
          this.ngOnInit();
        },
        error => {
          console.log(error);
        });
  }

  // resets the form data to blank to add another sale
  newSale(): void {
    this.submitted = false;
    this.sale = {
      itemDescription: '',
      salesDate: '',
      salesPrice: '',
      etsyTransactionFee: '',
      etsyMarketingFee: '',
      etsyProcessingFee: '',
      etsyListingFee: '',
      etsyShippingFee: '',
      shippingCost: '',
      customBoxCost: '',
      oldMaterialOffset: '',
      notes: '',
      published: false
    };
  }

  // item handler function that pushes the new Item Description to the descriptions array
  updateItemsHandler(description: IDescription) {
    this.descriptions.push(description);
    alert(description.description + " was added successfully! You can now select it from the Item Description drop down menu!")
  }

  // function that opens the Add A Sale dialog
  openAddSaleDialog() {
    const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      this.matDialog.open(AddSaleDialogComponent, dialogConfig);
    }


}

