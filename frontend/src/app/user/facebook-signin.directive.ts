import { Directive, HostListener } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FacebookAuthProvider } from 'firebase/auth';
import { LoginService } from '../services/login.service';
@Directive({
  selector: '[appFacebookSignin]',
})
export class FacebookSigninDirective {
  constructor(private angularFireAuth: AngularFireAuth) {}

  @HostListener('click')
  async onClick() {
    await this.angularFireAuth.signInWithPopup(new FacebookAuthProvider());
  }
}
