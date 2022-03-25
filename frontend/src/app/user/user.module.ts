import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { UserRoutingModule } from './user-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { GoogleSigninDirective } from './google-signin.directive';

@NgModule({
  declarations: [
    LoginPageComponent,
    GoogleSigninDirective
  ],
  imports: [CommonModule, SharedModule, UserRoutingModule],
})
export class UserModule {}
