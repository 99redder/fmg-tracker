/*
======================================
; Title: sign-in.service.ts
; Author: Red
; Date Created: 26 July 2023
; Last Updated: 18 January 2026
; Description: This code supports the sign-in functionality
; Sources Used:
; Bellevue University WEB-425 Exercise 7.2 Instructions
;=====================================
*/

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  constructor(private http: HttpClient) { }

  validate(loginCode: string): Observable<{ success: boolean }> {
    return this.http.post<{ success: boolean }>(
      `${environment.apiUrl}/api/auth/login`,
      { loginCode }
    );
  }
}
