import { Component } from '@angular/core';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {
  email: string = '';
  senha: string = '';
  logado: boolean = false;
  mostrarFormulario: boolean = true;

  fazerLogin(): void {
    // Simulando a lógica de autenticação (pode ser ajustada conforme necessário)
    if (this.email !== '' && this.senha !== '') {
      this.logado = true;
      this.mostrarFormulario = false;
    }
  }
}
