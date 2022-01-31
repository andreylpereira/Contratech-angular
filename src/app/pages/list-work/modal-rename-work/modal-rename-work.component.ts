import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/* Services */
import { ListWorkService } from 'src/app/services/list-work/list-work.service';

@Component({
  selector: 'app-modal-rename-work',
  templateUrl: './modal-rename-work.component.html',
  styleUrls: ['./modal-rename-work.component.css'],
})
export class ModalRenameWorkComponent implements OnInit {
  public nomeObra: string = '';
  public idObra: number = 0;

  constructor(
    private listWorkService: ListWorkService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ModalRenameWorkComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { idObra: number }
  ) {}

  ngOnInit(): void {}

  public renameForm: FormGroup = this.formBuilder.group({
    nomeObra: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(35)],
    ],
  });

  cancel(): void {
    this.dialogRef.close();
  }

  save() {
    const nomeObra = this.renameForm.get('nomeObra')?.value;
    if (this.renameForm.valid) {
      this.listWorkService.renameWork(nomeObra, this.data.idObra).subscribe();
      this.dialogRef.close();
    }
  }
}
