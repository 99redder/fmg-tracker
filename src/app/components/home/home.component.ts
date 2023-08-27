/*
======================================
; Title: home.component.ts
; Author: Chris Gorham
; Date Created: 21 July 2023
; Last Updated: 24 August 2023
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
  totalSales2023: number | undefined;
  totalShipping2023: number | undefined;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getMultipleQueries().subscribe(
      (data) => {
        this.totalSales2023 = data.totalSales2023;
        this.totalShipping2023 = data.totalShipping2023;
        console.log(this.totalSales2023, this.totalShipping2023)
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
