import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Login from 'src/app/pages/login/login.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  readonly url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/api/seguranca/login';
  }

  login(user: Login) {
    return this.http.post<any>(this.url, user).subscribe((data) => {
      sessionStorage.setItem('currentUser', JSON.stringify(data));
      console.log(data);
    });
  }

  logout() {
    sessionStorage.removeItem('currentUser');
  }
}
