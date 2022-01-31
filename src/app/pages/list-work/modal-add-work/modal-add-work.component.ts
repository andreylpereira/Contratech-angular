import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/* Services */
import { ListWorkService } from 'src/app/services/list-work/list-work.service';

@Component({
  selector: 'app-modal-add-work',
  templateUrl: './modal-add-work.component.html',
  styleUrls: ['./modal-add-work.component.css'],
})
export class ModalAddWorkComponent implements OnInit {
  public nomeObra: string = '';
  public idObra: number = 0;

  constructor(
    private listWorkService: ListWorkService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ModalAddWorkComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { idObra: number }
  ) {}

  ngOnInit(): void {}

  public addForm: FormGroup = this.formBuilder.group({
    nomeObra: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(35)],
    ],
  });

  cancel(): void {
    this.dialogRef.close();
  }

  addWork() {
    const nomeObra = this.addForm.get('nomeObra')?.value;
    if (this.addForm.valid) {
      this.listWorkService.addWork(nomeObra).subscribe();
      this.dialogRef.close();
    }
  }
}
