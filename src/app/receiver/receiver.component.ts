import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.scss']
})
export class ReceiverComponent implements OnInit {
  private accessToken: string | null = null;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    const code = new URLSearchParams(window.location.search).get('code');

    if (code) {
      this.handleKeycloakCallback(code).subscribe(
        () => {
          console.log('Access Token:', this.accessToken);
        },
        error => {
          console.error('Error handling Keycloak callback:', error);
        }
      );
    }
  }

  private handleKeycloakCallback(code: string): Observable<any> {
    const keycloakBaseUrl = 'https://auth.passcess.net/auth/realms/master';
    const clientId = 'pulsar-portal';
    const clientSecret = 'your-client-secret'; 
    const redirectUri = 'http://localhost:4200/receiver';

    const tokenUrl = `${keycloakBaseUrl}/protocol/openid-connect/token`;

    const body = new HttpParams()
      .set('grant_type', 'authorization_code')
      .set('client_id', clientId)
      .set('client_secret', clientSecret)
      .set('redirect_uri', redirectUri)
      .set('code', code);

    const options = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };

    return this.http.post(tokenUrl, body.toString(), options)
      .pipe(
        map((response: any) => {
          this.accessToken = response.access_token;
          return response;
        })
      );
  }
}
