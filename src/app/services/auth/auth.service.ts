import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor() { }


  isAuthenticated() {

    const session: any  = sessionStorage.getItem('currentUser');
    const data = JSON.parse(session);
    console.log('Auth');
    console.log(data);
  }

}

