import { Component,OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, NavigationEnd, Event } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pulsar-portal';
  save:any;
  isLoginRoute: boolean = false;
  showToolbarAndDrawer: boolean = true;

  constructor(private router: Router, private _snackBar: MatSnackBar, private route: ActivatedRoute, private http: HttpClient) {
    this.router.events
      .pipe(filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.showToolbarAndDrawer = event.url !== '/login';
      });
  }

  @ViewChild('drawer') drawer: any; // Change the type if necessary

  toggleDrawer() {
    if (this.drawer) {
      this.drawer.toggle();
    }
  }

  ngOnInit() {
    // this.save = localStorage.getItem('loggedIn');

    // if(this.save=="none")
    // {
    //   this.showToolbarAndDrawer = false;
    // }
    // else{
    //   this.showToolbarAndDrawer = true;
    // }
  }

  redirectToKeycloakLogin(): void {
    console.log("toggled");

    const keycloakBaseUrl = 'https://auth.passcess.net/auth/realms/master';
    const clientId = 'pulsar-portal';
    const redirectUri = 'http://localhost:4200/receiver';

    const authUrl = `${keycloakBaseUrl}/protocol/openid-connect/auth`;

    // const state = this.generateRandomState();
    // sessionStorage.setItem('keycloak_state', state);

    const queryParams = new HttpParams()
      .set('client_id', clientId)
      .set('redirect_uri', redirectUri)
      .set('response_type', 'code')
      .set('scope', 'openid')
      // .set('state', state);

    const redirectUrl = `${authUrl}?${queryParams.toString()}`;
    
    // Use window.location.href to redirect the user to the Keycloak login page
    window.location.href = redirectUrl;
  }
  

  postLogout() {
    localStorage.setItem('loggedIn', 'none');
    this.router.navigate(['/login']);
    this._snackBar.open("Logout successful.", 'Close', {
      panelClass: 'success-snackbar',
      verticalPosition: 'bottom',
      duration: 5000,
    });
  }
}
