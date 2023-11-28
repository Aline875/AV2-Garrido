import { Component } from '@angular/core';

enum TipoUsuario {
  USUARIO = 'Usuário',
  ADMINISTRADOR = 'Administrador',
  COLABORADOR = 'Colaborador'
}

@Component({
  selector: 'app-controle-acesso',
  templateUrl: './controle-acesso.component.html',
  styleUrls: ['./controle-acesso.component.css']
})
export class ControleAcessoComponent {
  tipoUsuario: typeof TipoUsuario = TipoUsuario;

  tipoUsuarioAtual: TipoUsuario = TipoUsuario.USUARIO;
  textoExibicao: string = '';

  mudarTipoUsuario(tipo: TipoUsuario): void {
    this.tipoUsuarioAtual = tipo;
    this.atualizarTextoExibicao();
  }

  atualizarTextoExibicao(): void {
    this.textoExibicao = `Você tem permissão de ${this.tipoUsuarioAtual.toLowerCase()}.`;
  }
}
