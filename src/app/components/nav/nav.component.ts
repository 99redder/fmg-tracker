/*
======================================
; Title: nav.component.ts
; Author: Red
; Date Created: 10 September 2023
; Last Updated: 10 September 2023
; Description: This code supports functionality for the Nav Component
; Sources Used: N/A
;=====================================
*/

//imports
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private cookieService: CookieService, private router: Router) { }

  ngOnInit(): void {
  }

// function that occurs when the user clicks the Sign Out link in the navbar
signOut() {
  this.cookieService.deleteAll();
  // after deleting cookies this navigates the user back to the sign in page
  this.router.navigate(['session/sign-in'])
}
}
