import { Component, OnInit } from '@angular/core';
import { ListWorkService } from 'src/app/services/list-work/list-work.service';

@Component({
  selector: 'app-list-work',
  templateUrl: './list-work.component.html',
  styleUrls: ['./list-work.component.css']
})
export class ListWorkComponent implements OnInit {

  constructor(private listWorkService: ListWorkService) { }

  ngOnInit(): void {
    this.listWorkService.getListWork();
  }

}
