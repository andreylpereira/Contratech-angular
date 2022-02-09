import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

/* Models */
import Stage from 'src/app/models/stage.model';
import Work from 'src/app/models/work.model';

/* Service */
import { ReportService } from 'src/app/services/report/report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
})
export class ReportComponent implements OnInit {
  private obraId: any;
  public report: Work | any;
  public stageList: Stage[] = [];

  constructor(
    private reportService: ReportService,
    public route: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getReport();
}

private getReport() {
  this.obraId = this.route.snapshot.paramMap.get('id');

    this.reportService.workReport(this.obraId).subscribe((result) => {
      this.report = result;
      this.stageList.push(...result.etapas);
    },
    () => {
      this.toastr.error(
        'Não foi possível carregar o contrato. Verifique sua internet e tente outra vez!',
        'Atenção!'
      );
    }
    );
  }
}
