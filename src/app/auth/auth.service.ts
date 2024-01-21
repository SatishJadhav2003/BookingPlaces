import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _userAuthenticated = false;
  constructor() {}

  get userIsAuthenticated() {
    return this._userAuthenticated;
  }
  
  login() {
    this._userAuthenticated = true;
  }

  logOut() {
    this._userAuthenticated = false;
  }
}
