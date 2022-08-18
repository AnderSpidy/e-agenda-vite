
//extends = herança, herdando dados
//implements = Interface, implementando interface

import { EntidadeBase } from "../../shared/entidade.model";
import { Item } from "./item.model";
import { Prioridade } from "./prioridade.enum";

export class Tarefa extends EntidadeBase{
  public descricao: string;
  public dataCriacao: Date;
  public dataConclusao: Date | "Não Concluido";
  public prioridade: Prioridade;
  public itens: Item[];
  public porcentagemConclusao: number;

  constructor(descricao:string, prioridade:Prioridade, id?: string){
    super();

    if(id){
      this.id = id;
    }
    this.prioridade = prioridade;

    this.dataConclusao = "Não Concluido";
    this.descricao = descricao;
    this.dataCriacao = new Date();


  }
}