import Work from "src/app/models/work.model";

export default interface User {
  id: number;
  login: string;
  nome: string;
  sobrenome: string;
  email: string;
  senha: string;
  ativo: boolean;
  role: string;
  obras: Array<Work>
}
