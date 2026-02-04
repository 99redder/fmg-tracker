/*
======================================
; Title: description-create.component.ts
; Author: Red
; Date Created: 03 August 2023
; Last Updated: 03 August 2023
; Description: This code supports functionality for the Description Create Component
; Sources Used: N/A
;=====================================
*/

// imports
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IDescription } from 'src/app/description.interface';

@Component({
  selector: 'app-description-create',
  templateUrl: './description-create.component.html',
  styleUrls: ['./description-create.component.css']
})
export class DescriptionCreateComponent implements OnInit {

// sets up the output and event emitter for the new Item Description
@Output() addItemEmitter = new EventEmitter<IDescription>();

// defines the variable for the new Item Description
newDescription: IDescription;

  constructor() {
    this.newDescription = {} as IDescription;
  }

  ngOnInit(): void {
  }

  // function that emits the new Item Description value to the Event Emitter
  addItem() {
    this.addItemEmitter.emit({ description: this.newDescription.description})
    this.newDescription = {} as IDescription;
  }

}
