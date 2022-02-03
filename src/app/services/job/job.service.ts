import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

/* Model */
import Job from 'src/app/models/job.model';

/* Service */
import { UserService } from 'src/app/services/user/user.service';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  readonly url = '/api/api/usuarios';
  private userId: number = 0;
  private userToken: string = '';

  constructor(private userService: UserService, private http: HttpClient, private toastr: ToastrService) {
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

    return this.http.post<any>(
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
    this.toastr.success('Serviço excluído com sucesso!', 'Atenção!');

    return this.http.delete<any>(
      `${this.url}/${this.userId}/obras/${idObra}/etapas/${idEtapa}/servicos/${idServico}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.userToken}`,
        },
      }
    );
  }

  delAllJob(idObra: any, idEtapa: any) {
    this.toastr.success('Serviços excluídos com sucesso!', 'Atenção!');

    return this.http.delete<any>(
      `${this.url}/${this.userId}/obras/${idObra}/etapas/${idEtapa}/servicos/`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.userToken}`,
        },
      }
    );
  }

  putAllJob(idObra: any, idEtapa: any, data: any) {
    this.toastr.success(
      'Os serviços dessa etapa foram atualizados com sucesso!',
      'Atenção!'
    );

    return this.http.put<any>(
      `${this.url}/${this.userId}/obras/${idObra}/etapas/${idEtapa}/servicos/atualizar`,
      data,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.userToken}`,
        },
      }
    );
  }
}
