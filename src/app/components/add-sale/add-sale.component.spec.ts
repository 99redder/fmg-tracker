/*
======================================
; Title: add-sale.component.spec.ts
; Author: Chris Gorham
; Date Created: 12 July 2023
; Last Updated: 30 July 2023
; Description: This code supports functionality for the Add Sale Component
; Sources Used:
; Angular Forms Overview https://angular.io/guide/forms-overview
; Angular Validators https://angular.io/api/forms/Validators
; BezKoder Angular 10 CRUD Application Tutorial https://www.bezkoder.com/angular-10-node-js-express-mysql/
;=====================================
*/

// imports
import { AddSaleComponent } from './add-sale.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';


describe('AddSaleComponent', () => {
  let component: AddSaleComponent;
  let fixture: ComponentFixture<AddSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
