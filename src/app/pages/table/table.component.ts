import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

/* Services */
import { TableService } from 'src/app/services/table/table.service';

/* Model */
import Stage from 'src/app/models/stage.model';

/* Components */
import { ModalAddStageComponent } from 'src/app/pages/table/modal-add-stage/modal-add-stage.component';
import { ModalRenameStageComponent } from 'src/app/pages/table/modal-rename-stage/modal-rename-stage.component';
import { ModalDeleteStageComponent } from 'src/app/pages/table/modal-delete-stage/modal-delete-stage.component';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})

export class TableComponent implements OnInit {
  id: any;
  listStages: Stage[] = [];
  constructor(
    private tableService: TableService,
    public route: ActivatedRoute,
    public dialog: MatDialog,
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.tableService
      .getListStage(this.id)
      .subscribe((data) => (this.listStages = data));
  }

  modalAdd(): void {
    const dialogRef = this.dialog.open(ModalAddStageComponent, {
      width: '400px',
      height: '250px',
      data: { idObra: this.id },
    });

    dialogRef.afterClosed().subscribe((result) => {
      result = this.tableService
      .getListStage(this.id)
        .subscribe((newList) => (this.listStages = newList));
    });
  }

  modalRename(idEtapa: number): void {
    const dialogRef = this.dialog.open(ModalRenameStageComponent, {
      width: '400px',
      height: '250px',
      data: { idObra: this.id, idEtapa: idEtapa },
    });

    dialogRef.afterClosed().subscribe((result) => {
      result = this.tableService
      .getListStage(this.id)
        .subscribe((newList) => (this.listStages = newList));
    });
  }

  modalDelete(idEtapa: number): void {
    const dialogRef = this.dialog.open(ModalDeleteStageComponent, {
      width: '400px',
      height: '175px',
      data: { idObra: this.id, idEtapa: idEtapa },
    });

    dialogRef.afterClosed().subscribe((result) => {
      result = this.tableService
      .getListStage(this.id)
        .subscribe((newList) => (this.listStages = newList));
    });
  }
}
