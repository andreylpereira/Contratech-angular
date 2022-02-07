import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

/* Model */
import Register from '../../models/register.model';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  readonly url = 'http://localhost:8080/api/cadastro';

  constructor(
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService
  ) { }

  register(register: Register) {

    return this.http.post<Register>(this.url, register).subscribe(
      () => {
        this.router.navigate(['login']);
        this.toastr.success('Conta criado com sucesso!', 'Atenção!');
      },
      (err) => {
        console.error(err)
        this.toastr.error('Não foi possível criar a conta!');
      }
    );
  }
}
