import { EntidadeBase } from "../../shared/entidade.model";

export class Item extends EntidadeBase{
  public descricao: string;
 

  constructor(descricao:string){
    super();
    this.descricao = descricao;

  }
}