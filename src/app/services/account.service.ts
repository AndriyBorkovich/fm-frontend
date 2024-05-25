import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.development";
import {RegistrationRequestDto} from "../dtos/requests/registrationRequestDto";
import {map} from "rxjs";
import {RegistrationResponseDto} from "../dtos/responses/registrationResponseDto";

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  register(model: RegistrationRequestDto)
  {
    return this.http.post(`${this.apiUrl}account/register`, model)
      .pipe(map((user: any) => {
        console.log(user);
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
        }

        return user;
      }))
  }

  logout() {
    localStorage.removeItem('user');
  }
}
