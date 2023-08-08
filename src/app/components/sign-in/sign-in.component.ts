/*
======================================
; Title: sign-in.component.ts
; Author: Chris Gorham
; Date Created: 27 July 2023
; Last Updated: 31 July 2023
; Description: This code supports functionality for the Sign-In Component
; Sources Used:
; Angular Forms Overview https://angular.io/guide/forms-overview
; Angular Validators https://angular.io/api/forms/Validators
; Bellevue University WEB-425 Exercise 7.2 Instructions
;=====================================
*/

// imports
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import {FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SignInService } from 'src/app/services/sign-in.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signinForm: FormGroup;
  errorMessage: string;

  constructor(private router: Router, private cookieService: CookieService, private fb: FormBuilder, private signinService: SignInService) { }

  ngOnInit(): void {
    this.signinForm = this.fb.group({
      loginCode: ''
    })
  }

  // when the log in Submit button is clicked
  onSubmit() {
    // establishes form Values valuable based on the value from the form
    const formValues = this.signinForm.value;
    // pulls loginCode from what the user types into the form
    const loginCode = formValues.loginCode;

    // if loginCode is good, establish the user as a session user and let them navigate to the home page
    if (this.signinService.validate(loginCode)) {
      this.cookieService.set('session_user', loginCode.toString(), 1);
      this.router.navigate(['/'])
    // if loginCode is not good, display an error message
    } else {
      this.errorMessage = 'The login code that you entered is invalid, please try again.';
    }
  }

}
