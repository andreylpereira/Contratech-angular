import Job from "src/app/models/job.model";

export default interface Stage {
  id: number;
  nomeEtapa: string;
  percentualMedio: number;
  valorTotal: number;
  etapas: Array<Job>;
}
