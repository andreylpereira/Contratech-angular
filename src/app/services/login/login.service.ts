import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

/* Model */
import Login from 'src/app/pages/login/login.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  readonly url: string;

  constructor(private http: HttpClient, private router: Router) {
    this.url = 'http://localhost:8080/api/seguranca/login';
  }

  login(user: Login) {
    return this.http.post<any>(this.url, user).subscribe((data) => {
      localStorage.setItem('currentUser', JSON.stringify(data));
      this.router.navigate(['obras']);
    });
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

}
