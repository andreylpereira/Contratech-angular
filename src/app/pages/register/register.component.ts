import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/services/register/register.service';

/* Model */
import Register from 'src/app/pages/register/register.model';

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
    login: ['', [Validators.required]],
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]],
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
