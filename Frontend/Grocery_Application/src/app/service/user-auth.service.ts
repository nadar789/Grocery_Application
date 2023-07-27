import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }

  public setRoles(roles: [] | null) {
    localStorage.setItem('roles', JSON.stringify(roles));
  }

  public getRoles(): [] | null {
    const rolesString = localStorage.getItem('roles');
    return rolesString ? JSON.parse(rolesString) : null;
  }

  public setToken(jwtToken: string) {
    localStorage.setItem("jwtToken", jwtToken);
  }

  public getToken(): string | null {
    return localStorage.getItem('jwtToken');
  }

  public clear() {
    localStorage.clear();
  }

  public isLoggedIn() {
    return this.getRoles() && this.getToken();
  }

  public logout() {
    this.clear();
    
  }
}
