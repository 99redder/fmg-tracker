/*
======================================
; Title: add-supply-dialog.component.ts
; Author: Chris Gorham
; Date Created: 13 August 2023
; Last Updated: 13 August 2023
; Description: This code supports functionality for the Add Supply Dialog Component
; Sources Used:
; Angular Dialog Tutorial https://www.techiediaries.com/angular-material-dialogs/
;=====================================
*/

// imports
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-supply-dialog',
  templateUrl: './add-supply-dialog.component.html',
  styleUrls: ['./add-supply-dialog.component.css']
})
export class AddSupplyDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddSupplyDialogComponent>) { }

  ngOnInit(): void {
  }
      // function to close the Add A Supply dialog
      close() {
        this.dialogRef.close();
      }

}
