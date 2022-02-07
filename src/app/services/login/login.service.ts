import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

/* Model */
import Login from './../../models/login.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  readonly url: string;

  constructor(
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.url = 'http://localhost:8080/api/seguranca/login';
  }

  login(user: Login) {

    return this.http.post<any>(this.url, user).subscribe(
      (data) => {
        localStorage.setItem('currentUser', JSON.stringify(data));
        this.router.navigate(['obras']);
        this.toastr.success('Login realizado com sucesso!', 'Atenção!');
      },
      (err) => {
        console.error(err)
        this.toastr.error(
          'Não foi possível entrar no sistema, verifica suas credencias de acesso e sua internet',
          'Atenção!'
        );
      }
    );
  }

  logout() {

    localStorage.removeItem('currentUser');
    this.toastr.error(
      'Logout efetuado com sucesso!',
      'Atenção!'
    );
  }
}
