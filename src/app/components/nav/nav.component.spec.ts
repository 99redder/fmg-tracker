/*
======================================
; Title: nav.component.spec.ts
; Author: Chris Gorham
; Date Created: 10 September 2023
; Last Updated: 10 September 2023
; Description: This code supports functionality for the Nav Component
; Sources Used: N/A
;=====================================
*/

// imports
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavComponent } from './nav.component';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
