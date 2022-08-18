import { IRepositorioSerializavel } from "../../shared/repositorio-serializavel.interface";
import { IRepositorio } from "../../shared/repositorio.interface";
import { Contato } from "../models/contato.model";


export class ContatoRepositoryLocalStorage implements IRepositorio<Contato>, IRepositorioSerializavel{
  private readonly localStorage:Storage;

  private contatos: Contato[];

  
  constructor(){
    this.localStorage = window.localStorage;

    this.contatos = this.selecionarTodos();
  }

  public inserir(registro: Contato): void {
    this.contatos.push(registro);
    this.gravar();
  }

  editar(id: string, registroEditado: Contato): void {
    const indexSelecionado = this.contatos.findIndex(x => x.id === id);

    this.contatos[indexSelecionado] = {
      id: id,
      nomeContato: registroEditado.nomeContato,
      email: registroEditado.email,
      telefone: registroEditado.telefone,
      empresa: registroEditado.empresa,
      cargo: registroEditado.cargo
    }
    this.gravar();
  }

  excluir(id: string): void {
    this.contatos = this.contatos.filter(x => x.id !== id);
    this.gravar();
  }

 
  public gravar(): void {
    const contatosJsonString = JSON.stringify(this.contatos);

    this.localStorage.setItem("contatos",contatosJsonString);
  }
  
  
  public selecionarTodos(): Contato[] {
    const dados = this.localStorage.getItem("contatos");
    if(!dados)
      return[];

    return JSON.parse(dados);

  }
  selecionarPorId(id: string): Contato | undefined {
    return this.contatos.find(x => x.id === id);
  }

}