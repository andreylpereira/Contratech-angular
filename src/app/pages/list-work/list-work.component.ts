import { Component, OnInit } from '@angular/core';
import { ListWorkService } from 'src/app/services/list-work/list-work.service';
import Work from '../../../app/models/work.model'

@Component({
  selector: 'app-list-work',
  templateUrl: './list-work.component.html',
  styleUrls: ['./list-work.component.css']
})
export class ListWorkComponent implements OnInit {

  listWorks: Work[] = [];
  displayedColumns: string[] = ['nomeObra', 'id'];

  constructor(private listWorkService: ListWorkService) { }

  ngOnInit(): void {
    this.listWorkService.getListWork()
    .subscribe(
      data => this.listWorks = data
      )
  }


}
