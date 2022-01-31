import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

/* Services */
import { TableService } from 'src/app/services/table/table.service';

/* Services */
import Stage from 'src/app/models/stage.model';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})

export class TableComponent implements OnInit {
  obraId: any;
  listStages: Stage[] = [];
  constructor(
    private tableService: TableService,
    public route: ActivatedRoute
  ) {
    this.obraId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.tableService
      .getListStage(this.obraId)
      .subscribe((data) => (this.listStages = data));
  }

}
