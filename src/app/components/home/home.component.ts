/*
======================================
; Title: home.component.ts
; Author: Chris Gorham
; Date Created: 21 July 2023
; Last Updated: 27 August 2023
; Description: This code supports functionality for the Home Component
; Sources Used: N/A
;=====================================
*/

// imports
import { ApiService } from 'src/app/services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // variables for 2023
  totalSales2023: number | undefined;
  totalShipping2023: number | undefined;
  totalEtsyFees2023: number | undefined;
  totalSalesCount2023: object | undefined;
  suppliesTotal2023: number | undefined;
  advertsTotal2023: number | undefined;
  totalFeesAndCosts2023: number;
  profit2023: number;
  // variables for all-time
  totalSales: number | undefined;
  totalShipping: number | undefined;
  totalEtsyFees: number | undefined;
  totalSalesCount: object | undefined;
  suppliesTotal: number | undefined;
  advertsTotal: number | undefined;
  totalFeesAndCosts: number;
  profit: number;
  // variables for item stats
  gohanCount: object | undefined;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getMultipleQueries().subscribe(
      (data) => {
        // 2023
        this.totalSales2023 = data.totalSales2023;
        this.totalShipping2023 = data.totalShipping2023;
        this.totalEtsyFees2023 = data.totalEtsyFees2023;
        this.totalSalesCount2023 = data.totalSalesCount2023;
        this.suppliesTotal2023 = data.suppliesTotal2023;
        this.advertsTotal2023 = data.advertsTotal2023;
        // all time
        this.totalSales = data.totalSales;
        this.totalShipping = data.totalShipping;
        this.totalEtsyFees = data.totalEtsyFees;
        this.totalSalesCount = data.totalSalesCount;
        this.suppliesTotal = data.suppliesTotal;
        this.advertsTotal = data.advertsTotal;
        // item stats
        this.gohanCount = data.gohanCount;
        // calculates total fees and costs for 2023
        this.totalFeesAndCosts2023 = Number(this.suppliesTotal2023) + Number(this.totalEtsyFees2023) + Number(this.totalShipping2023) + Number(this.advertsTotal2023);
        // calculates profit for 2023
        this.profit2023 = this.totalSales2023 - Number(this.totalFeesAndCosts2023);
        // calculates total fees and costs for all-time
        this.totalFeesAndCosts = Number(this.suppliesTotal) + Number(this.totalEtsyFees) + Number(this.totalShipping) + Number(this.advertsTotal);
        // calculates profit for all-time
        this.profit = this.totalSales - Number(this.totalFeesAndCosts);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
