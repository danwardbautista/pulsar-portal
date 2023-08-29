import { Component,OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, NavigationEnd, Event } from '@angular/router';
import { filter } from 'rxjs/operators';

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

  constructor(private router: Router, private _snackBar: MatSnackBar, private route: ActivatedRoute) {
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
