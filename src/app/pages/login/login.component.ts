import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup = this.fb.group({
    login: [
      '',
      [Validators.required, Validators.minLength(6), Validators.maxLength(20)],
    ],
    password: [
      '',
      [Validators.required, Validators.minLength(6), Validators.maxLength(10)],
    ],
  });

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {}

  submitForm() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.router.navigate(['obras']);
    }
  }
}
