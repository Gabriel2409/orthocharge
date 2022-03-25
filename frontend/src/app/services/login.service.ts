import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { SnackService } from './snack.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  prevUrl: string = '/';
  constructor(
    private angularFireAuth: AngularFireAuth,
    private router: Router,
    private snackService: SnackService
  ) {}

  goToLoginFromUrlOnAuthFail(url: string) {
    this.snackService.authError();
    this.prevUrl = url || '/';
    this.router.navigate(['login'], {});
  }

  async redirectToPrevUrlOnLogin() {
    const firebaseUser = await this.angularFireAuth.currentUser;
    if (firebaseUser) {
      this.snackService.successfullLogin(firebaseUser.email);
      this.router.navigate([this.prevUrl]);
      this.prevUrl = '/';
    }
  }

  logoutUser() {
    this.angularFireAuth.signOut();
    this.snackService.successfullLogout();
    this.router.navigate(['/login']);
  }
}
