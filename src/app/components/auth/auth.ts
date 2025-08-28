import { Component } from '@angular/core';
import { AuthService } from '../../service/auth-service';

@Component({
  selector: 'app-auth',
  imports: [],
  templateUrl: './auth.html',
  styleUrl: './auth.css'
})
export class Auth {
  constructor(private readonly authService: AuthService) {}
 
  protected login() {
    this.authService.login();
  }
 
  protected logout() {
    this.authService.logout();
  }
 
  public isLoggedIn(): boolean {
    return !!this.authService.getIdentityClaims();
  }
}
