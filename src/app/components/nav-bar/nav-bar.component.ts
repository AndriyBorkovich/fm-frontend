import { Component } from '@angular/core';
import {NgIf, NgOptimizedImage} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";
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
  
  constructor(private authService: AccountService) { }
  
  ngOnInit(): void {
    this.authService.authChanged
    .subscribe(res => {
      this.isUserAuthenticated = res;
    })
  }

  signOut() {
    this.authService.logout();
  }
}
