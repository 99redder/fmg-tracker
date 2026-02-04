/*
======================================
; Title: base-layout.component.spec.ts
; Author: Red
; Date Created: 12 July 2023
; Last Updated: 31 July 2023
; Description: This code supports functionality for the Base Layout Component
; Sources Used: N/A
;=====================================
*/

// imports
import { BaseLayoutComponent } from './base-layout.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('BaseLayoutComponent', () => {
  let component: BaseLayoutComponent;
  let fixture: ComponentFixture<BaseLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
