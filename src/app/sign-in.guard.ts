/*
======================================
; Title: sign-in.guard.spec.ts
; Author: Red
; Date Created: 13 July 2023
; Last Updated: 31 July 2023
; Description: This code supports the sign-in guard
; Sources Used: N/A
;=====================================
*/

// imports
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignInGuard implements CanActivate {

  constructor(private router: Router, private cookieService: CookieService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      const sessionUser = this.cookieService.get('session_user');
      if (sessionUser) {
        return true;
      } else {
        this.router.navigate(['/session/sign-in']);
        return false;
      }
  }

}
