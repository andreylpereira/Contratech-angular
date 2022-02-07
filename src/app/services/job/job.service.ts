import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, tap } from 'rxjs';

/* Model */
import Job from 'src/app/models/job.model';
import Stage from 'src/app/models/stage.model';

/* Service */
import { UserService } from 'src/app/services/user/user.service';

@Injectable({
  providedIn: 'root',
})
export class JobService {
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

  getJobs(idObra: any, idEtapa: any) {
    return this.http.get<Array<Job>>(
      `${this.url}/${this.userId}/obras/${idObra}/etapas/${idEtapa}/servicos`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.userToken}`,
        },
      }
    );
  }

  addJob(idObra: any, idEtapa: any) {
    this.toastr.success('Serviço criado com sucesso!', 'Atenção!');

    return this.http.post<Stage>(
      `${this.url}/${this.userId}/obras/${idObra}/etapas/${idEtapa}/servicos`,
      null,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.userToken}`,
        },
      }
    );
  }

  delJob(idObra: any, idEtapa: any, idServico: any) {
    return this.http
      .delete<Stage>(
        `${this.url}/${this.userId}/obras/${idObra}/etapas/${idEtapa}/servicos/${idServico}`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${this.userToken}`,
          },
        }
      )
      .pipe(
        tap((_) => {
          this.toastr.success('Serviço excluído com sucesso!', 'Atenção!');
        }),
        catchError((err: any) => {
          this.toastr.error(
            'Não foi possível excluir o serviço. Tente outras vez!',
            'Atenção!'
          );
          return err;
        })
      );
  }

  delAllJob(idObra: any, idEtapa: any) {
    return this.http
      .delete<Stage>(
        `${this.url}/${this.userId}/obras/${idObra}/etapas/${idEtapa}/servicos/`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${this.userToken}`,
          },
        }
      )
      .pipe(
        tap((_) => {
          this.toastr.success('Serviços excluídos com sucesso!', 'Atenção!');
        }),
        catchError((err: any) => {
          this.toastr.error(
            'Não foi possível excluir os serviços. Tente outras vez!',
            'Atenção!'
          );
          return err;
        })
      );
  }

  putAllJob(idObra: any, idEtapa: any, data: any) {
    return this.http
      .put<Stage>(
        `${this.url}/${this.userId}/obras/${idObra}/etapas/${idEtapa}/servicos/atualizar`,
        data,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${this.userToken}`,
          },
        }
      )
      .pipe(
        tap((_) => {
          this.toastr.success(
            'Os serviços da etapa foram atualizados com sucesso!',
            'Atenção!'
          );
        }),
        catchError((err: any) => {
          this.toastr.error(
            'Não foi possível atualizar os serviços da etapa. Tente outras vez!',
            'Atenção!'
          );
          return err;
        })
      );
  }
}
