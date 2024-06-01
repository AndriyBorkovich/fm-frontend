import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { AuthResponseDto } from '../../dtos/responses/authResponseDto';
import { AccountService } from '../../services/account.service';
import { LoginRequestDto } from '../../dtos/requests/loginRequestDto';
import { ToastrService } from 'ngx-toastr';

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
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private authService: AccountService, 
    private toastr: ToastrService) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required])
    });
  }

  onSubmit(loginFormValue: any) {
    const login = {... loginFormValue };
    const userForAuth: LoginRequestDto = {
      username: login.username,
      password: login.password
    }

    this.authService.login(userForAuth)
    .subscribe({
      next: (res: AuthResponseDto) => {
       localStorage.setItem("token", res.token);
       this.authService.sendAuthStateChangeNotification(res.isAuthSuccessful);
       if(res.isAuthSuccessful) {
        this.toastr.success("User logged in", "Congrats");
        this.router.navigateByUrl('/').then(() => console.log("Logged in"));
       } else {
        this.toastr.error("Unable to log in!", "Error");
       }
    }});
  }

  onCancel() {
    this.router.navigateByUrl('/').then(() => console.log("Returned to hone"));
  }
}
