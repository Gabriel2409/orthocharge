import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';
import { SnackService } from 'src/app/services/snack.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  authStateSubscription: Subscription | null = null;
  constructor(
    public angularFireAuth: AngularFireAuth,
    private loginService: LoginService
  ) {}
  ngOnDestroy(): void {
    if (this.authStateSubscription) this.authStateSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.authStateSubscription = this.angularFireAuth.authState.subscribe({
      next: (user) => {
        if (user) this.loginService.redirectToPrevUrlOnLogin();
      },
    });
  }
  onLogout() {
    this.loginService.logoutUser();
  }
}
