import { IPaginaHTML } from "./shared/pagina.interface";

 
 class Index implements IPaginaHTML {

  btnCadastroTarefa: HTMLButtonElement;

  constructor() {
    
    this.configurarElementos();
  }

  //metodo responsavel pelo dataBiding dos elementos da página
  public configurarElementos(): void {
   }

}

new Index();