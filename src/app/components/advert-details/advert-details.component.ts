/*
======================================
; Title: advert-details.component.ts
; Author: Red
; Date Created: 05 August 2023
; Last Updated: 05 August 2023
; Description: This code supports functionality for the Advert Details Component
; Sources Used:
; Angular Forms Overview https://angular.io/guide/forms-overview
; Angular Validators https://angular.io/api/forms/Validators
; BezKoder Angular 10 CRUD Application Tutorial https://www.bezkoder.com/angular-10-node-js-express-mysql/
;=====================================
*/

// imports
import { ActivatedRoute, Router } from '@angular/router';
import { AdvertService } from 'src/app/services/advert.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-advert-details',
  templateUrl: './advert-details.component.html',
  styleUrls: ['./advert-details.component.css']
})
export class AdvertDetailsComponent implements OnInit {

  // define variables
  currentAdvert = null;
  message = '';

  constructor(private advertService: AdvertService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // sets the message to blank
    this.message = '';
    // pulls the clicked Advert
    this.getAdvert(this.route.snapshot.paramMap.get('id'));
  }

  // pulls a Advert based on ID
  getAdvert(id): void {
    this.advertService.get(id)
      .subscribe(
        data => {
          this.currentAdvert = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  // updates Published status
  updatePublished(status): void {
    const data = {
      title: this.currentAdvert.title,
      description: this.currentAdvert.description,
      published: status
    };

    this.advertService.update(this.currentAdvert.id, data)
      .subscribe(
        response => {
          this.currentAdvert.published = status;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  // updates information for a Advert
  updateAdvert(): void {
    this.advertService.update(this.currentAdvert.id, this.currentAdvert)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The Advert was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  // deletes a advert
  deleteAdvert(): void {

    // dialog box that asks for confirmation before proceeding to the actual deletion
    if (!confirm('Are you sure you want to delete this Advert?')) {
      return
    }

    this.advertService.delete(this.currentAdvert.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/advertising']);
        },
        error => {
          console.log(error);
        });
  }

}
