/*
======================================
; Title: description-create.component.spec.ts
; Author: Chris Gorham
; Date Created: 03 August 2023
; Last Updated: 03 August 2023
; Description: This code supports functionality for the Description Create Component
; Sources Used: N/A
;=====================================
*/

// imports
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DescriptionCreateComponent } from './description-create.component';

describe('DescriptionCreateComponent', () => {
  let component: DescriptionCreateComponent;
  let fixture: ComponentFixture<DescriptionCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptionCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
