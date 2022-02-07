import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, tap } from 'rxjs';

/* Model */
import Stage from 'src/app/models/stage.model';

/* Service */
import { UserService } from 'src/app/services/user/user.service';

@Injectable({
  providedIn: 'root',
})
export class TableService {
  readonly url = '${this.url}';
  private userId: number = 0;
  private userToken: string = '';

  constructor(
    private userService: UserService,
    private http: HttpClient,
    private toastr: ToastrService
  ) {
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
    return this.http
      .put<Stage>(
        `${this.url}/${this.userId}/obras/${idObra}/etapas/${idEtapa}`,
        { nomeEtapa: nomeEtapa },
        { headers: { Authorization: `Bearer ${this.userToken}` } }
      )
      .pipe(
        tap((_) => {
          this.toastr.success('Etapa renomeada com sucesso!', 'Atenção!');
        }),
        catchError((err: any) => {
          this.toastr.error(
            'Não foi possível renomear esta etapa. Tente outras vez!',
            'Atenção!'
          );
          return err;
        })
      );
  }

  addStage(idObra: number, nomeEtapa: string) {
    return this.http
      .post<Stage>(
        `${this.url}/${this.userId}/obras/${idObra}/etapas`,
        { nomeEtapa: nomeEtapa },
        { headers: { Authorization: `Bearer ${this.userToken}` } }
      )
      .pipe(
        tap((_) => {
          this.toastr.success('Etapa criada com sucesso!', 'Atenção!');
        }),
        catchError((err: any) => {
          this.toastr.error(
            'Não foi possível criar esta etapa. Tente outras vez!',
            'Atenção!'
          );
          return err;
        })
      );
  }

  deleteStage(idObra: number, idEtapa: number) {
    return this.http
      .delete<Stage>(
        `${this.url}/${this.userId}/obras/${idObra}/etapas/${idEtapa}`,
        {
          headers: { Authorization: `Bearer ${this.userToken}` },
        }
      )
      .pipe(
        tap((_) => {
          this.toastr.success('Etapa excluída com sucesso!', 'Atenção!');
        }),
        catchError((err: any) => {
          this.toastr.error(
            'Não foi possível excluir esta etapa. Tente outras vez!',
            'Atenção!'
          );
          return err;
        })
      );
  }
}
