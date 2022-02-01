import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ModalAddWorkComponent } from 'src/app/pages/list-work/modal-add-work/modal-add-work.component';
import { ModalRenameWorkComponent } from 'src/app/pages/list-work/modal-rename-work/modal-rename-work.component';

/* Services */
import { ListWorkService } from 'src/app/services/list-work/list-work.service';

/* Model */
import Work from '../../../app/models/work.model';

@Component({
  selector: 'app-list-work',
  templateUrl: './list-work.component.html',
  styleUrls: ['./list-work.component.css'],
})
export class ListWorkComponent implements OnInit {
  listWorks: Work[] = [];
  displayedColumns: string[] = ['nomeObra', 'id'];
  disabled: boolean = false;

  constructor(
    private listWorkService: ListWorkService,
    public dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listWorkService
      .getListWork()
      .subscribe((data) => (this.listWorks = data));
  }

  modalAdd(): void {
    const dialogRef = this.dialog.open(ModalAddWorkComponent, {
      width: '400px',
      height: '250px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      result = this.listWorkService
        .getListWork()
        .subscribe((newList) => (this.listWorks = newList));
    });
  }

  modalRename(id: number): void {
    const dialogRef = this.dialog.open(ModalRenameWorkComponent, {
      width: '400px',
      height: '250px',
      data: { idObra: id },
    });

    dialogRef.afterClosed().subscribe((result) => {
      result = this.listWorkService
        .getListWork()
        .subscribe((newList) => (this.listWorks = newList));
    });
  }

  removeWork(idObra: number): void {
    this.listWorkService.deleteWork(idObra).subscribe((result) => {
      result = this.listWorkService
        .getListWork()
        .subscribe((newList) => (this.listWorks = newList));
    });
  }

  goToEtapas(id: number) {
    this.router.navigate([`/obras/${id}/etapas`]);
  }

  goToRelatorio(id: number) {
    this.router.navigate([`obras/${id}/relatorio`]);
  }
}
