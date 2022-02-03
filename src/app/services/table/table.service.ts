import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

/* Model */
import Stage from 'src/app/models/stage.model';

/* Service */
import { UserService } from 'src/app/services/user/user.service';

@Injectable({
  providedIn: 'root',
})
export class TableService {
  readonly url = '/api/api/usuarios';
  private userId: number = 0;
  private userToken: string = '';

  constructor(private userService: UserService, private http: HttpClient, private toastr: ToastrService) {

    this.userId = this.userService.getUser().id;
    this.userToken = this.userService.getUser().token;
  }

  getListStage(idObra: any) {

    return this.http.get<Array<Stage>>(
      `${this.url}/${this.userId}/obras/${idObra}/etapas`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.userToken}`,
        },
      }
    );
  }

  renameStage(idObra: number, nomeEtapa: string, idEtapa: number) {
    this.toastr.success('Etapa renomeada com sucesso!', 'Atenção!');

    return this.http.put(
      `${this.url}/${this.userId}/obras/${idObra}/etapas/${idEtapa}`,
      { nomeEtapa: nomeEtapa },
      { headers: { Authorization: `Bearer ${this.userToken}` } }
    );
  }

  addStage(idObra: number, nomeEtapa: string) {
    this.toastr.success('Etapa criada com sucesso!', 'Atenção!');

    return this.http.post(
      `${this.url}/${this.userId}/obras/${idObra}/etapas`,
      { nomeEtapa: nomeEtapa },
      { headers: { Authorization: `Bearer ${this.userToken}` } }
    );
  }

  deleteStage(idObra: number, idEtapa: number) {
    this.toastr.success('Etapa excluída com sucesso!', 'Atenção!');

    return this.http.delete(
      `${this.url}/${this.userId}/obras/${idObra}/etapas/${idEtapa}`,
      { headers: { Authorization: `Bearer ${this.userToken}` } }
    );
  }
}
