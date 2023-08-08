/*
======================================
; Title: supplies-list.component.spec.ts
; Author: Chris Gorham
; Date Created: 12 July 2023
; Last Updated: 02 August 2023
; Description: This code supports functionality for the Supplies List Component
; Sources Used:
; Angular Forms Overview https://angular.io/guide/forms-overview
; Angular Validators https://angular.io/api/forms/Validators
; BezKoder Angular 10 CRUD Application Tutorial https://www.bezkoder.com/angular-10-node-js-express-mysql/
;=====================================
*/

// imports
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuppliesListComponent } from './supplies-list.component';

describe('SuppliesListComponent', () => {
  let component: SuppliesListComponent;
  let fixture: ComponentFixture<SuppliesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuppliesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppliesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
