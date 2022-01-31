import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/* Model */
import Stage from 'src/app/models/stage.model';

/* Service */
import { UserService } from 'src/app/services/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  private userId: number = 0;
  private userToken: string = '';

  constructor(private userService: UserService, private http: HttpClient) {
    this.userId = this.userService.getUser().id;
    this.userToken = this.userService.getUser().token;

  }

  getListStage(idObra: any) {
    return this.http.get<Array<Stage>>(
      `/api/api/usuarios/${this.userId}/obras/${idObra}/etapas`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + this.userToken,
        },
      }
    );
  }

}
