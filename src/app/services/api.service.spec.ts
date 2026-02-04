/*
======================================
; Title: api.service.spec.ts
; Author: Red
; Date Created: 26 August 2023
; Last Updated: 26 August 2023
; Description: This code supports the Query / API services and functions
; Sources Used: N/A
;=====================================
*/

// imports
import { ApiService } from './api.service';
import { TestBed } from '@angular/core/testing';


describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
