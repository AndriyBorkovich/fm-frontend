import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {

  constructor(private router: Router) {
  }
  onSubmit() {
    this.router.navigateByUrl('/').then(() => console.log("Logged in"));
  }

  onCancel() {
    this.router.navigateByUrl('/').then(() => console.log("Returned to hone"));
  }
}
