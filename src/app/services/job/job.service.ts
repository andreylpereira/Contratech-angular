import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Job from 'src/app/models/job.model';
import { UserService } from 'src/app/services/user/user.service';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  private userId: number = 0;
  private userToken: string = '';

  constructor(private userService: UserService, private http: HttpClient) {
    this.userId = this.userService.getUser().id;
    this.userToken = this.userService.getUser().token;
  }

  getJobs(idObra: any, idEtapa: any) {
    return this.http.get<Array<Job>>(
      `/api/api/usuarios/${this.userId}/obras/${idObra}/etapas/${idEtapa}/servicos`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.userToken}`,
        },
      }
    );
  }

  addJob(idObra: any, idEtapa: any) {
    return this.http.post<any>(
      `/api/api/usuarios/${this.userId}/obras/${idObra}/etapas/${idEtapa}/servicos`,
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
    return this.http.delete<any>(
      `/api/api/usuarios/${this.userId}/obras/${idObra}/etapas/${idEtapa}/servicos/${idServico}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.userToken}`,
        },
      }
    );
  }

  delAllJob(idObra: any, idEtapa: any) {
    return this.http.delete<any>(
      `/api/api/usuarios/${this.userId}/obras/${idObra}/etapas/${idEtapa}/servicos/`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.userToken}`,
        },
      }
    );
  }

  putAllJob(idObra: any, idEtapa: any, data: any) {
    return this.http.put<any>(
      `/api/api/usuarios/${this.userId}/obras/${idObra}/etapas/${idEtapa}/servicos/atualizar`,
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
