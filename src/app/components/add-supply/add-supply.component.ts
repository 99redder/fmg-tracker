/*
======================================
; Title: add-supply.component.ts
; Author: Red
; Date Created: 27 July 2023
; Last Updated: 14 August July 2023
; Description: This code supports functionality for the Add Supply Component
; Sources Used:
; Angular Forms Overview https://angular.io/guide/forms-overview
; Angular Validators https://angular.io/api/forms/Validators
; BezKoder Angular 10 CRUD Application Tutorial https://www.bezkoder.com/angular-10-node-js-express-mysql/
;=====================================
*/

// imports
import { AddSupplyDialogComponent } from '../add-supply-dialog/add-supply-dialog.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { SupplyService } from 'src/app/services/supply.service';


@Component({
  selector: 'app-add-supply',
  templateUrl: './add-supply.component.html',
  styleUrls: ['./add-supply.component.css']
})
export class AddSupplyComponent implements OnInit {

  // defines the fields required for adding a Supply
  supply = {
    itemName: '',
    purchaseDate: '',
    itemCost: '',
    itemTax: '',
    itemTotalCost: '',
    notes: '',
    published: false
  };
  submitted = false;

  // Forms variables
  errorMessage: string;
  addSupplyForm: FormGroup;

  constructor(private matDialog: MatDialog, private fb: FormBuilder, private supplyService: SupplyService) { }

  ngOnInit(): void {
    // Add Supply form validators and pattern checks
    this.addSupplyForm = this.fb.group({
      itemName: ['', Validators.compose([Validators.required])],
      purchaseDate: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9-]*$')])],
      itemCost: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9.]*$')])],
      itemTax: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9.]*$')])],
      itemTotalCost: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9.]*$')])],
      notes: ['', Validators.compose([Validators.pattern('^[A-Za-z0-9.,-:;()$ ]*$')])]
    })
  }

  get form() { return this.addSupplyForm.controls; }

  // pulls the data from the fields to save the Supply
  saveSupply(): void {
    const data = {
      itemName: this.supply.itemName,
      purchaseDate: this.supply.purchaseDate,
      itemCost: this.supply.itemCost,
      itemTax: this.supply.itemTax,
      itemTotalCost: this.supply.itemTotalCost,
      notes: this.supply.notes,
    };

    this.supplyService.create(data)
      .subscribe(
        response => {
          console.log(response);
          // submitted = true then false to let the add sale form show then this.newSale() to clear the form data and this.ngOnInit() to clear the validators (they would all be showing an error immediately if you don't do this)
          this.submitted = true;
          this.openAddSupplyDialog();
          this.submitted = false;
          this.newSupply();
          this.ngOnInit();
        },
        error => {
          console.log(error);
        });
  }

  newSupply(): void {
    this.submitted = false;
    this.supply = {
      itemName: '',
      purchaseDate: '',
      itemCost: '',
      itemTax: '',
      itemTotalCost: '',
      notes: '',
      published: false
    };
  }

    // function that opens the Add A Sale dialog
    openAddSupplyDialog() {
      const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        this.matDialog.open(AddSupplyDialogComponent, dialogConfig);
      }
}
