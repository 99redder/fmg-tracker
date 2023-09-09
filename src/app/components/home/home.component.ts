/*
======================================
; Title: home.component.ts
; Author: Chris Gorham
; Date Created: 21 July 2023
; Last Updated: 08 September 2023
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
  gohan03Count: object | undefined;
  gohan36Count: object | undefined;
  gohan69Count: object | undefined;
  gohan912Count: object | undefined;
  gohan1218Count: object | undefined;
  gohan1824Count: object | undefined;
  patternCount: object | undefined;
  gokuHatCount: object | undefined;
  majinCount: object | undefined;
  majin03Count: object | undefined;
  majin36Count: object | undefined;
  majin69Count: object | undefined;
  trunksCount: object | undefined;
  trunks03Count: object | undefined;
  trunks36Count: object | undefined;
  trunks69Count: object | undefined;

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
        this.gohan03Count = data.gohan03Count;
        this.gohan36Count = data.gohan36Count;
        this.gohan69Count = data.gohan69Count;
        this.gohan912Count = data.gohan912Count;
        this.gohan1218Count = data.gohan1218Count;
        this.gohan1824Count = data.gohan1824Count;
        this.patternCount = data.patternCount;
        this.gokuHatCount = data.gokuHatCount;
        this.majinCount = data.majinCount;
        this.majin03Count = data.majin03Count;
        this.majin36Count = data.majin36Count;
        this.majin69Count = data.majin69Count;
        this.trunksCount = data.trunksCount;
        this.trunks03Count = data.trunks03Count;
        this.trunks36Count = data.trunks36Count;
        this.trunks69Count = data.trunks69Count;
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
