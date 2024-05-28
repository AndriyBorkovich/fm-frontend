import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {RegistrationRequestDto} from "../../dtos/requests/registrationRequestDto";
import {NgIf} from "@angular/common";
import {AccountService} from "../../services/account.service";
import {RegistrationResponseDto} from "../../dtos/responses/registrationResponseDto";
import {HttpErrorResponse} from "@angular/common/http";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'register-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss'
})
export class RegisterFormComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private router: Router,
              private accountService: AccountService,
              private toaster: ToastrService) {
  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }


  onCancel() {
    this.router.navigateByUrl('/').then(() => console.log("Returned to home"));
  }

  validateControl = (controlName: string) => {
    return this.registerForm.get(controlName).invalid && this.registerForm.get(controlName).touched
  }

  hasError = (controlName: string, errorName: string) => {
    return this.registerForm.get(controlName).hasError(errorName)
  }

  registerUser = (registerFormValue: any) => {
    const formValues = {...registerFormValue};
    const user: RegistrationRequestDto = {
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      email: formValues.email,
      password: formValues.password,
    };

    this.accountService.register(user)
      .subscribe({
        next: (result: RegistrationResponseDto) => {
          this.accountService.sendAuthStateChangeNotification(result.isSuccessfulRegistration);
          if(result.isSuccessfulRegistration) {
            this.toaster.success("User registered successfully", "Congrats!", {
              timeOut: 5000
            });
            this.router.navigateByUrl('/').then(() => console.log("Navigated to home"));
          } else {
            this.toaster.error(result.errors.at(0), "Registration error!", {
              positionClass: 'toast-bottom-right',
              timeOut: 5000
            });

          }

        },
        error: (err: HttpErrorResponse) => console.log(err.error)
      })
  }
}
