import { IPaginaHTML } from "../shared/pagina.interface";
import { IPaginaListagem } from "../shared/pagina.list.interface";
import { IRepositorio } from "../shared/repositorio.interface";
import { Contato } from "./models/contato.model";
import { ContatoRepositoryLocalStorage } from "./repositories/contato.repository.local-storage";

class ContatoPaginaListagem implements IPaginaHTML,IPaginaListagem{
  tabela: HTMLTableElement;
  
  constructor(private repositorioTarefas: IRepositorio<Contato>){
    this.configurarElementos();
    this.atualizarTabela();
  }
  
  
  configurarElementos(): void {
    this.tabela = document.getElementById("tabela") as HTMLTableElement;
  }

  atualizarTabela(): void {
    const contatos = this.repositorioTarefas.selecionarTodos();

    let corpoTabela = this.tabela.getElementsByTagName("tbody")[0];

    contatos.forEach(contato => {
      const novaLinha = corpoTabela.insertRow();

      Object.values(contato).forEach((valor: any) => {
        const novaCelula = novaLinha.insertCell();

        novaCelula.innerText = valor;
      });
      const celulaBotoes = novaLinha.insertCell();

      const btnEditar = document.createElement("a");
      btnEditar.innerText = "Editar";
      btnEditar.className = "btn btn-primary me-1"

      btnEditar.addEventListener("click", () =>{
        const idSelecionado = contato.id;

        //query parameter
        window.location.href = `contato.create.html?id=${idSelecionado}`;
      });
      const btnExcluir = document.createElement("a");
      btnExcluir.innerText = "Excluir";
      btnExcluir.className = "btn btn-outline-warning"

      btnExcluir.addEventListener("click", () =>{
        const idSelecionado = contato.id;

        this.repositorioTarefas.excluir(idSelecionado);

        //recarrega a pagina
        window.location.reload();

      });
      celulaBotoes.appendChild(btnEditar);
      celulaBotoes.appendChild(btnExcluir);
    });
  }
} 

new ContatoPaginaListagem(new ContatoRepositoryLocalStorage());