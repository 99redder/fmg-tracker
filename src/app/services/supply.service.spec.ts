/*
======================================
; Title: supply.service.spec.ts
; Author: Chris Gorham
; Date Created: 13 July 2023
; Last Updated: 31 July 2023
; Description: This code all Sale services and functions
; Sources Used:
; BezKoder Angular 10 CRUD Application Tutorial https://www.bezkoder.com/angular-10-node-js-express-mysql/
;=====================================
*/

// imports
import { SupplyService } from './supply.service';
import { TestBed } from '@angular/core/testing';

describe('SupplyService', () => {
  let service: SupplyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupplyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
