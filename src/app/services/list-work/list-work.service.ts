import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ListWorkService {
  private id: number = 0;
  private token: string = '';
  constructor(private http: HttpClient, private router: Router) {}

  getListWork() {
    const session: any = sessionStorage.getItem('currentUser');
    const data = JSON.parse(session);


    return this.http.get<any>(`/api/api/usuarios/${data.id}/obras`, {headers: {'Authorization': 'Bearer ' + data.token}}).subscribe(response => {
      console.log(response)

    });
  }
}
