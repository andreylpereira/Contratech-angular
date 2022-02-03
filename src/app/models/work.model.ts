import Stage from 'src/app/models/stage.model';

export default interface Work {
  id: number;
  nomeObra: string;
  percentualMedioFinal: number;
  valorTotalFinal: number;
  etapas: Array<Stage>;
}
