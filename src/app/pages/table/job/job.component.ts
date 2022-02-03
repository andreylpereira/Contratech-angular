import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


/* Services */
import { JobService } from 'src/app/services/job/job.service';
import { ReportService } from 'src/app/services/report/report.service';

/* Validations custom do formulário */
import formValidations from '../job/form-validations';
@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css'],
})
export class JobComponent implements OnInit {

  @Input()
  public etapaId: number | undefined;

  private obraId: any;

  public jobsForm: any;
  public listJobs: any;

  loader: boolean = false;

  constructor(
    private jobService: JobService,
    private reportService: ReportService,
    private fb: FormBuilder,
    public route: ActivatedRoute,
  ) {
    this.obraId = this.route.snapshot.paramMap.get('id');

    this.jobsForm = this.fb.group({
      jobs: this.fb.array([]),
    });
  }

  ngOnInit() {
    this.loader = true;

    this.jobService.getJobs(this.obraId, this.etapaId).subscribe((data) => {
      this.listJobs = data;
      this.addListJobs(data.length);

    });
    this.loader = false;
  }

  /*
   ! Função que transforma todos os dados recebidos do banco de dados em FormGroup para posteriormente serem inseridos no FormArray ("jobsForm")
   ? Obs: Necessário desenvolver as validações necessárias.
   */
  addListJobs(x: number) {
    for (let i = 0; i < x; i++) {
      let newUsergroup: FormGroup = this.fb.group({
        id: [this.listJobs[i].id],
        nomeServico: [
          this.listJobs[i].nomeServico,
          [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(35),
          ],
        ],
        preco: [
          this.listJobs[i].preco,
          [Validators.required, formValidations.precoValidator],
        ],
        quantidade: [
          this.listJobs[i].quantidade,
          [Validators.required, formValidations.quantidadeValidator],
        ],
        porcentagem: [
          this.listJobs[i].porcentagem,
          [Validators.required, formValidations.porcentagemValidator],
        ],
      });
      this.jobsForm.controls.jobs.push(newUsergroup);
    }
  }

  createJob() {
    this.loader = true;

    return this.jobService.addJob(this.obraId, this.etapaId).subscribe(
      () => {

        this.jobsForm.controls.jobs.clear();
        this.ngOnInit();
      });
  }

  deleteJob(id: number) {
    this.loader = true;

    return this.jobService.delJob(this.obraId, this.etapaId, id).subscribe(
      () => {

        this.jobsForm.controls.jobs.clear();
        this.ngOnInit();
      });
  }

  deleteAllJob() {
    this.loader = true;

    return this.jobService.delAllJob(this.obraId, this.etapaId).subscribe(
      () => {

        this.jobsForm.controls.jobs.clear();
        this.loader = false;
        this.ngOnInit();
      });
  }

  updateAllJobs() {
    const data = this.jobsForm.controls.jobs['value'];

    this.loader = true;

    return this.jobService.putAllJob(this.obraId, this.etapaId, data).subscribe(
      () => {

        this.reportService.workReport(this.obraId).subscribe();
        this.jobsForm.controls.jobs.clear();
        this.ngOnInit();

      });
  }
}
