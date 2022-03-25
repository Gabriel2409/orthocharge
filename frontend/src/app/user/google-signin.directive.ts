import { Directive, HostListener } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import { LoginService } from '../services/login.service';

@Directive({
  selector: '[appGoogleSignin]',
})
export class GoogleSigninDirective {
  constructor(
    private angularFireAuth: AngularFireAuth,
    private loginService: LoginService
  ) {}

  @HostListener('click')
  async onClick() {
    await this.angularFireAuth.signInWithPopup(new GoogleAuthProvider());
    this.loginService.redirectToPrevUrlOnLogin();
  }
}
