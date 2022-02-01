import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReportService } from 'src/app/services/report/report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
})
export class ReportComponent implements OnInit {
  obraId: any;
  report: any;

  constructor(
    private reportService: ReportService,
    public route: ActivatedRoute
  ) {
    this.obraId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
  this.reportService.workReport(this.obraId).subscribe(result => this.report = result)
  }

  click() {
    console.log(this.report);

  }
}
