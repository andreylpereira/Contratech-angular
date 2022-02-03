import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/services/register/register.service';

/* Model */
import Register from '../../models/register.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  private user: Register = {
    login: '',
    nome: '',
    sobrenome: '',
    email: '',
    senha: '',
  };

  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService
  ) {}

  public registerForm: FormGroup = this.formBuilder.group({
    login: [
      '',
      [Validators.required, Validators.minLength(10), Validators.maxLength(20)],
    ],
    firstName: ['', [Validators.required, Validators.maxLength(30)]],
    lastName: ['', [Validators.required, Validators.maxLength(30)]],
    email: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [Validators.required, Validators.minLength(6), Validators.maxLength(10)],
    ],
    confirmPassword: [
      '',
      [Validators.required, Validators.minLength(6), Validators.maxLength(10)],
    ],
  });

  ngOnInit(): void {}

  register() {
    if (this.registerForm.valid) {
      this.user.login = this.registerForm.get('login')?.value;
      this.user.nome = this.registerForm.get('firstName')?.value;
      this.user.sobrenome = this.registerForm.get('lastName')?.value;
      this.user.email = this.registerForm.get('email')?.value;
      this.user.senha = this.registerForm.get('password')?.value;

      this.registerService.register(this.user);
      this.registerForm.reset();
    }
  }
}
