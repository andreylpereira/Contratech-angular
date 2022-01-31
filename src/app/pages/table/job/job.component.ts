import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Job from 'src/app/models/job.model';
import { JobService } from 'src/app/services/job/job.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  @Input()
  etapaId: number | undefined;
  obraId: any;
  listJobs: Job[] = [];

  displayedColumns: string[] = ['Serviço', 'Preço', 'Quantidade', 'Porcentagem', 'id'];
  columnsToDisplay = ['Serviço', 'Preço', 'Quantidade', 'Porcentagem', 'id'];

  constructor(private jobService: JobService, public route: ActivatedRoute) {
    this.obraId = this.route.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
  this.jobService.getJobs(this.obraId, this.etapaId).subscribe((data) => (this.listJobs = data))
  }


}

