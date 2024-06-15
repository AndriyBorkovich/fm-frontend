import { Component, OnInit } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {RegisterFormComponent} from "../sign-form/register-form.component";
import {NgIf} from "@angular/common";
import {Router} from "@angular/router";
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormsModule,
    RegisterFormComponent,
    NgIf
  ],
  template: `
    @if (!isLoggedIn) {
      <h1 class="text-center font-medium text-5xl mt-20 mb-10">Welcome to FM!</h1>
      <div class="flex max-w-sm mx-auto">
        <button type="submit" name="signInButton" class="submit-btn mr-5" (click)="handleRegisterClick()">Register
        </button>
        <button type="submit" name="signUpButton" class="submit-btn" (click)="handleLoginClick()">Login</button>
      </div>
    } @else {
      <h1 class="text-center font-medium text-5xl mt-20 mb-10">Welcome!</h1>
    }
  `,
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  isLoggedIn : boolean = false;
  constructor(
    private router: Router,
    private authService: AccountService
  ) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isUserAuthenticated()
  }

  handleRegisterClick(){
    this.router.navigateByUrl('/register').then(() => console.log("Moved to registration"));
  }

  handleLoginClick(){
    this.router.navigateByUrl('/login').then(() => console.log("Moved to login"));
  }
}
