import { Component,OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, NavigationEnd} from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pulsar-portal';
  isLoginRoute: boolean = false;

  constructor(private router: Router, private _snackBar: MatSnackBar, private route: ActivatedRoute) {
  }

  @ViewChild('drawer') drawer: any; // Change the type if necessary

  // ... other code ...

  // Use this method to toggle the drawer
  toggleDrawer() {
    if (this.drawer) {
      this.drawer.toggle();
    }
  }

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => { // Change the type to 'any'
        // Cast the event to NavigationEnd
        const navigationEndEvent = event as NavigationEnd;

        // Check if the current route is the login route
        this.isLoginRoute = navigationEndEvent.url === '/login';
      });
  }

  postLogout() {
    this.router.navigate(['/login']);
    this._snackBar.open("Logout successful.", 'Close', {
      panelClass: 'success-snackbar',
      verticalPosition: 'bottom',
      duration: 5000,
    });
  }
}
