import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/* Service */
import { UserService } from '../user/user.service';

/* Model */
import Work from 'src/app/models/work.model';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  readonly url = '${this.url}';
  private userId: number = 0;
  private userToken: string = '';

  constructor(private userService: UserService, private http: HttpClient) {

    this.userId = this.userService.getUser().id;
    this.userToken = this.userService.getUser().token;
  }

  workReport(idObra: number) {

    return this.http.get<Work>(
      `${this.url}/${this.userId}/obras/${idObra}/relatorio`,
      {
        headers: { Authorization: `Bearer ${this.userToken}` },
      }
    );
  }
}
