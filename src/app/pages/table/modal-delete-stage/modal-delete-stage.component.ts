import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

/* Services */
import { TableService } from 'src/app/services/table/table.service';

@Component({
  selector: 'app-modal-delete-stage',
  templateUrl: './modal-delete-stage.component.html',
  styleUrls: ['./modal-delete-stage.component.css'],
})
export class ModalDeleteStageComponent implements OnInit {
  constructor(
    private tableService: TableService,

    public dialogRef: MatDialogRef<ModalDeleteStageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { idObra: number; idEtapa: number }
  ) {}

  ngOnInit(): void {}

  cancel(): void {
    this.dialogRef.close();
  }

  delStage() {
    this.tableService
      .deleteStage(this.data.idObra, this.data.idEtapa)
      .subscribe();
    this.dialogRef.close();
  }
}
