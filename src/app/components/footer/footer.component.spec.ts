/*
======================================
; Title: footer.component.spec.ts
; Author: Chris Gorham
; Date Created: 10 September 2023
; Last Updated: 10 September 2023
; Description: This code supports functionality for the Footer Component
; Sources Used: N/A
;=====================================
*/

// imports
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
