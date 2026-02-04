/*
======================================
; Title: sale-details.component.spec.ts
; Author: Red
; Date Created: 12 July 2023
; Last Updated: 31 July 2023
; Description: This code supports functionality for the Sale Details Component
; Sources Used:
; BezKoder Angular 10 CRUD Application Tutorial https://www.bezkoder.com/angular-10-node-js-express-mysql/
;=====================================
*/

// imports
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SaleDetailsComponent } from './sale-details.component';

describe('SaleDetailsComponent', () => {
  let component: SaleDetailsComponent;
  let fixture: ComponentFixture<SaleDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
