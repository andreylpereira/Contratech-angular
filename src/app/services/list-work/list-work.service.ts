import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

/* Model */
import Work from 'src/app/models/work.model';

@Injectable({
  providedIn: 'root'
})
export class ListWorkService {

  constructor(private http: HttpClient, private router: Router) {}

  getListWork() {
    const session: any = sessionStorage.getItem('currentUser');
    const data = JSON.parse(session);

    return this.http.get<Array<Work>>(`/api/api/usuarios/${data.id}/obras`, {headers: {'Authorization': 'Bearer ' + data.token}});
  }
}
