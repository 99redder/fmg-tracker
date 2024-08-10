/*
======================================
; Title: home.component.ts
; Author: Chris Gorham
; Date Created: 21 July 2023
; Last Updated: 10 August 2024
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
  // variables for 2024
  totalSales2024: number | undefined;
  totalShipping2024: number | undefined;
  totalEtsyFees2024: number | undefined;
  totalSalesCount2024: object | undefined;
  suppliesTotal2024: number | undefined;
  advertsTotal2024: number | undefined;
  totalFeesAndCosts2024: number;
  profit2024: number;
  jan2024: object | undefined;
  feb2024: object | undefined;
  mar2024: object | undefined;
  apr2024: object | undefined;
  may2024: object | undefined;
  jun2024: object | undefined;
  jul2024: object | undefined;
  aug2024: object | undefined;
  sep2024: object | undefined;
  oct2024: object | undefined;
  nov2024: object | undefined;
  dec2024: object | undefined;
  jan2024sales: number | undefined;
  feb2024sales: number | undefined;
  mar2024sales: number | undefined;
  apr2024sales: number | undefined;
  may2024sales: number | undefined;
  jun2024sales: number | undefined;
  jul2024sales: number | undefined;
  aug2024sales: number | undefined;
  sep2024sales: number | undefined;
  oct2024sales: number | undefined;
  nov2024sales: number | undefined;
  dec2024sales: number | undefined;
  // variables for 2023
  totalSales2023: number | undefined;
  totalShipping2023: number | undefined;
  totalEtsyFees2023: number | undefined;
  totalSalesCount2023: object | undefined;
  suppliesTotal2023: number | undefined;
  advertsTotal2023: number | undefined;
  totalFeesAndCosts2023: number;
  profit2023: number;
  jan2023: object | undefined;
  feb2023: object | undefined;
  mar2023: object | undefined;
  apr2023: object | undefined;
  may2023: object | undefined;
  jun2023: object | undefined;
  jul2023: object | undefined;
  aug2023: object | undefined;
  sep2023: object | undefined;
  oct2023: object | undefined;
  nov2023: object | undefined;
  dec2023: object | undefined;
  jan2023sales: number | undefined;
  feb2023sales: number | undefined;
  mar2023sales: number | undefined;
  apr2023sales: number | undefined;
  may2023sales: number | undefined;
  jun2023sales: number | undefined;
  jul2023sales: number | undefined;
  aug2023sales: number | undefined;
  sep2023sales: number | undefined;
  oct2023sales: number | undefined;
  nov2023sales: number | undefined;
  dec2023sales: number | undefined;
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
  gokuHat03Count: object | undefined;
  gokuHat36Count: object | undefined;
  gokuHat69Count: object | undefined;
  gokuHat912Count: object | undefined;
  gokuHat1218Count: object | undefined;
  gokuHat1824Count: object | undefined;
  majinCount: object | undefined;
  majin03Count: object | undefined;
  majin36Count: object | undefined;
  majin69Count: object | undefined;
  trunksCount: object | undefined;
  trunks03Count: object | undefined;
  trunks36Count: object | undefined;
  trunks69Count: object | undefined;
  luffyCount: object | undefined;
  luffy03Count: object | undefined;
  luffy36Count: object | undefined;
  luffy69Count: object | undefined;
  luffy912Count: object | undefined;
  luffy1218Count: object | undefined;
  luffy1824Count: object | undefined;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getMultipleQueries().subscribe(
      (data) => {
        // 2024
        this.totalSales2024 = data.totalSales2024;
        this.totalShipping2024 = data.totalShipping2024;
        this.totalEtsyFees2024 = data.totalEtsyFees2024;
        this.totalSalesCount2024 = data.totalSalesCount2024;
        this.suppliesTotal2024 = data.suppliesTotal2024;
        this.advertsTotal2024 = data.advertsTotal2024;
        this.jan2024 = data.jan2024;
        this.feb2024 = data.feb2024;
        this.mar2024 = data.mar2024;
        this.apr2024 = data.apr2024;
        this.may2024 = data.may2024;
        this.jun2024 = data.jun2024;
        this.jul2024 = data.jul2024;
        this.aug2024 = data.aug2024;
        this.sep2024 = data.sep2024;
        this.oct2024 = data.oct2024;
        this.nov2024 = data.nov2024;
        this.dec2024 = data.dec2024;
        this.jan2024sales = data.jan2024sales;
        this.feb2024sales = data.feb2024sales;
        this.mar2024sales = data.mar2024sales;
        this.apr2024sales = data.apr2024sales;
        this.may2024sales = data.may2024sales;
        this.jun2024sales = data.jun2024sales;
        this.jul2024sales = data.jul2024sales;
        this.aug2024sales = data.aug2024sales;
        this.sep2024sales = data.sep2024sales;
        this.oct2024sales = data.oct2024sales;
        this.nov2024sales = data.nov2024sales;
        this.dec2024sales = data.dec2024sales;
        // 2023
        this.totalSales2023 = data.totalSales2023;
        this.totalShipping2023 = data.totalShipping2023;
        this.totalEtsyFees2023 = data.totalEtsyFees2023;
        this.totalSalesCount2023 = data.totalSalesCount2023;
        this.suppliesTotal2023 = data.suppliesTotal2023;
        this.advertsTotal2023 = data.advertsTotal2023;
        this.jan2023 = data.jan2023;
        this.feb2023 = data.feb2023;
        this.mar2023 = data.mar2023;
        this.apr2023 = data.apr2023;
        this.may2023 = data.may2023;
        this.jun2023 = data.jun2023;
        this.jul2023 = data.jul2023;
        this.aug2023 = data.aug2023;
        this.sep2023 = data.sep2023;
        this.oct2023 = data.oct2023;
        this.nov2023 = data.nov2023;
        this.dec2023 = data.dec2023;
        this.jan2023sales = data.jan2023sales;
        this.feb2023sales = data.feb2023sales;
        this.mar2023sales = data.mar2023sales;
        this.apr2023sales = data.apr2023sales;
        this.may2023sales = data.may2023sales;
        this.jun2023sales = data.jun2023sales;
        this.jul2023sales = data.jul2023sales;
        this.aug2023sales = data.aug2023sales;
        this.sep2023sales = data.sep2023sales;
        this.oct2023sales = data.oct2023sales;
        this.nov2023sales = data.nov2023sales;
        this.dec2023sales = data.dec2023sales;
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
        this.gokuHat03Count = data.gokuHat03Count;
        this.gokuHat36Count = data.gokuHat36Count;
        this.gokuHat69Count = data.gokuHat69Count;
        this.gokuHat912Count = data.gokuHat912Count;
        this.gokuHat1218Count = data.gokuHat1218Count;
        this.gokuHat1824Count = data.gokuHat1824Count;
        this.majinCount = data.majinCount;
        this.majin03Count = data.majin03Count;
        this.majin36Count = data.majin36Count;
        this.majin69Count = data.majin69Count;
        this.trunksCount = data.trunksCount;
        this.trunks03Count = data.trunks03Count;
        this.trunks36Count = data.trunks36Count;
        this.trunks69Count = data.trunks69Count;
        this.luffyCount = data.luffyCount;
        this.luffy03Count = data.luffy03Count;
        this.luffy36Count = data.luffy36Count;
        this.luffy69Count = data.luffy69Count;
        this.luffy912Count = data.luffy912Count;
        this.luffy1218Count = data.luffy1218Count;
        this.luffy1824Count = data.luffy1824Count;
        // calculates total fees and costs for 2024
        this.totalFeesAndCosts2024 = Number(this.suppliesTotal2024) + Number(this.totalEtsyFees2024) + Number(this.totalShipping2024) + Number(this.advertsTotal2024);
        // calculates profit for 2024
        this.profit2024 = this.totalSales2024 - Number(this.totalFeesAndCosts2024);
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
