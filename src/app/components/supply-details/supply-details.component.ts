/*
======================================
; Title: supply-details.component.ts
; Author: Chris Gorham
; Date Created: 27 July 2023
; Last Updated: 31 July 2023
; Description: This code supports functionality for the Supply Details Component
; Sources Used:
; Angular Forms Overview https://angular.io/guide/forms-overview
; Angular Validators https://angular.io/api/forms/Validators
; BezKoder Angular 10 CRUD Application Tutorial https://www.bezkoder.com/angular-10-node-js-express-mysql/
;=====================================
*/

// imports
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SupplyService } from 'src/app/services/supply.service';

@Component({
  selector: 'app-supply-details',
  templateUrl: './supply-details.component.html',
  styleUrls: ['./supply-details.component.css']
})
export class SupplyDetailsComponent implements OnInit {

  // define variables
  currentSupply = null;
  message = '';

  constructor(private supplyService: SupplyService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // sets the message to blank
    this.message = '';
    // pulls the clicked Supply
    this.getSupply(this.route.snapshot.paramMap.get('id'));
  }

  // pulls a Supply based on ID
  getSupply(id): void {
    this.supplyService.get(id)
      .subscribe(
        data => {
          this.currentSupply = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  // updates Published status
  updatePublished(status): void {
    const data = {
      title: this.currentSupply.title,
      description: this.currentSupply.description,
      published: status
    };

    this.supplyService.update(this.currentSupply.id, data)
      .subscribe(
        response => {
          this.currentSupply.published = status;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  // updates information for a Supply
  updateSupply(): void {
    this.supplyService.update(this.currentSupply.id, this.currentSupply)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The Supply was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  // function that deletes a supply
  deleteSupply(): void {

    // dialog box that asks for confirmation before proceeding to the actual deletion
    if (!confirm('Are you sure you want to delete this Supply?')) {
      return
    }

    this.supplyService.delete(this.currentSupply.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/supplies']);
        },
        error => {
          console.log(error);
        });
  }
}
