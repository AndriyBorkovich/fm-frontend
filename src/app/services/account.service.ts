import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.development";
import {RegistrationRequestDto} from "../dtos/requests/registrationRequestDto";
import {Subject, map} from "rxjs";
import {RegistrationResponseDto} from "../dtos/responses/registrationResponseDto";
import { LoginRequestDto } from '../dtos/requests/loginRequestDto';
import { AuthResponseDto } from '../dtos/responses/authResponseDto';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private apiUrl = environment.apiUrl;
  private authChangeSub = new Subject<boolean>()
  public authChanged = this.authChangeSub.asObservable();
  
  constructor(private http: HttpClient) { }

  register(model: RegistrationRequestDto) {
    return this.http.post<RegistrationResponseDto>(`${this.apiUrl}account/register`, model);
  }

  login(model: LoginRequestDto) {
    return this.http.post<AuthResponseDto>(`${this.apiUrl}account/login`, model);
  }

  logout() {
    localStorage.removeItem('user');
    this.sendAuthStateChangeNotification(false);
  }

  sendAuthStateChangeNotification = (isAuthenticated: boolean) => {
    this.authChangeSub.next(isAuthenticated);
  }
}
