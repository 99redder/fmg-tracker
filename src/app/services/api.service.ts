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
    // 2023
    totalSales2023: number;
    totalShipping2023: number;
    totalEtsyFees2023: number;
    totalSalesCount2023: object;
    suppliesTotal2023: number;
    advertsTotal2023: number;
    // all-time
    totalSales: number;
    totalShipping: number;
    totalEtsyFees: number;
    totalSalesCount: object;
    suppliesTotal: number;
    advertsTotal: number;
    // item stats
    gohanCount: object;
     }> {
    return this.http.get<{
      // 2023
      totalSales2023: number;
      totalShipping2023: number;
      totalEtsyFees2023: number;
      totalSalesCount2023: object;
      suppliesTotal2023: number;
      advertsTotal2023: number;
      // all-time
      totalSales: number;
      totalShipping: number;
      totalEtsyFees: number;
      totalSalesCount: object;
      suppliesTotal: number;
      advertsTotal: number;
      // item stats
      gohanCount: object;
    }>(`${this.baseUrl}/multipleQueries`);
  }
}
