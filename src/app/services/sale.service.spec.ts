/*
======================================
; Title: sale.service.spec.ts
; Author: Chris Gorham
; Date Created: 27 July 2023
; Last Updated: 31 July 2023
; Description: This code supports functionality for the Sale Service
; Sources Used:
; BezKoder Angular 10 CRUD Application Tutorial https://www.bezkoder.com/angular-10-node-js-express-mysql/
;=====================================
*/

// imports
import { SaleService } from './sale.service';
import { TestBed } from '@angular/core/testing';


describe('SaleService', () => {
  let service: SaleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
