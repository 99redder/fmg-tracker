/*
======================================
; Title: base-layout.component.ts
; Author: Chris Gorham
; Date Created: 26 July 2023
; Last Updated: 31 July 2023
; Description: This code supports functionality for login
; Sources Used:
; Bellevue University WEB-425 Exercise 7.2 Instructions
;=====================================
*/

// imports
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {
  title: string;

  constructor(private cookieService: CookieService, private router: Router) {
    this.title = "Welcome to the Florence Mae Gifts Tracker"
  }

  ngOnInit(): void {
  }

  // function that occurs when the user clicks the Sign Out link in the navbar
  signOut() {
    this.cookieService.deleteAll();
    // after deleting cookies this navigates the user back to the sign in page
    this.router.navigate(['session/sign-in'])
  }


}
