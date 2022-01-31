import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/* Services */
import { TableService } from 'src/app/services/table/table.service';

@Component({
  selector: 'app-modal-add-stage',
  templateUrl: './modal-add-stage.component.html',
  styleUrls: ['./modal-add-stage.component.css']
})
export class ModalAddStageComponent implements OnInit {
  public nomeEtapa: string = '';

  constructor(
    private tableService: TableService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ModalAddStageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { idObra: number }) { }

  ngOnInit(): void {
  }

  public addForm: FormGroup = this.formBuilder.group({
    nomeEtapa: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(35)],
    ],
  });

  cancel(): void {
    this.dialogRef.close();
  }

  addStage() {
    const nomeEtapa = this.addForm.get('nomeEtapa')?.value;
    if (this.addForm.valid) {
      this.tableService.addStage(this.data.idObra, nomeEtapa).subscribe();
      this.dialogRef.close();
    }
  }
}
