import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user: { id: number; token: string } = {
    id: 0,
    token: '',
  };

  constructor() {}

  getUser() {

    const session: any = localStorage.getItem('currentUser');
    const data = JSON.parse(session);
    this.user.id = data.id;
    this.user.token = data.token;
    return this.user;
  }
}
