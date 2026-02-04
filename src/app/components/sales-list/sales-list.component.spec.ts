/*
======================================
; Title: sales-list.component.spec.ts
; Author: Red
; Date Created: 12 July 2023
; Last Updated: 31 July 2023
; Description: This code supports functionality for the Sales List Component
; Sources Used:
; BezKoder Angular 10 CRUD Application Tutorial https://www.bezkoder.com/angular-10-node-js-express-mysql/
;=====================================
*/

// imports
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SalesListComponent } from './sales-list.component';

describe('SalesListComponent', () => {
  let component: SalesListComponent;
  let fixture: ComponentFixture<SalesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
