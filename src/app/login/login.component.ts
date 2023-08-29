import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router: Router, private _snackBar: MatSnackBar) {
  }
  

  postLogin() {
    localStorage.setItem('loggedIn', 'true');
    console.log(localStorage.getItem('loggedIn'));
    this.router.navigate(['/dashboard']);
    this._snackBar.open("Login successful.", 'Close', {
      panelClass: 'success-snackbar',
      verticalPosition: 'bottom',
      duration: 5000,
    });

  }
}
