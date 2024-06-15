import { Component } from '@angular/core';
import {NgIf, NgOptimizedImage} from "@angular/common";
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink,
    NgIf,
    RouterLinkActive
  ],
  templateUrl: './nav-bar.component.html',
  styles: ``
})
export class NavBarComponent {
  public isUserAuthenticated: boolean;
  
  constructor(private authService: AccountService, private router: Router) { }
  
  ngOnInit(): void {
    this.isUserAuthenticated = this.authService.isUserAuthenticated();
  }

  signOut() {
    this.authService.logout();
    this.router.navigateByUrl('');
  }
}
