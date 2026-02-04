/*
======================================
; Title: sale.service.ts
; Author: Red
; Date Created: 13 July 2023
; Last Updated: 17 January 2026
; Description: This code all Sale services and functions
; Sources Used:
; BezKoder Angular 10 CRUD Application Tutorial https://www.bezkoder.com/angular-10-node-js-express-mysql/
;=====================================
*/

// imports
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

// sets the base url and API location
const baseUrl = environment.apiUrl + '/api/sales';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  constructor(private http: HttpClient) { }

  getAll(params): Observable<any> {
    return this.http.get(baseUrl, { params });
  }

  get(id): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id, data): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByItemDescription(itemDescription): Observable<any> {
    return this.http.get(`${baseUrl}?itemDescription=${itemDescription}`);
  }

}
