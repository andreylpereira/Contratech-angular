import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

/* Services */
import { JobService } from 'src/app/services/job/job.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css'],
})
export class JobComponent implements OnInit {

  @Input()
  etapaId: number | undefined;
  obraId: any;
  public jobsForm: any;
  public listJobs: any;

  constructor(
    private jobService: JobService,
    private fb: FormBuilder,
    public route: ActivatedRoute
  ) {
    this.obraId = this.route.snapshot.paramMap.get('id');
    this.jobsForm = this.fb.group({
      jobs: this.fb.array([]),
    });
  }

  ngOnInit() {
    this.jobService.getJobs(this.obraId, this.etapaId).subscribe((data) => {
      this.listJobs = data;

      this.addListJobs(data.length);
    });
  }

  /*
   ! Função que transforma todos os dados recebidos do banco de dados em FormGroup para posteriormente serem inseridos no FormArray ("jobsForm")
   ? Obs: Necessário desenvolver as validações necessárias.
   */
  addListJobs(x: number) {
    for (let i = 0; i < x; i++) {
      let newUsergroup: FormGroup = this.fb.group({
        id: [this.listJobs[i].id],
        nomeServico: [this.listJobs[i].nomeServico],
        preco: [this.listJobs[i].preco],
        quantidade: [this.listJobs[i].quantidade],
        porcentagem: [this.listJobs[i].porcentagem],
      });
      this.jobsForm.controls.jobs.push(newUsergroup);
    }
  }

  deleteJob(id: number) {
    return this.jobService
      .delJob(this.obraId, this.etapaId, id)
      .subscribe(() => {
        this.jobsForm.controls.jobs.clear();
        this.ngOnInit();
      });
  }

  createJob() {
    return this.jobService.addJob(this.obraId, this.etapaId).subscribe(() => {
      this.jobsForm.controls.jobs.clear();
      this.ngOnInit();
    });
  }

  deleteAllJob() {
    return this.jobService
      .delAllJob(this.obraId, this.etapaId)
      .subscribe(() => {
        this.jobsForm.controls.jobs.clear();
        this.ngOnInit();
      });
  }

  updateAllJobs() {
    const data = this.jobsForm.controls.jobs['value'];
    console.log(data);

    return this.jobService
      .putAllJob(this.obraId, this.etapaId, data)
      .subscribe(() => {
        this.jobsForm.controls.jobs.clear();
        this.ngOnInit();
      });
  }
}
