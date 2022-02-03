import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/* Services */
import { TableService } from 'src/app/services/table/table.service';

@Component({
  selector: 'app-modal-rename-stage',
  templateUrl: './modal-rename-stage.component.html',
  styleUrls: ['./modal-rename-stage.component.css'],
})
export class ModalRenameStageComponent implements OnInit {
  public nomeEtapa: string = '';

  constructor(
    private tableService: TableService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ModalRenameStageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { idObra: number; idEtapa: number }
  ) {}

  ngOnInit(): void {}

  public addForm: FormGroup = this.formBuilder.group({
    nomeEtapa: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(35)],
    ],
  });

  cancel(): void {
    this.dialogRef.close();
  }

  editStage() {
    const nomeEtapa = this.addForm.get('nomeEtapa')?.value;
    if (this.addForm.valid) {
      this.tableService
        .renameStage(this.data.idObra, nomeEtapa, this.data.idEtapa)
        .subscribe();
      this.dialogRef.close();
    }
  }
}
