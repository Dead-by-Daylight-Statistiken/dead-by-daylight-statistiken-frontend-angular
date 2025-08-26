import { AuthConfig } from "angular-oauth2-oidc";
import { environment } from "../environments/environment";

export const authConfig: AuthConfig = {
    issuer: environment.oauth2Issuer,
    redirectUri: window.location.origin,
    clientId: environment.oauth2ClientId,
    responseType: 'code',
    scope: 'openid profile email',
    showDebugInformation: false,
    useSilentRefresh: true,
};
