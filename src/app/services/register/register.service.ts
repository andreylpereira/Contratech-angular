import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import Register from 'src/app/pages/register/register.model';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  readonly url: string;

  constructor(private http: HttpClient, private router: Router) {
    this.url = 'http://localhost:8080/api/cadastro';
  }

  register(register: Register) {
    return this.http.post(this.url, register).subscribe((data) => {
      console.log(data);
      this.router.navigate(['login']);
    });
  }
}
