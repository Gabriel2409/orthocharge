import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SnackService {
  constructor(private snackBar: MatSnackBar, private router: Router) {}

  authError() {
    this.snackBar.open('You must be logged in to access this page', 'OK', {
      duration: 5000,
    });

    // return this.snackBar._openedSnackBarRef
    //   ?.onAction()
    //   .pipe(tap((_) => this.router.navigate(['/login'])))
    //   .subscribe();
  }

  successfullLogin(email: string | null) {
    if (!email) return;
    this.snackBar.open(`Successfully logged in as ${email}`, 'OK', {
      duration: 5000,
    });
  }

  successfullLogout() {
    this.snackBar.open('Successfully logged out', 'OK', {
      duration: 5000,
    });
  }

  emailSent() {
    this.snackBar.open(
      'Email to reset password sent if the user exists',
      'OK',
      {
        duration: 5000,
      }
    );
  }
}
