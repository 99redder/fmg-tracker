/*
======================================
; Title: sign-in.guard.spec.ts
; Author: Red
; Date Created: 13 July 2023
; Last Updated: 31 July 2023
; Description: This code supports the sign-in guard
; Sources Used: N/A
;=====================================
*/

// imports
import { SignInGuard } from './sign-in.guard';
import { TestBed } from '@angular/core/testing';


describe('SignInGuard', () => {
  let guard: SignInGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SignInGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
