/*
======================================
; Title: add-advert.component.ts
; Author: Chris Gorham
; Date Created: 05 August 2023
; Last Updated: 13 August 2023
; Description: This code supports functionality for the Add Advert Component
; Sources Used:
; Angular Forms Overview https://angular.io/guide/forms-overview
; Angular Validators https://angular.io/api/forms/Validators
; BezKoder Angular 10 CRUD Application Tutorial https://www.bezkoder.com/angular-10-node-js-express-mysql/
;=====================================
*/

// imports
import { AddAdvertDialogComponent } from '../add-advert-dialog/add-advert-dialog.component';
import { AdvertService } from 'src/app/services/advert.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-advert',
  templateUrl: './add-advert.component.html',
  styleUrls: ['./add-advert.component.css']
})
export class AddAdvertComponent implements OnInit {

  // defines the fields required for adding a Advert
  advert = {
    advertDescription: '',
    dateCharged: '',
    amtCharged: '',
    notes: '',
    published: false
  };
  submitted = false;

  // Forms variables
  errorMessage: string;
  addAdvertForm: FormGroup;

  constructor(private matDialog: MatDialog, private fb: FormBuilder, private advertService: AdvertService) { }

  ngOnInit(): void {
    // Add Advert form validators and pattern checks
    this.addAdvertForm = this.fb.group({
      advertDescription: ['', Validators.compose([Validators.required])],
      dateCharged: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9-]*$')])],
      amtCharged: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9.]*$')])],
      notes: ['', Validators.compose([Validators.pattern('^[A-Za-z0-9.,:]*$')])]
    })
  }

  get form() { return this.addAdvertForm.controls; }

 // pulls the data from the fields to save the Advert
 saveAdvert(): void {
  const data = {
    advertDescription: this.advert.advertDescription,
    dateCharged: this.advert.dateCharged,
    amtCharged: this.advert.amtCharged,
    notes: this.advert.notes,
  };

  this.advertService.create(data)
    .subscribe(
      response => {
        console.log(response);
        // submitted = true then false to let the add sale form show then this.newSale() to clear the form data and this.ngOnInit() to clear the validators (they would all be showing an error immediately if you don't do this)
        this.submitted = true;
        this.openAddAdvertDialog();
        this.submitted = false;
        this.newAdvert();
        this.ngOnInit();
      },
      error => {
        console.log(error);
      });
}

newAdvert(): void {
  this.submitted = false;
  this.advert = {
    advertDescription: '',
    dateCharged: '',
    amtCharged: '',
    notes: '',
    published: false
  };
}

  // function that opens the Add an Advert dialog
  openAddAdvertDialog() {
    const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      this.matDialog.open(AddAdvertDialogComponent, dialogConfig);
    }

}
