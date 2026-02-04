/*
======================================
; Title: add-sale-dialog.component.ts
; Author: Red
; Date Created: 04 August 2023
; Last Updated: 04 August 2023
; Description: This code supports functionality for the Add Sale Dialog Component
; Sources Used:
; Angular Dialog Tutorial https://www.techiediaries.com/angular-material-dialogs/
;=====================================
*/

import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-sale-dialog',
  templateUrl: './add-sale-dialog.component.html',
  styleUrls: ['./add-sale-dialog.component.css']
})
export class AddSaleDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddSaleDialogComponent>) { }

  ngOnInit(): void {
  }

    // function to close the Add A Sale dialog
    close() {
      this.dialogRef.close();
    }

}
