import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/* Model */
import Work from 'src/app/models/work.model';

/* Service */
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root',
})
export class ListWorkService {
  private userId: number = 0;
  private userToken: string = '';

  constructor(private userService: UserService, private http: HttpClient) {
    this.userId = this.userService.getUser().id;
    this.userToken = this.userService.getUser().token;
  }

  getListWork() {
    return this.http.get<Array<Work>>(
      `/api/api/usuarios/${this.userId}/obras`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + this.userToken,
        },
      }
    );
  }

  renameWork(nomeObra: string, idObra: number) {
    return this.http.put(
      `/api/api/usuarios/${this.userId}/obras/${idObra}`,
      { nomeObra: nomeObra },
      { headers: { Authorization: 'Bearer ' + this.userToken } }
    );
  }

  addWork(nomeObra: string) {
    return this.http.post(
      `/api/api/usuarios/${this.userId}/obras`,
      { nomeObra: nomeObra },
      { headers: { Authorization: 'Bearer ' + this.userToken } }
    );
  }

  deleteWork(idObra: number) {
    return this.http.delete(
      `/api/api/usuarios/${this.userId}/obras/${idObra}`,
      { headers: { Authorization: 'Bearer ' + this.userToken } }
    );
  }
}
