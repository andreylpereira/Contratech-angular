import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from 'src/app/services/auth-guard/auth-guard.service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public isLoggedIn: boolean = false;
  public user: any = {};
  constructor(
    private authGuardService: AuthGuardService,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authGuardService.canActivate();
    const data: any = sessionStorage.getItem('currentUser');
    this.user = JSON.parse(data);
  }

  logOut() {
    this.loginService.logout();
    this.router.navigate(['login']);
  }
}
