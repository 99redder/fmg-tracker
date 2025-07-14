/*
======================================
; Title: description.class.ts
; Author: Chris Gorham
; Date Created: 03 August 2023
; Last Updated: 14 July 2025
; Description: This code supports functionality for the Item Descriptions. If you need to add a new item, you can add it to the array below.
; Sources Used: N/A
;=====================================
*/

// imports
import { IDescription } from "./description.interface";

export class Description {
  descriptions: Array<IDescription>;

  constructor() {
    // array of all the descriptions that will show up in the drop down menu
    this.descriptions =   [
      {description: "Select an Option"},
      {description: "Baby Gohan Hat (0-3 months)"},
      {description: "Baby Gohan Hat (3-6 months)"},
      {description: "Baby Gohan Hat (6-9 months)"},
      {description: "Baby Gohan Hat (9-12 months)"},
      {description: "Baby Gohan Hat (12-18 months)"},
      {description: "Baby Gohan Hat (18-24 months)"},
      {description: "Baby Gohan Hat Pattern"},
      {description: "Charmander Doll"},
      {description: "Chiaotzu Hat (0-3 months)"},
      {description: "Chiaotzu Hat (3-6 months)"},
      {description: "Chiaotzu Hat (6-9 months)"},
      {description: "Chiaotzu Hat (9-12 months)"},
      {description: "Chiaotzu Photo Set (0-3 months)"},
      {description: "Chiaotzu Photo Set (3-6 months)"},
      {description: "Chiaotzu Photo Set (6-9 months)"},
      {description: "Chiaotzu Photo Set (9-12 months)"},
      {description: "Chi Chi Diaper Set (0-3 months)"},
      {description: "Commission"},
      {description: "Donald Duck Doll"},
      {description: "Goku Baby Hat (0-3 months)"},
      {description: "Goku Baby Hat (3-6 months)"},
      {description: "Goku Baby Hat (6-9 months)"},
      {description: "Goku Baby Hat (9-12 months)"},
      {description: "Goku Baby Hat (12-18 months)"},
      {description: "Goku Baby Hat (18-24 months)"},
      {description: "Goku Baby Hat (Adult)"},
      {description: "Goku Onesie and Hat (0-6 months)"},
      {description: "Goku Onesie and Hat (6-12 months)"},
      {description: "Luffy Baby Straw Hat (0-3 months)"},
      {description: "Luffy Baby Straw Hat (3-6 months)"},
      {description: "Luffy Baby Straw Hat (6-9 months)"},
      {description: "Luffy Baby Straw Hat (9-12 months)"},
      {description: "Luffy Baby Straw Hat (12-18 months)"},
      {description: "Luffy Baby Straw Hat (18-24 months)"},
      {description: "Majin Buu Diaper Set (0-3 months)"},
      {description: "Majin Buu Diaper Set (3-6 months)"},
      {description: "Majin Buu Diaper Set (6-9 months)"},
      {description: "Mike Wazowski Diaper Set (0-3 months)"},
      {description: "Mike Wazowski Diaper Set (3-6 months)"},
      {description: "Mike Wazowski Diaper Set (6-9 months)"},
      {description: "Raphael Diaper Set (0-3 months)"},
      {description: "Raphael Diaper Set (3-6 months)"},
      {description: "Raphael Diaper Set (6-9 months)"},
      {description: "Shenron Shenlong Diaper Set (0-3 months)"},
      {description: "Shenron Shenlong Diaper Set (3-6 months)"},
      {description: "Shenron Shenlong Diaper Set (6-9 months)"},
      {description: "Shenron Shenlong Hat (0-3 months)"},
      {description: "Shenron Shenlong Hat (3-6 months)"},
      {description: "Shenron Shenlong Hat (6-9 months)"},
      {description: "Shenron Shenlong Hat (9-12 months)"},
      {description: "Shenron Shenlong Hat (12-18 months)"},
      {description: "Shenron Shenlong Hat (18-24 months)"},
      {description: "Trunks Diaper Set (0-3 months)"},
      {description: "Trunks Diaper Set (3-6 months)"},
      {description: "Trunks Diaper Set (6-9 months)"},
      {description: "Vileplume Doll"},
      {description: "Winnie the Pooh Photo Set"},
    ]
  }

// function that grabs all the descriptions from the above array; this can be called in other components
getDescriptions() {
  return this.descriptions;
}

}
