import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { SnackService } from 'src/app/services/snack.service';

@Component({
  selector: 'app-email-login',
  templateUrl: './email-login.component.html',
  styleUrls: ['./email-login.component.scss'],
})
export class EmailLoginComponent implements OnInit {
  form: FormGroup | null = null;
  formType: FormType = 'login';
  loading: boolean = false;
  serverMessage: string | null = null;
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;

  constructor(
    private angularFireAuth: AngularFireAuth,
    private formBuilder: FormBuilder,
    private snackService: SnackService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.minLength(6), Validators.required]],
      passwordConfirm: ['', []],
    });
  }

  changeType(val: FormType) {
    this.formType = val;
  }

  get isLogin(): boolean {
    return this.formType === 'login';
  }
  get isSignup(): boolean {
    return this.formType === 'signup';
  }
  get isPasswordReset(): boolean {
    return this.formType === 'reset';
  }

  get email(): AbstractControl | null | undefined {
    return this.form?.get('email');
  }
  get password(): AbstractControl | null | undefined {
    return this.form?.get('password');
  }
  get passwordConfirm(): AbstractControl | null | undefined {
    return this.form?.get('passwordConfirm');
  }

  get passwordDoesMatch(): boolean {
    if (this.formType !== 'signup') return true;
    if (!this.password || !this.passwordConfirm) return false;

    return this.password.value === this.passwordConfirm.value;
  }

  async onSubmit() {
    if (!this.email || !this.password) return;
    this.loading = true;
    const email = this.email.value;
    const password = this.password.value;
    try {
      if (this.isLogin) {
        await this.angularFireAuth.signInWithEmailAndPassword(email, password);
        this.loading = false;
      }
      if (this.isSignup) {
        await this.angularFireAuth.createUserWithEmailAndPassword(
          email,
          password
        );
        this.loading = false;
      }

      if (this.isPasswordReset) {
        const actionCodeSettings = {
          // After password reset, the user will be give the ability to go back
          // to this page.
          url: 'http://localhost:4200/login',
          handleCodeInApp: false,
        };
        await this.angularFireAuth.sendPasswordResetEmail(
          email,
          actionCodeSettings
        );
        this.snackService.emailSent();
        this.loading = false;
      }
    } catch (err: any) {
      this.serverMessage = err;
      this.loading = false;
    }
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }
}

type FormType = 'login' | 'signup' | 'reset';
