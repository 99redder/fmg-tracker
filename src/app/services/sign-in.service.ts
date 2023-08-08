/*
======================================
; Title: sign-in.service.ts
; Author: Chris Gorham
; Date Created: 26 July 2023
; Last Updated: 26 July 2023
; Description: This code supports the sign-in functionality
; Sources Used:
; Bellevue University WEB-425 Exercise 7.2 Instructions
;=====================================
*/

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

 loginCodes: Array<string>;

  constructor() {
    // login codes that will be accepted for sign-in
    this.loginCodes = ['Pass1234', 'Pass6278'];
  }

  validate(loginCode: string) {
    // .some returns a true or false value for the loginCode value
    return this.loginCodes.some(code => code === loginCode);
  }
}
