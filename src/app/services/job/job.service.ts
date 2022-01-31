import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Job from 'src/app/models/job.model';
import { UserService } from 'src/app/services/user/user.service';

@Injectable({
  providedIn: 'root'
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
          Authorization: 'Bearer ' + this.userToken,
        },
      }
    );
  }
}
