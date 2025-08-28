import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from '../auth.config';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends OAuthService {
  public initializeOAuth(): Promise<void> {
    return new Promise((resolve) => {
      this.configure(authConfig);
      this.loadDiscoveryDocumentAndTryLogin()
        .then(() => resolve());
    });
  }

  public login() {
    this.initLoginFlow();
  }

  public logout() {
    this.logOut();
  }
}
