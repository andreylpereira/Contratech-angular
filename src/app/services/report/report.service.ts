import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/* Service */
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  private userId: number = 0;
  private userToken: string = '';

  constructor(private userService: UserService, private http: HttpClient) {
    this.userId = this.userService.getUser().id;
    this.userToken = this.userService.getUser().token;
  }

  workReport(idObra: number) {
    return this.http.get(`/api/api/usuarios/${this.userId}/obras/${idObra}/relatorio`, {
      headers: { Authorization: `Bearer ${this.userToken}` },
    });
  }
}
