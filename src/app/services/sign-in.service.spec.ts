/*
======================================
; Title: sale.service.spec.ts
; Author: Chris Gorham
; Date Created: 13 July 2023
; Last Updated: 31 July 2023
; Description: This code all Sale services and functions
; Sources Used:
; Bellevue University WEB-425 Exercise 7.2 Instructions
;=====================================
*/

// imports
import { SignInService } from './sign-in.service';
import { TestBed } from '@angular/core/testing';


describe('SignInService', () => {
  let service: SignInService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignInService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
