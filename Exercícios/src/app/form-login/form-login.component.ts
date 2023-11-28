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
  userEmail: string = '';

  fazerLogin(): void {
    // Lógica de autenticação (neste exemplo, estamos apenas atribuindo o email para simular o login)
    this.userEmail = this.email; // Certifique-se de que o email está sendo atribuído corretamente
    this.logado = true; // Define o estado logado como true

    // Outros processamentos após o login bem-sucedido
    console.log(this.userEmail); // Verifique no console se o email está sendo corretamente atribuído
  }
}
