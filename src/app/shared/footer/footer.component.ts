import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  email: string = 'contratech@gmail.com';
  appName: string = 'Contratech 2022';
  constructor() { }

  ngOnInit(): void {
  }

}
