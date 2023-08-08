/*
======================================
; Title: supply-details.component.spec.ts
; Author: Chris Gorham
; Date Created: 12 July 2023
; Last Updated: 31 July 2023
; Description: This code supports functionality for the Supply Details Component
; Sources Used:
; Angular Forms Overview https://angular.io/guide/forms-overview
; Angular Validators https://angular.io/api/forms/Validators
; BezKoder Angular 10 CRUD Application Tutorial https://www.bezkoder.com/angular-10-node-js-express-mysql/
;=====================================
*/

// imports
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SupplyDetailsComponent } from './supply-details.component';

describe('SupplyDetailsComponent', () => {
  let component: SupplyDetailsComponent;
  let fixture: ComponentFixture<SupplyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplyDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
