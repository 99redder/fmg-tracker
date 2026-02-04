/*
======================================
; Title: auth-layout.component.spec.ts
; Author: Red
; Date Created: 12 July 2023
; Last Updated: 30 July 2023
; Description: This code supports functionality for the Auth Layout Component
; Sources Used: N/A
;=====================================
*/

// imports
import { AuthLayoutComponent } from './auth-layout.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';


describe('AuthLayoutComponent', () => {
  let component: AuthLayoutComponent;
  let fixture: ComponentFixture<AuthLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
