import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Login from 'src/app/pages/login/login.model';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  private user: Login = {
    login: '',
    senha: '',
  };

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) {}

  public loginForm: FormGroup = this.formBuilder.group({
    login: [
      '',
      [Validators.required, Validators.minLength(6), Validators.maxLength(20)],
    ],
    password: [
      '',
      [Validators.required, Validators.minLength(6), Validators.maxLength(10)],
    ],
  });

  ngOnInit(): void {}

  login() {
    if (this.loginForm.valid) {
      this.user.login = this.loginForm.get('login')?.value;
      this.user.senha = this.loginForm.get('password')?.value;

      let user: Login = this.user;

      this.loginService.login(user);
      this.router.navigate(['obras']);
    }
  }

  logout() {
    this.loginService.logout();
  }
}
