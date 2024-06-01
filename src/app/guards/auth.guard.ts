import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AccountService } from '../services/account.service';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(public accountService: AccountService, public router: Router) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (!this.accountService.isUserAuthenticated()) {
      this.router
        .navigateByUrl('/login')
        .then(() =>
          console.log('User is not logged in or his time expired')
        );
        return false;
    }

    // this will be passed from the route config on the data property
    const expectedRoles: string[] = route.data['expectedRoles'];
    const curentUserRole = this.accountService.getCurrentRole();

    let hasExpectedRole = false;
    expectedRoles.forEach((expectedRole) => {
      if (curentUserRole == expectedRole) {
        hasExpectedRole = true;
      }
    });

    if (!hasExpectedRole) {
      this.router
        .navigateByUrl('/no-access')
        .then(() => console.log('User does not have required role'));
      return false;
    }

    return true;
  }
}
