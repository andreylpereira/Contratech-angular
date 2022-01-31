import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/* Model */
import Stage from 'src/app/models/stage.model';

/* Service */
import { UserService } from 'src/app/services/user/user.service';

@Injectable({
  providedIn: 'root',
})
export class TableService {
  [x: string]: any;
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

  renameStage(idObra: number, nomeEtapa: string, idEtapa: number) {
    return this.http.put(
      `/api/api/usuarios/${this.userId}/obras/${idObra}/etapas/${idEtapa}`,
      { nomeEtapa: nomeEtapa },
      { headers: { Authorization: 'Bearer ' + this.userToken } }
    );
  }

  addStage(idObra: number, nomeEtapa: string) {
    return this.http.post(
      `/api/api/usuarios/${this.userId}/obras/${idObra}/etapas`,
      { nomeEtapa: nomeEtapa },
      { headers: { Authorization: 'Bearer ' + this.userToken } }
    );
  }

  deleteStage(idObra: number, idEtapa: number) {
    return this.http.delete(
      `/api/api/usuarios/${this.userId}/obras/${idObra}/etapas/${idEtapa}`,
      { headers: { Authorization: 'Bearer ' + this.userToken } }
    );
  }
}
