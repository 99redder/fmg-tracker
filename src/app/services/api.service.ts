/*
======================================
; Title: api.service.ts
; Author: Chris Gorham
; Date Created: 26 August 2023
; Last Updated: 26 August 2023
; Description: This code is for all Query / API services and functions
; Sources Used: N/A
;=====================================
*/

// imports
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // base path to the queries API
  private baseUrl = 'http://localhost:8080/queries';

  constructor(private http: HttpClient) { }

  getMultipleQueries(): Observable<{
    totalSales2023: number;
    totalShipping2023: number;
    totalEtsyFees2023: number;
    totalSalesCount2023: object;
    suppliesTotal2023: number;
    advertsTotal2023: number;
     }> {
    return this.http.get<{
      totalSales2023: number;
      totalShipping2023: number;
      totalEtsyFees2023: number;
      totalSalesCount2023: object;
      suppliesTotal2023: number;
      advertsTotal2023: number;
    }>(`${this.baseUrl}/multipleQueries`);
  }
}
