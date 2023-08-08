/*
======================================
; Title: add-advert.component.spec.ts
; Author: Chris Gorham
; Date Created: 05 August 2023
; Last Updated: 05 August 2023
; Description: This code supports functionality for the Add Advert Component
; Sources Used:
; Angular Forms Overview https://angular.io/guide/forms-overview
; Angular Validators https://angular.io/api/forms/Validators
; BezKoder Angular 10 CRUD Application Tutorial https://www.bezkoder.com/angular-10-node-js-express-mysql/
;=====================================
*/

// imports
import { AddAdvertComponent } from './add-advert.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';


describe('AddAdvertComponent', () => {
  let component: AddAdvertComponent;
  let fixture: ComponentFixture<AddAdvertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAdvertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAdvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
