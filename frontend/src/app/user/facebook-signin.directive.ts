import { Directive, HostListener } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FacebookAuthProvider } from 'firebase/auth';
@Directive({
  selector: '[appFacebookSignin]',
})
export class FacebookSigninDirective {
  constructor(private angularFireAuth: AngularFireAuth) {}

  @HostListener('click')
  onClick() {
    this.angularFireAuth.signInWithPopup(new FacebookAuthProvider());
  }
}
