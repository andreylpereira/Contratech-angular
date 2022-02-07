import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, tap } from 'rxjs';

/* Model */
import Work from 'src/app/models/work.model';

/* Service */
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root',
})
export class ListWorkService {
  readonly url = '/api/api/usuarios';
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

  getListWork() {
    return this.http.get<Array<Work>>(
      `/api/api/usuarios/${this.userId}/obras`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.userToken}`,
        },
      }
    );
  }

  addWork(nomeObra: string) {
    return this.http
      .post<Work>(
        `${this.url}/${this.userId}/obras`,
        { nomeObra: nomeObra },
        { headers: { Authorization: `Bearer ${this.userToken}` } }
      )
      .pipe(
        tap((_) => {
          this.toastr.success('Obra adicionada com sucesso!', 'Atenção!');
        }),
        catchError((err: any) => {
          this.toastr.error(
            'Não foi possível adicionar uma obra. Tente outras vez!',
            'Atenção!'
          );
          return err;
        })
      );
  }

  renameWork(nomeObra: string, idObra: number) {
    return this.http
      .put<Work>(
        `${this.url}/${this.userId}/obras/${idObra}`,
        { nomeObra: nomeObra },
        { headers: { Authorization: `Bearer ${this.userToken}` } }
      )
      .pipe(
        tap((_) => {
          this.toastr.success('Obra renomeada com sucesso!', 'Atenção!');
        }),
        catchError((err: any) => {
          this.toastr.error(
            'Não foi possível renomear esta obra. Tente outras vez!',
            'Atenção!'
          );
          return err;
        })
      );
  }

  deleteWork(idObra: number) {
    return this.http
      .delete<Work>(`${this.url}/${this.userId}/obras/${idObra}`, {
        headers: { Authorization: `Bearer ${this.userToken}` },
      })
      .pipe(
        tap((_) => {
          this.toastr.success('Obra excluída com sucesso!', 'Atenção!');
        }),
        catchError((err: any) => {
          this.toastr.error(
            'Não foi possível excluir esta obra. Tente outras vez!',
            'Atenção!'
          );
          return err;
        })
      );
  }
}
