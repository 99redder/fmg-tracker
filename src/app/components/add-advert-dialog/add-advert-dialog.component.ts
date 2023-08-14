/*
======================================
; Title: add-advert-dialog.component.ts
; Author: Chris Gorham
; Date Created: 13 August 2023
; Last Updated: 13 August 2023
; Description: This code supports functionality for the Add Advert Dialog Component
; Sources Used:
; Angular Dialog Tutorial https://www.techiediaries.com/angular-material-dialogs/
;=====================================
*/

// imports
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-advert-dialog',
  templateUrl: './add-advert-dialog.component.html',
  styleUrls: ['./add-advert-dialog.component.css']
})
export class AddAdvertDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddAdvertDialogComponent>) { }

  ngOnInit(): void {
  }

      // function to close the Add an Advert dialog
      close() {
        this.dialogRef.close();
      }

}
